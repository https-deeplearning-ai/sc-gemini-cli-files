
import re
import json

def parse_schedule(content):
    sessions = []
    current_day = ""
    
    lines = content.split('\n')
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        
        # Day marker
        if "Day 1:" in line: current_day = "Day 1"
        elif "Day 2:" in line: current_day = "Day 2"
        elif "Day 3:" in line: current_day = "Day 3"
        
        # Time block
        time_match = re.match(r'\*\*(\d{2}:\d{2} [AP]M - \d{2}:\d{2} [AP]M): (.*)\*\*', line)
        if time_match:
            time_range = time_match.group(1)
            category_raw = time_match.group(2)
            
            # Categories
            category = "Breakout"
            if "Keynote" in category_raw: category = "Keynote"
            elif "Learning Lab" in category_raw: category = "Learning Lab"
            elif any(x in category_raw for x in ["Registration", "Breakfast", "Lunch", "Remarks"]):
                i += 1
                continue

            # Look ahead for sessions in this block
            i += 1
            while i < len(lines) and not lines[i].strip().startswith('**'):
                line_content = lines[i]
                if line_content.startswith('*'):
                    title_part = line_content.strip()[2:].strip()
                    title = ""
                    speaker = "TBD"
                    location = "Main Hall A"
                    abstract = ""
                    
                    if "**" in title_part:
                        parts = title_part.split("**")
                        if len(parts) > 1:
                            title = parts[1].strip()
                        
                        loc_match = re.search(r'\((Room \d+)\)', title_part)
                        if loc_match:
                            location = loc_match.group(1)
                        
                        if " - " in title_part:
                            speaker = title_part.split(" - ")[-1].replace("*", "").strip()
                    else:
                        title = title_part

                    # Sub-items
                    j = i + 1
                    while j < len(lines) and lines[j].startswith('    *'):
                        sub_line = lines[j].strip()
                        if "Speaker:" in sub_line:
                            speaker = sub_line.split("Speaker:")[1].strip().replace("**", "").strip()
                        elif "Location:" in sub_line:
                            location = sub_line.split("Location:")[1].strip().replace("**", "").strip()
                        elif "Abstract:" in sub_line:
                            abstract = sub_line.split("Abstract:")[1].strip().replace("**", "").strip()
                        elif sub_line.startswith('*'):
                            clean_sub = sub_line.lstrip('*').strip().replace("**", "").strip()
                            if abstract == "" and clean_sub:
                                abstract = clean_sub
                        j += 1
                    
                    session_id = f"session-{len(sessions) + 1}"
                    
                    # Clean title, speaker, location
                    title = title.replace("**", "").strip()
                    speaker = speaker.replace("**", "").strip()
                    location = location.replace("**", "").strip()
                    
                    # Heuristics
                    level = "Intermediate"
                    if any(w in title.lower() or abstract.lower() for w in ["advanced", "masterclass", "deep dive", "scale", "performance", "high-throughput", "at scale"]):
                        level = "Advanced"
                    elif any(w in title.lower() or abstract.lower() for w in ["intro", "beginner", "basics", "future of"]):
                        level = "Beginner"
                        
                    tracks = []
                    text = (title + " " + abstract).lower()
                    if any(w in text for w in ["ai", "ml", "neural", "intelligence", "models"]): tracks.append("AI/ML")
                    if any(w in text for w in ["react", "frontend", "web", "css", "wasm", "micro-frontend", "ux"]): tracks.append("Frontend")
                    if any(w in text for w in ["kubernetes", "cloud", "scaling", "infrastructure", "postgre", "kafka", "flink", "distribute", "mesh", "service mesh"]): tracks.append("Cloud & Infrastructure")
                    if any(w in text for w in ["securing", "api", "identity", "trust", "security"]): tracks.append("Security")
                    
                    if not tracks: tracks.append("Software Engineering")

                    sessions.append({
                        "id": session_id,
                        "title": title,
                        "speaker": speaker,
                        "category": category,
                        "day": current_day,
                        "time": time_range,
                        "location": location,
                        "description": abstract if abstract else title,
                        "details": {
                            "fullDescription": abstract if abstract else title,
                            "takeaways": ["Industry Trends", "Best Practices", "Hands-on Knowledge"],
                            "tracks": tracks,
                            "level": level,
                            "speakerBio": f"{speaker} is a recognized expert in the tech industry."
                        }
                    })
                    i = j - 1 # Advance i to skip processed sub-items
                i += 1
            continue
        i += 1
    return sessions

with open('schedule.md', 'r', encoding='utf-8') as f:
    content = f.read()

sessions = parse_schedule(content)

output = """export interface Session {
  id: string;
  title: string;
  speaker: string;
  category: 'Keynote' | 'Breakout' | 'Learning Lab' | 'Customer Story' | 'Expo';
  day: 'Day 1' | 'Day 2' | 'Day 3';
  time: string;
  location: string;
  description: string;
  details?: {
    fullDescription: string;
    takeaways: string[];
    tracks: string[];
    level?: string;
    speakerBio?: string;
  };
}

"""

print(output)
print("export const SESSIONS: Session[] = " + json.dumps(sessions, indent=2) + ";")
