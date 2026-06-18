import { useState, useRef } from 'react';
import { Shield, Sparkles, Send, MailOpen, Calendar } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

const ScrollRevealText = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 50%"]
  });

  const words = text.split(" ");

  return (
    <h2 
      ref={containerRef}
      className="text-4xl sm:text-5xl lg:text-6xl font-medium text-center mb-20 leading-[1.1] max-w-5xl mx-auto flex flex-wrap justify-center gap-x-2 sm:gap-x-3 gap-y-1 sm:gap-y-2"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1.5 / words.length);
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);

        return (
          <span key={i} className="relative inline-block">
            <span className="text-gray-200 absolute left-0 top-0 pointer-events-none">{word}</span>
            <motion.span style={{ opacity }} className="text-gray-900 relative z-10">{word}</motion.span>
          </span>
        )
      })}
    </h2>
  );
}

const features = [
  {
    id: 'deal-sync',
    tag: 'Deal Sync',
    title: 'Never drop a conversation',
    description: "Our AI reads thread context and reminds you instantly when a high-value prospect hasn't replied in 3 days.",
    LeftContent: () => (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded bg-blue-100 flex items-center justify-center font-bold text-blue-700">JT</div>
            <div>
               <div className="font-semibold text-gray-900 text-sm">Jack Torres</div>
               <div className="text-xs text-gray-500">Enterprise Sales</div>
            </div>
          </div>
          <span className="text-xs text-gray-400">3 days ago</span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">"Thanks for the demo earlier. We're assessing budget now and will get back to you early next week when we decide."</p>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex gap-3 items-start mt-4">
          <div className="mt-0.5"><Shield className="w-4 h-4 text-yellow-600" /></div>
          <div>
            <div className="text-xs font-semibold text-yellow-800">Action Required</div>
            <div className="text-xs text-yellow-700 mt-1">Jack hasn't replied in 3 days. AI suggests sending a check-in with the ROI calculator attachment.</div>
          </div>
        </div>
      </div>
    ),
    RightContent: () => (
      <div className="flex-1 w-full h-full bg-gray-900 p-6 md:p-8 text-white relative flex flex-col justify-center overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
        
        <h3 className="text-lg font-bold text-white mb-6 relative z-10">Smart AI Sequences</h3>
        
        <div className="space-y-4 relative z-10">
           <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">1</div>
                <div className="w-0.5 h-12 bg-gray-700 my-1"></div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 flex-1 border border-gray-700">
                 <div className="text-sm font-semibold text-gray-200">Initial Outreach</div>
                 <div className="text-xs text-gray-400 mt-1">AI drafted personalized email based on LinkedIn</div>
              </div>
           </div>

           <div className="flex gap-4 opacity-75">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-400">2</div>
                <div className="w-0.5 h-12 bg-gray-700 my-1"></div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 flex-1 border border-gray-700 border-dashed">
                 <div className="text-sm font-semibold text-gray-400">Wait 3 Days</div>
                 <div className="text-xs text-gray-500 mt-1">If no response</div>
              </div>
           </div>

           <div className="flex gap-4 opacity-50">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-400">3</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 flex-1 border border-gray-700">
                 <div className="text-sm font-semibold text-gray-400">Follow-up Thread</div>
                 <div className="text-xs text-gray-500 mt-1">"Bumping this up your inbox"</div>
              </div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 'schedule-demo',
    tag: 'Auto-Scheduling',
    title: 'Schedule a Demo with AI',
    description: "Let AI scan your calendar to find the best times and insert a 1-click booking link into your response.",
    LeftContent: () => (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 space-y-4">
        <div className="flex items-center gap-2 mb-2 text-sm text-gray-500 font-medium pb-2 border-b border-gray-100">
          <Calendar className="w-4 h-4 text-blue-500" /> Finding availability...
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
            <span className="text-sm font-medium text-gray-900">Tomorrow, 10:00 AM PST</span>
            <button className="text-blue-600 text-xs font-bold bg-blue-50 px-2 py-1 rounded">Insert</button>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
            <span className="text-sm font-medium text-gray-900">Tomorrow, 2:00 PM PST</span>
            <button className="text-blue-600 text-xs font-bold bg-blue-50 px-2 py-1 rounded">Insert</button>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
            <span className="text-sm font-medium text-gray-900">Thursday, 1:30 PM PST</span>
            <button className="text-blue-600 text-xs font-bold bg-blue-50 px-2 py-1 rounded">Insert</button>
          </div>
        </div>
        <button className="w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-medium shadow-sm flex justify-center items-center gap-2">
           <Sparkles className="w-4 h-4" /> Insert Smart Booking Link
        </button>
      </div>
    ),
    RightContent: () => (
      <div className="flex-1 w-full h-full bg-blue-50 p-6 md:p-8 text-gray-900 relative flex flex-col justify-center overflow-hidden border-t md:border-t-0 md:border-l border-blue-100">
        <h3 className="text-lg font-bold text-gray-900 mb-6 relative z-10 flex items-center gap-2">
           <Calendar className="w-5 h-5 text-blue-600" /> Calendar Sync
        </h3>
        <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-1 overflow-hidden">
          <div className="flex border-b border-gray-100 text-xs font-medium text-gray-500">
             <div className="flex-1 p-2 text-center border-r border-gray-100">Mon 12</div>
             <div className="flex-1 p-2 text-center border-r border-gray-100 bg-blue-50 text-blue-700">Tue 13</div>
             <div className="flex-1 p-2 text-center">Wed 14</div>
          </div>
          <div className="relative h-48 bg-gray-50">
             {/* Grid lines */}
             <div className="absolute inset-0 flex flex-col justify-between py-2">
               {[1, 2, 3, 4, 5].map(i => <div key={i} className="border-t border-gray-200 w-full"></div>)}
             </div>
             {/* Events */}
             <div className="absolute top-4 left-2 right-[66%] bottom-16 bg-purple-100 border border-purple-200 rounded p-1 text-[10px] text-purple-700 font-medium">Sync</div>
             <div className="absolute top-12 left-[34%] right-[34%] bottom-8 bg-blue-500 text-white shadow-sm border border-blue-600 rounded p-1 text-[10px] font-medium z-10">Proposed Time</div>
             <div className="absolute top-24 left-[68%] right-2 bottom-4 bg-gray-200 border border-gray-300 rounded p-1 text-[10px] text-gray-600 font-medium">Team All-Hands</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'compose-email',
    tag: 'AI Drafting',
    title: 'Compose Email with AI',
    description: "Write highly-converting emails 10x faster. Our AI analyzes the thread history and drafts the perfect response.",
    LeftContent: () => (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-0 overflow-hidden flex flex-col">
        <div className="p-3 border-b border-gray-100 bg-gray-50 flex items-center gap-2">
           <div className="text-xs font-semibold text-gray-500 bg-gray-200 px-2 py-0.5 rounded">To: Sarah Jenkins</div>
        </div>
        <div className="p-4 flex-1">
          <p className="text-sm text-gray-700 mb-4 whitespace-pre-wrap">Hi Sarah,

Thanks for reaching out! Based on your requirement for a 50-seat license, I've put together a custom proposal that includes priority support and onboarding. 

Would you be open to a quick call this Thursday to review?</p>
        </div>
        <div className="p-3 border-t border-gray-100 bg-gray-50 flex justify-between items-center">
           <button className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center hover:bg-purple-200 transition">
              <Sparkles className="w-4 h-4" />
           </button>
           <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-blue-700 transition">
              Send <Send className="w-3 h-3" />
           </button>
        </div>
      </div>
    ),
    RightContent: () => (
      <div className="flex-1 w-full h-full bg-purple-50 p-6 md:p-8 text-gray-900 relative flex flex-col justify-center overflow-hidden border-t md:border-t-0 md:border-l border-purple-100">
         <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
           <Sparkles className="w-5 h-5 text-purple-600" /> AI Suggestions
        </h3>
        <div className="space-y-3">
           <button className="w-full bg-white p-3 rounded-lg border border-purple-200 text-left shadow-sm hover:border-purple-300 transition group flex flex-col">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-1">Make it shorter</span>
              <span className="text-sm text-gray-600 group-hover:text-gray-900">Condense paragraphs into bullet points</span>
           </button>
           <button className="w-full bg-white p-3 rounded-lg border border-purple-200 text-left shadow-sm hover:border-purple-300 transition group flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 bg-purple-100/50 pointer-events-none"></div>
              <span className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-1 relative z-10">Push for meeting</span>
              <span className="text-sm text-gray-900 relative z-10 font-medium">Add urgency and suggest specific times</span>
           </button>
           <button className="w-full bg-white p-3 rounded-lg border border-purple-200 text-left shadow-sm hover:border-purple-300 transition group flex flex-col">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-1">Adjust tone</span>
              <span className="text-sm text-gray-600 group-hover:text-gray-900">Sound more professional and formal</span>
           </button>
        </div>
      </div>
    )
  },
  {
    id: 'track-opens',
    tag: 'Email Tracking',
    title: 'Track Opened Emails',
    description: "Know exactly when and where your emails are opened in real-time. Never guess if they saw your proposal.",
    LeftContent: () => (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-0 overflow-hidden flex flex-col">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
           <div className="font-semibold text-gray-900 text-sm">Proposal: Custom Plan</div>
           <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs font-bold border border-green-200 shadow-sm">
             <MailOpen className="w-3.5 h-3.5" /> Opened 4 times
           </div>
        </div>
        <div className="p-5 space-y-4 relative">
           <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-gray-100"></div>
           
           <div className="flex gap-4 relative z-10">
              <div className="w-4 h-4 rounded-full bg-green-500 mt-0.5 flex-shrink-0 shadow-[0_0_0_4px_white]"></div>
              <div>
                 <div className="text-sm font-medium text-gray-900">Just now</div>
                 <div className="text-xs text-gray-500 mt-0.5">Opened in San Francisco, CA (Desktop)</div>
              </div>
           </div>
           
           <div className="flex gap-4 relative z-10">
              <div className="w-4 h-4 rounded-full bg-blue-500 mt-0.5 flex-shrink-0 shadow-[0_0_0_4px_white]"></div>
              <div>
                 <div className="text-sm font-medium text-gray-900">2 hours ago</div>
                 <div className="text-xs text-gray-500 mt-0.5">Clicked link: "Pricing Calculator"</div>
              </div>
           </div>

           <div className="flex gap-4 relative z-10">
              <div className="w-4 h-4 rounded-full bg-gray-300 mt-0.5 flex-shrink-0 shadow-[0_0_0_4px_white]"></div>
              <div>
                 <div className="text-sm font-medium text-gray-500">Yesterday, 9:00 AM</div>
                 <div className="text-xs text-gray-400 mt-0.5">First opened in New York, NY (Mobile)</div>
              </div>
           </div>
        </div>
      </div>
    ),
    RightContent: () => (
      <div className="flex-1 w-full h-full bg-green-50 p-6 md:p-8 text-gray-900 relative flex flex-col justify-center overflow-hidden border-t md:border-t-0 md:border-l border-green-100">
         <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
           <MailOpen className="w-5 h-5 text-green-600" /> Engagement Score
        </h3>
        
        <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100 text-center relative overflow-hidden">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-green-100 rounded-full blur-2xl"></div>
          
           <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white text-3xl font-bold shadow-lg shadow-green-500/30 mb-4 relative z-10">
              98
           </div>
           <h4 className="font-bold text-gray-900 mb-1 relative z-10">High Intent</h4>
           <p className="text-xs text-gray-500 relative z-10">This prospect has opened your email multiple times and clicked your links. Follow up immediately.</p>
        </div>
      </div>
    )
  }
];

export function StatsFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Section */}
        <div className="max-w-6xl mx-auto mb-32">
          <ScrollRevealText text="We're building the infrastructure for the next generation of AI-powered sales, helping teams close deals without leaving their inbox." />
          
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between border-t border-b border-gray-100 py-8 md:py-12 px-4 shadow-[0_0_40px_rgba(0,0,0,0.02)] rounded-3xl">
            <div className="flex items-center gap-2 mb-2 md:mb-0 w-full md:w-auto shrink-0 md:px-8 justify-center md:justify-start">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700">About Us</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 w-full divide-x divide-gray-200">
              <div className="p-4 md:px-8 text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">10h+</div>
                <p className="text-[10px] sm:text-sm text-gray-500 leading-relaxed font-medium">Saved per rep<br className="hidden md:block"/>each week</p>
              </div>
              <div className="p-4 md:px-8 text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">350K+</div>
                <p className="text-[10px] sm:text-sm text-gray-500 leading-relaxed font-medium">Emails automatically<br className="hidden md:block"/>drafted by AI</p>
              </div>
               <div className="p-4 md:px-8 text-center md:text-left border-t md:border-t-0">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">$85M+</div>
                <p className="text-[10px] sm:text-sm text-gray-500 leading-relaxed font-medium">Pipeline revenue<br className="hidden md:block"/>closed faster</p>
              </div>
              <div className="p-4 md:px-8 text-center md:text-left border-t md:border-t-0">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">94%</div>
                <p className="text-[10px] sm:text-sm text-gray-500 leading-relaxed font-medium">CRM adoption rate<br className="hidden md:block"/>among users</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features Inside Your Inbox</h2>
          <p className="text-sm text-gray-500 mb-8">
            Everything you need to plan, track, and execute tasks with clarity, speed, and total visibility directly from Gmail.
          </p>

          {/* Dots Navigation */}
          <div className="flex justify-center items-center gap-3">
             {features.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveIndex(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    activeIndex === idx 
                      ? 'w-8 h-2.5 bg-blue-600' 
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to feature slide ${idx + 1}`}
                />
             ))}
          </div>
        </div>

        {/* Features Content visual representation */}
         <div className="mx-auto max-w-5xl bg-white border border-gray-200 shadow-2xl p-0 sm:p-4 bg-gradient-to-br from-gray-50 to-white relative mt-8 md:mt-0 w-[calc(100%+2rem)] -translate-x-4 sm:translate-x-0 sm:w-full border-x-0 sm:border-x rounded-none sm:rounded-[2rem]">
             <div className="rounded-none sm:rounded-[1.5rem] bg-gray-50 border-y sm:border border-gray-100 flex flex-col md:flex-row h-auto min-h-[500px] overflow-hidden">
                
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full md:w-1/2 p-6 md:p-8 flex flex-col gap-4 z-10 bg-gray-50 shrink-0"
                  >
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-100 text-blue-700 text-[10px] md:text-xs font-semibold w-max mb-2">
                       {features[activeIndex].tag}
                     </div>
                     <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">{features[activeIndex].title}</h3>
                     <p className="text-gray-500 text-sm mb-2 md:mb-6 leading-relaxed">{features[activeIndex].description}</p>
                     
                     <div className="flex-1 flex flex-col justify-center">
                         {features[activeIndex].LeftContent()}
                     </div>
                  </motion.div>
                </AnimatePresence>
                
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={`right-${activeIndex}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full md:w-1/2 flex flex-col relative z-10 min-h-[300px] md:min-h-0 bg-white md:bg-transparent overflow-hidden"
                  >
                     {features[activeIndex].RightContent()}
                  </motion.div>
                </AnimatePresence>

             </div>
        </div>

      </div>
    </section>
  );
}

