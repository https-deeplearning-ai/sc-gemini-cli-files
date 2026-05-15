import { motion } from 'framer-motion';
import { Calendar, Clock, Coffee, Sparkles, Users, Brain, Music, Zap } from 'lucide-react';

export const WeekAtAGlance = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Week at a Glance</h2>
          <p className="text-slate-600 dark:text-slate-400">A high-level overview of the summit schedule.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              day: "Day 1",
              date: "Tuesday, Nov 20",
              events: [
                { time: "08:00 AM", title: "Registration & Breakfast", icon: Coffee },
                { time: "09:00 AM", title: "Opening Keynote: The Future of AI", icon: Sparkles },
                { time: "11:00 AM", title: "Breakout Sessions: Track A & B", icon: Users },
                { time: "01:00 PM", title: "Networking Lunch", icon: Coffee },
                { time: "02:30 PM", title: "Technical Workshops", icon: Brain },
                { time: "06:00 PM", title: "Welcome Reception", icon: Music },
              ]
            },
            {
              day: "Day 2",
              date: "Wednesday, Nov 21",
              events: [
                { time: "09:00 AM", title: "Morning Keynote: Ethical AI", icon: Sparkles },
                { time: "10:30 AM", title: "Hands-on Labs", icon: Zap },
                { time: "12:30 PM", title: "Expo Hall Lunch", icon: Users },
                { time: "02:00 PM", title: "Industry Panels", icon: Users },
                { time: "05:00 PM", title: "Hackathon Kickoff", icon: Brain },
                { time: "08:00 PM", title: "Summit Party @ The Piers", icon: Music },
              ]
            },
            {
              day: "Day 3",
              date: "Thursday, Nov 22",
              events: [
                { time: "09:00 AM", title: "Closing Keynote", icon: Sparkles },
                { time: "10:30 AM", title: "Final Breakout Sessions", icon: Users },
                { time: "01:00 PM", title: "Farewell Lunch", icon: Coffee },
                { time: "02:30 PM", title: "Hackathon Demos & Awards", icon: Sparkles },
              ]
            }
          ].map((day, i) => (
            <motion.div 
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col"
            >
              <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{day.day}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{day.date}</p>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-6 flex-grow">
                {day.events.map((event, j) => (
                  <div key={j} className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0">
                      <event.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white leading-tight">{event.title}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center mt-1">
                        <Clock className="w-3 h-3 mr-1" /> {event.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
