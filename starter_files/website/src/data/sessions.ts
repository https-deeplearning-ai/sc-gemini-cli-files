export interface Session {
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


export const SESSIONS: Session[] = [
  {
    "id": "session-1",
    "title": "The Future of AI is Here",
    "speaker": "Dr. Elena Rostova, CEO",
    "category": "Keynote",
    "day": "Day 1",
    "time": "09:00 AM - 10:30 AM",
    "location": "Main Hall A",
    "description": "Join our CEO for the opening keynote as we explore the groundbreaking advancements in AI technology and what lies ahead for the industry.",
    "details": {
      "fullDescription": "Join our CEO for the opening keynote as we explore the groundbreaking advancements in AI technology and what lies ahead for the industry.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "AI/ML"
      ],
      "level": "Advanced",
      "speakerBio": "Dr. Elena Rostova, CEO is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-2",
    "title": "End-to-End MLOps with Kubernetes",
    "speaker": "Marcus Chen",
    "category": "Learning Lab",
    "day": "Day 1",
    "time": "09:00 AM - 11:00 AM",
    "location": "Lab C",
    "description": "Learn the entire MLOps lifecycle. From data ingestion to model training, containerization, and deployment to a Kubernetes cluster.",
    "details": {
      "fullDescription": "Learn the entire MLOps lifecycle. From data ingestion to model training, containerization, and deployment to a Kubernetes cluster.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "AI/ML",
        "Cloud & Infrastructure"
      ],
      "level": "Advanced",
      "speakerBio": "Marcus Chen is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-3",
    "title": "Micro-Frontends at Scale",
    "speaker": "Priya Patel",
    "category": "Breakout",
    "day": "Day 1",
    "time": "11:00 AM - 12:00 PM",
    "location": "Room 101",
    "description": "Learn how to brand distributed niches effectively.",
    "details": {
      "fullDescription": "Learn how to brand distributed niches effectively.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "Frontend",
        "Cloud & Infrastructure"
      ],
      "level": "Advanced",
      "speakerBio": "Priya Patel is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-4",
    "title": "Real-Time Event Streaming with Kafka",
    "speaker": "Sarah Johnson",
    "category": "Breakout",
    "day": "Day 1",
    "time": "11:00 AM - 12:00 PM",
    "location": "Room 201",
    "description": "Real-world case study on unleashing real-time initiatives.",
    "details": {
      "fullDescription": "Real-world case study on unleashing real-time initiatives.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "Cloud & Infrastructure"
      ],
      "level": "Advanced",
      "speakerBio": "Sarah Johnson is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-5",
    "title": "Graph Neural Networks in Practice",
    "speaker": "Isabella Martinez",
    "category": "Learning Lab",
    "day": "Day 1",
    "time": "11:00 AM - 01:00 PM",
    "location": "Lab A",
    "description": "Workshop: Generating extensible relationships.",
    "details": {
      "fullDescription": "Workshop: Generating extensible relationships.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "AI/ML"
      ],
      "level": "Advanced",
      "speakerBio": "Isabella Martinez is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-6",
    "title": "Optimizing React Performance",
    "speaker": "David Kim",
    "category": "Breakout",
    "day": "Day 1",
    "time": "01:00 PM - 02:00 PM",
    "location": "Room 102",
    "description": "Strategies for streamlining customized eyeballs.",
    "details": {
      "fullDescription": "Strategies for streamlining customized eyeballs.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "AI/ML",
        "Frontend"
      ],
      "level": "Advanced",
      "speakerBio": "David Kim is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-7",
    "title": "Building Scalable Community Platforms",
    "speaker": "James Wilson",
    "category": "Breakout",
    "day": "Day 1",
    "time": "01:00 PM - 02:00 PM",
    "location": "Room 202",
    "description": "How we e-enabled dynamic communities.",
    "details": {
      "fullDescription": "How we e-enabled dynamic communities.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "Software Engineering"
      ],
      "level": "Advanced",
      "speakerBio": "James Wilson is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-8",
    "title": "High-Throughput Data Pipelines",
    "speaker": "Robert Garcia",
    "category": "Learning Lab",
    "day": "Day 1",
    "time": "02:00 PM - 04:00 PM",
    "location": "Lab B",
    "description": "Hands-on: Transitioning efficient channels.",
    "details": {
      "fullDescription": "Hands-on: Transitioning efficient channels.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "Software Engineering"
      ],
      "level": "Advanced",
      "speakerBio": "Robert Garcia is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-9",
    "title": "Open Source Stewardship Strategy",
    "speaker": "Thomas Lee",
    "category": "Breakout",
    "day": "Day 1",
    "time": "02:30 PM - 03:30 PM",
    "location": "Room 103",
    "description": "Implementing strategic communities for growth.",
    "details": {
      "fullDescription": "Implementing strategic communities for growth.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "Software Engineering"
      ],
      "level": "Advanced",
      "speakerBio": "Thomas Lee is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-10",
    "title": "Securing Modern Web APIs",
    "speaker": "Michael Brown",
    "category": "Breakout",
    "day": "Day 1",
    "time": "02:30 PM - 03:30 PM",
    "location": "Room 203",
    "description": "Targeting holistic web services effectively.",
    "details": {
      "fullDescription": "Targeting holistic web services effectively.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "Frontend",
        "Security"
      ],
      "level": "Advanced",
      "speakerBio": "Michael Brown is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-11",
    "title": "Next-Gen WebAssembly (Wasm)",
    "speaker": "Lisa Wang",
    "category": "Learning Lab",
    "day": "Day 1",
    "time": "04:00 PM - 06:00 PM",
    "location": "Lab A",
    "description": "E-Enabling next-generation web services.",
    "details": {
      "fullDescription": "E-Enabling next-generation web services.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "Frontend"
      ],
      "level": "Advanced",
      "speakerBio": "Lisa Wang is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-12",
    "title": "Building Ethical AI Systems",
    "speaker": "Prof. Emily Carter",
    "category": "Keynote",
    "day": "Day 2",
    "time": "09:00 AM - 10:00 AM",
    "location": "Main Hall A",
    "description": "A deep dive into the importance of ethics in AI development, ensuring safety, fairness, and transparency.",
    "details": {
      "fullDescription": "A deep dive into the importance of ethics in AI development, ensuring safety, fairness, and transparency.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "AI/ML"
      ],
      "level": "Advanced",
      "speakerBio": "Prof. Emily Carter is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-13",
    "title": "Personalization at Scale with AI",
    "speaker": "Maria Hernandez",
    "category": "Learning Lab",
    "day": "Day 2",
    "time": "09:00 AM - 11:00 AM",
    "location": "Lab C",
    "description": "Streamlining B2C experiences lab.",
    "details": {
      "fullDescription": "Streamlining B2C experiences lab.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "AI/ML"
      ],
      "level": "Advanced",
      "speakerBio": "Maria Hernandez is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-14",
    "title": "Building Vertical AI Agents",
    "speaker": "Christopher Davis",
    "category": "Breakout",
    "day": "Day 2",
    "time": "11:00 AM - 12:00 PM",
    "location": "Room 101",
    "description": "Optimizing vertical applications for better performance.",
    "details": {
      "fullDescription": "Optimizing vertical applications for better performance.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "AI/ML"
      ],
      "level": "Advanced",
      "speakerBio": "Christopher Davis is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-15",
    "title": "Distributed Tracing & Observability",
    "speaker": "Jennifer Martinez",
    "category": "Breakout",
    "day": "Day 2",
    "time": "11:00 AM - 12:00 PM",
    "location": "Room 201",
    "description": "Aggregating granular synergies for success.",
    "details": {
      "fullDescription": "Aggregating granular synergies for success.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "Cloud & Infrastructure"
      ],
      "level": "Advanced",
      "speakerBio": "Jennifer Martinez is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-16",
    "title": "Real-Time Analytics with Apache Flink",
    "speaker": "Kevin Anderson",
    "category": "Learning Lab",
    "day": "Day 2",
    "time": "11:00 AM - 01:00 PM",
    "location": "Lab A",
    "description": "Maximize real-time eyeballs workshop.",
    "details": {
      "fullDescription": "Maximize real-time eyeballs workshop.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "Cloud & Infrastructure"
      ],
      "level": "Advanced",
      "speakerBio": "Kevin Anderson is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-17",
    "title": "Edge AI: Running Models Locally",
    "speaker": "Susan Taylor",
    "category": "Breakout",
    "day": "Day 2",
    "time": "01:00 PM - 02:00 PM",
    "location": "Room 102",
    "description": "Redefining world-class bandwidth standards.",
    "details": {
      "fullDescription": "Redefining world-class bandwidth standards.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "AI/ML"
      ],
      "level": "Advanced",
      "speakerBio": "Susan Taylor is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-18",
    "title": "Benchmarking Large Language Models",
    "speaker": "Daniel White",
    "category": "Breakout",
    "day": "Day 2",
    "time": "01:00 PM - 02:00 PM",
    "location": "Room 202",
    "description": "Benchmarking synergistic vortals in the industry.",
    "details": {
      "fullDescription": "Benchmarking synergistic vortals in the industry.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "AI/ML"
      ],
      "level": "Advanced",
      "speakerBio": "Daniel White is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-19",
    "title": "WebTransport & WebSockets Deep Dive",
    "speaker": "Jessica Thomas",
    "category": "Learning Lab",
    "day": "Day 2",
    "time": "02:00 PM - 04:00 PM",
    "location": "Lab B",
    "description": "Seize next-generation bandwidth tutorial.",
    "details": {
      "fullDescription": "Seize next-generation bandwidth tutorial.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "Frontend"
      ],
      "level": "Advanced",
      "speakerBio": "Jessica Thomas is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-20",
    "title": "Serverless vs. Edge Functions",
    "speaker": "Paul Moore",
    "category": "Breakout",
    "day": "Day 2",
    "time": "02:30 PM - 03:30 PM",
    "location": "Room 103",
    "description": "Techniques to disintermediate back-end web services.",
    "details": {
      "fullDescription": "Techniques to disintermediate back-end web services.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "Frontend"
      ],
      "level": "Advanced",
      "speakerBio": "Paul Moore is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-21",
    "title": "Optimizing 5G for IoT",
    "speaker": "Mark Jackson",
    "category": "Breakout",
    "day": "Day 2",
    "time": "02:30 PM - 03:30 PM",
    "location": "Room 203",
    "description": "Transforming bleeding-edge bandwidth case study.",
    "details": {
      "fullDescription": "Transforming bleeding-edge bandwidth case study.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "Software Engineering"
      ],
      "level": "Advanced",
      "speakerBio": "Mark Jackson is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-22",
    "title": "Scaling Rust for Web Services",
    "speaker": "Laura Martin",
    "category": "Learning Lab",
    "day": "Day 3",
    "time": "09:00 AM - 11:00 AM",
    "location": "Lab C",
    "description": "Scaling next-generation e-business strategies.",
    "details": {
      "fullDescription": "Scaling next-generation e-business strategies.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "Frontend",
        "Cloud & Infrastructure"
      ],
      "level": "Advanced",
      "speakerBio": "Laura Martin is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-23",
    "title": "Migrating from Monolith to Microservices",
    "speaker": "Michelle Wu",
    "category": "Breakout",
    "day": "Day 3",
    "time": "11:00 AM - 12:00 PM",
    "location": "Room 101",
    "description": "Transitioning to holistic models seamlessly.",
    "details": {
      "fullDescription": "Transitioning to holistic models seamlessly.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "AI/ML"
      ],
      "level": "Advanced",
      "speakerBio": "Michelle Wu is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-24",
    "title": "Service Mesh with Istio & Linkerd",
    "speaker": "David O'Connell",
    "category": "Breakout",
    "day": "Day 3",
    "time": "11:00 AM - 12:00 PM",
    "location": "Room 201",
    "description": "Meshing customized web services seamlessly.",
    "details": {
      "fullDescription": "Meshing customized web services seamlessly.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "AI/ML",
        "Frontend",
        "Cloud & Infrastructure"
      ],
      "level": "Advanced",
      "speakerBio": "David O'Connell is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-25",
    "title": "Efficient Video Streaming Protocols",
    "speaker": "Steven Thompson",
    "category": "Learning Lab",
    "day": "Day 3",
    "time": "11:00 AM - 01:00 PM",
    "location": "Lab A",
    "description": "Cultivating efficient bandwidth deep dive.",
    "details": {
      "fullDescription": "Cultivating efficient bandwidth deep dive.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "Software Engineering"
      ],
      "level": "Advanced",
      "speakerBio": "Steven Thompson is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-26",
    "title": "Headless Commerce Architectures",
    "speaker": "Kenneth Lewis",
    "category": "Breakout",
    "day": "Day 3",
    "time": "01:00 PM - 02:00 PM",
    "location": "Room 102",
    "description": "Redefining world-class e-commerce experiences.",
    "details": {
      "fullDescription": "Redefining world-class e-commerce experiences.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "Software Engineering"
      ],
      "level": "Advanced",
      "speakerBio": "Kenneth Lewis is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-27",
    "title": "DevRel: Building Developer Trust",
    "speaker": "Patricia Walker",
    "category": "Breakout",
    "day": "Day 3",
    "time": "01:00 PM - 02:00 PM",
    "location": "Room 202",
    "description": "Monetizing next-generation relationships.",
    "details": {
      "fullDescription": "Monetizing next-generation relationships.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "Security"
      ],
      "level": "Advanced",
      "speakerBio": "Patricia Walker is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-28",
    "title": "GraphQL Federation at Scale",
    "speaker": "Brian Garcia",
    "category": "Learning Lab",
    "day": "Day 3",
    "time": "02:00 PM - 04:00 PM",
    "location": "Lab B",
    "description": "Driving rich web services masterclass.",
    "details": {
      "fullDescription": "Driving rich web services masterclass.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "Frontend"
      ],
      "level": "Advanced",
      "speakerBio": "Brian Garcia is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-29",
    "title": "Multi-Cloud Infrastructure Management",
    "speaker": "Amara Okafor",
    "category": "Breakout",
    "day": "Day 3",
    "time": "02:30 PM - 03:30 PM",
    "location": "Room 103",
    "description": "Engaging distributed infrastructures at scale.",
    "details": {
      "fullDescription": "Engaging distributed infrastructures at scale.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "Cloud & Infrastructure"
      ],
      "level": "Advanced",
      "speakerBio": "Amara Okafor is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-30",
    "title": "Accessibility in Modern Web Apps",
    "speaker": "Tariq Al-Fayed",
    "category": "Breakout",
    "day": "Day 3",
    "time": "02:30 PM - 03:30 PM",
    "location": "Room 203",
    "description": "Re-intermediating rich communities for growth.",
    "details": {
      "fullDescription": "Re-intermediating rich communities for growth.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "Frontend"
      ],
      "level": "Advanced",
      "speakerBio": "Tariq Al-Fayed is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-31",
    "title": "Advanced PostgreSQL Patterns",
    "speaker": "Wei Zhang",
    "category": "Breakout",
    "day": "Day 3",
    "time": "04:00 PM - 05:00 PM",
    "location": "Room 104",
    "description": "E-Enabling efficient schemas for data.",
    "details": {
      "fullDescription": "E-Enabling efficient schemas for data.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "Cloud & Infrastructure"
      ],
      "level": "Advanced",
      "speakerBio": "Wei Zhang is a recognized expert in the tech industry."
    }
  },
  {
    "id": "session-32",
    "title": "Bridging Digital & Physical Retail",
    "speaker": "Mateo Fernandez",
    "category": "Breakout",
    "day": "Day 3",
    "time": "04:00 PM - 05:00 PM",
    "location": "Room 204",
    "description": "Streamlining clicks-and-mortar functionalities.",
    "details": {
      "fullDescription": "Streamlining clicks-and-mortar functionalities.",
      "takeaways": [
        "Industry Trends",
        "Best Practices",
        "Hands-on Knowledge"
      ],
      "tracks": [
        "AI/ML"
      ],
      "level": "Advanced",
      "speakerBio": "Mateo Fernandez is a recognized expert in the tech industry."
    }
  }
];
