import { motion } from 'motion/react';
import { Mail, Sparkles, Send, Zap, ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-8">
        {/* Text Content */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 tracking-tighter leading-[1.1] max-w-3xl sm:whitespace-nowrap"
        >
          Stop Switching CRMs.<br /> Start Closing Deals.
        </motion.h1>
        
        <div className="flex flex-col md:flex-row gap-8 md:items-center justify-between">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-500 leading-relaxed max-w-2xl"
          >
            Turn your Gmail into a powerhouse CRM. Auto-categorize leads, write personalized emails using AI, and automate your follow-ups—all without leaving your inbox.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 shrink-0"
          >
            <button className="inline-flex justify-center items-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
              <img src="https://www.gstatic.com/images/branding/product/1x/gmail_32dp.png" alt="Gmail" className="w-5 h-5" />
              Add to Gmail — It's Free
            </button>
            <button className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-full text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
              Book A Demo
            </button>
          </motion.div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-20 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8 overflow-x-auto scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" aria-label="Tabs">
          {['Gmail Extension', 'AI Auto-Drafts', 'Lead Pipeline', 'Follow-up Sequences'].map((tab, idx) => (
            <a
              key={tab}
              href="#"
              className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors
                ${idx === 1 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'}
              `}
              aria-current={idx === 1 ? 'page' : undefined}
            >
              {tab}
            </a>
          ))}
        </nav>
      </div>

      {/* UI Mockup Image Placeholder */}
      <div className="mt-8 relative sm:rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-0 sm:p-8 shadow-2xl w-[calc(100%+2rem)] -translate-x-4 sm:translate-x-0 sm:w-full border-x-0 sm:border-x">
        <div className="bg-white sm:rounded-xl shadow-2xl border-y sm:border border-gray-200/60 overflow-hidden flex flex-col md:flex-row h-[70vh] sm:h-auto min-h-[500px] md:min-h-0 md:h-[500px]">
           {/* Sidebar */}
           <div className="w-full md:w-64 bg-gray-50 border-r border-gray-200 flex-shrink-0 flex flex-col hidden md:flex">
                <div className="p-4 border-b border-gray-200">
                  <button className="w-full bg-blue-600 text-white rounded-lg py-2.5 px-4 font-medium flex items-center justify-center gap-2 shadow-sm hover:bg-blue-700 transition">
                    <Send className="w-4 h-4" /> Compose
                  </button>
                </div>
                <div className="p-3 space-y-1 overflow-y-auto">
                    <div className="text-xs font-semibold text-gray-500 uppercase px-3 py-2">Folders</div>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium">
                      <Mail className="w-4 h-4" /> Inbox
                      <span className="ml-auto bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs">24</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                      <Send className="w-4 h-4" /> Sent
                    </a>
                    
                    <div className="text-xs font-semibold text-gray-500 uppercase px-3 py-2 mt-4 flex items-center gap-2">
                       Pipeline <Sparkles className="w-3 h-3 text-purple-500" />
                    </div>
                    <a href="#" className="flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                      <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-400"></div> Hot Leads</div>
                      <span className="text-xs font-medium text-gray-400">12</span>
                    </a>
                    <a href="#" className="flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                      <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-400"></div> Follow Up</div>
                      <span className="text-xs font-medium text-gray-400">5</span>
                    </a>
                    <a href="#" className="flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                      <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-400"></div> Closed Won</div>
                      <span className="text-xs font-medium text-gray-400">38</span>
                    </a>
                </div>
           </div>

           {/* Main Content Area (Inbox list) */}
           <div className="flex-1 border-r border-gray-200 flex flex-col bg-white overflow-hidden max-h-[600px] md:max-h-full">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-white">
                <h2 className="text-lg font-semibold text-gray-900">Inbox</h2>
                <div className="p-1 rounded-md bg-gray-100 flex gap-1">
                  <button className="px-3 py-1 bg-white shadow-sm rounded text-sm text-gray-700 font-medium">All</button>
                  <button className="px-3 py-1 rounded text-sm flex gap-1 items-center text-gray-500 hover:text-gray-700">
                    <Sparkles className="w-3 h-3 text-purple-500" /> High Intent
                  </button>
                </div>
              </div>
              <div className="overflow-y-auto w-full">
                 {/* Email Items */}
                 {[
                   { name: "Acme Corp", subject: "Re: Enterprise Pricing Inquiry", preview: "Thanks for sending over the details. We are ready to move forward...", time: "10:24 AM", tags: ["Hot Lead"], score: 98, unread: true },
                   { name: "Sarah Chen", subject: "Checking in on the demo", preview: "Hi there, just wanted to follow up on the demo recording from yesterday.", time: "Yesterday", tags: ["Follow Up"], score: 75, unread: false },
                   { name: "Global Tech", subject: "Contract signature requested", preview: "Please find the attached service agreement for your review and...", time: "Mon", tags: ["Closing"], score: 90, unread: false },
                 ].map((email, i) => (
                   <div key={i} className={`flex items-start gap-3 p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition ${email.unread ? 'bg-blue-50/30' : ''}`}>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-sm font-medium text-gray-600 flex-shrink-0">
                        {email.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                         <div className="flex items-center justify-between mb-1">
                            <span className={`font-medium ${email.unread ? 'text-gray-900' : 'text-gray-700'}`}>{email.name}</span>
                            <span className="text-xs text-gray-500">{email.time}</span>
                         </div>
                         <div className={`text-sm mb-1 truncate ${email.unread ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                           {email.subject}
                         </div>
                         <p className="text-xs text-gray-500 truncate mb-2">{email.preview}</p>
                         <div className="flex gap-2 items-center flex-wrap">
                           {email.tags.map(tag => (
                             <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-purple-100 text-purple-700 flex items-center gap-1">
                                <Sparkles className="w-2.5 h-2.5" /> {tag}
                             </span>
                           ))}
                           <span className="text-[10px] font-medium text-gray-500 flex items-center gap-1">
                             <Zap className="w-2.5 h-2.5 text-yellow-500" /> Score: {email.score}
                           </span>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* AI CRM Sidebar */}
           <div className="w-full md:w-80 bg-gray-50 flex flex-col hidden lg:flex">
             <div className="p-4 border-b border-gray-200 bg-white">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                  <Sparkles className="w-4 h-4 text-purple-600" /> 
                  airbox CRM Panel
                </div>
             </div>
             <div className="p-4 flex-1 overflow-y-auto">
               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4">
                 <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center justify-between">
                    AI Summary
                    <span className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-[10px] lowercase">ready to buy</span>
                 </h3>
                 <p className="text-sm text-gray-700 leading-relaxed">
                   Acme Corp is extremely interested. They want to move forward with the Enterprise plan but need approval on the compliance form.
                 </p>
                 <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Sentiment</span>
                      <span className="font-semibold text-green-600">Highly Positive</span>
                    </div>
                 </div>
               </div>

               <div className="bg-purple-900 rounded-xl shadow-sm border border-purple-800 p-4 text-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-purple-500 opacity-20 w-16 h-16 rounded-full blur-xl"></div>
                 <h3 className="text-xs font-semibold text-purple-200 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Suggested Reply
                 </h3>
                 <p className="text-sm text-purple-50 opacity-90 leading-relaxed mb-4">
                   "Hi Team, attached is the SOC2 compliance packet. Can we schedule a quick kick-off on Tuesday?"
                 </p>
                 <button className="w-full bg-white text-purple-900 rounded-lg py-2 text-sm font-medium hover:bg-gray-50 transition shadow-sm">
                   Insert Draft
                 </button>
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
