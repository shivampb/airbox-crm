import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, Sparkles, Send, Zap, ChevronRight, Search, Star, 
  Clock, ArrowRight, MoreHorizontal, User, Building2, 
  TrendingUp, MessageSquare, Calendar, Bell, CheckCircle2,
  Play, Pause, Plus, Filter, Eye, MousePointerClick,
  BarChart3, Target, Inbox, Tag, Bot, RefreshCw,
  GripVertical, DollarSign, Phone, Globe, Layers
} from 'lucide-react';
import { ContactModal } from './ContactModal';

/* ──────────────────────── GMAIL EXTENSION MOCKUP ──────────────────────── */
function GmailExtensionMockup() {
  return (
    <div className="bg-white sm:rounded-xl shadow-2xl border-y sm:border border-gray-200/60 overflow-hidden flex flex-col md:flex-row h-[70vh] sm:h-auto min-h-[500px] md:min-h-0 md:h-[520px]">
      {/* Gmail Sidebar */}
      <div className="w-full md:w-56 bg-gray-50/80 border-r border-gray-200 shrink-0 hidden md:flex flex-col">
        <div className="p-3 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-3">
            <img src="https://www.gstatic.com/images/branding/product/1x/gmail_32dp.png" alt="Gmail" className="w-6 h-6" />
            <span className="text-sm font-semibold text-gray-700">Gmail</span>
          </div>
          <button className="w-full bg-blue-600 text-white rounded-2xl py-2.5 px-4 font-medium flex items-center justify-center gap-2 shadow-sm hover:bg-blue-700 transition text-sm">
            <Send className="w-3.5 h-3.5" /> Compose
          </button>
        </div>
        <div className="p-2 space-y-0.5 overflow-y-auto flex-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm">
            <Inbox className="w-4 h-4" /> Inbox
            <span className="ml-auto bg-blue-600 text-white px-1.5 py-0.5 rounded-full text-[10px] font-bold">24</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm">
            <Star className="w-4 h-4" /> Starred
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm">
            <Send className="w-4 h-4" /> Sent
          </a>
          <div className="border-t border-gray-200 my-2"></div>
          <div className="px-3 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-purple-500" /> airbox Labels
          </div>
          <a href="#" className="flex items-center gap-2 px-3 py-1.5 text-gray-600 rounded-lg text-xs">
            <div className="w-2 h-2 rounded-full bg-red-400"></div> Hot Leads
            <span className="ml-auto text-[10px] text-gray-400 font-medium">12</span>
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-1.5 text-gray-600 rounded-lg text-xs">
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div> Nurturing
            <span className="ml-auto text-[10px] text-gray-400 font-medium">8</span>
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-1.5 text-gray-600 rounded-lg text-xs">
            <div className="w-2 h-2 rounded-full bg-green-400"></div> Won
            <span className="ml-auto text-[10px] text-gray-400 font-medium">38</span>
          </a>
        </div>
      </div>

      {/* Email List */}
      <div className="flex-1 border-r border-gray-200 flex flex-col bg-white overflow-hidden">
        <div className="p-3 border-b border-gray-200 flex items-center gap-2 bg-white">
          <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
            <Search className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">Search mail</span>
          </div>
        </div>
        <div className="overflow-y-auto flex-1">
          {[
            { name: "Acme Corp", subject: "Re: Enterprise Pricing", preview: "We're ready to proceed with the annual plan...", time: "10:24 AM", tag: "Hot Lead", tagColor: "bg-red-100 text-red-700", score: 98, unread: true, avatar: "AC" },
            { name: "Sarah Chen", subject: "Demo follow-up", preview: "Thanks for the walkthrough yesterday, I have a few...", time: "9:15 AM", tag: "Follow Up", tagColor: "bg-yellow-100 text-yellow-700", score: 75, unread: true, avatar: "SC" },
            { name: "GlobalTech Inc", subject: "Contract signature", preview: "Please find the attached service agreement...", time: "Yesterday", tag: "Closing", tagColor: "bg-green-100 text-green-700", score: 90, unread: false, avatar: "GT" },
            { name: "Maria Garcia", subject: "Intro call request", preview: "Hi, we saw your product on ProductHunt and...", time: "Mon", tag: "New", tagColor: "bg-blue-100 text-blue-700", score: 62, unread: false, avatar: "MG" },
          ].map((email, i) => (
            <div key={i} className={`flex items-start gap-3 p-3 border-b border-gray-50 cursor-pointer hover:bg-gray-50 transition ${email.unread ? 'bg-blue-50/40' : ''} ${i === 0 ? 'bg-blue-50/60 border-l-2 border-l-blue-500' : ''}`}>
              <div className="w-8 h-8 rounded-full bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center text-[10px] font-bold text-gray-600 shrink-0">
                {email.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <span className={`text-sm ${email.unread ? 'font-semibold text-gray-900' : 'font-medium text-gray-600'}`}>{email.name}</span>
                  <span className="text-[10px] text-gray-400">{email.time}</span>
                </div>
                <div className={`text-xs mb-0.5 truncate ${email.unread ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>{email.subject}</div>
                <p className="text-[11px] text-gray-400 truncate">{email.preview}</p>
                <div className="flex gap-1.5 items-center mt-1.5">
                  <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded ${email.tagColor} flex items-center gap-0.5`}>
                    <Sparkles className="w-2 h-2" /> {email.tag}
                  </span>
                  <span className="text-[9px] font-medium text-gray-400 flex items-center gap-0.5">
                    <Zap className="w-2 h-2 text-yellow-500" /> {email.score}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* airbox CRM Panel (Extension) */}
      <div className="w-full md:w-72 bg-linear-to-b from-gray-50 to-white flex-col hidden lg:flex">
        <div className="p-3 border-b border-gray-200 bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-linear-to-br from-purple-600 to-blue-600 flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-bold text-gray-900">airbox</span>
          </div>
          <span className="text-[9px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full border border-green-200">ACTIVE</span>
        </div>

        <div className="p-3 flex-1 overflow-y-auto space-y-3">
          {/* Contact Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold">AC</div>
              <div>
                <div className="text-xs font-bold text-gray-900">Acme Corporation</div>
                <div className="text-[10px] text-gray-500">Enterprise · $45K ARR</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1 mt-2">
              <div className="bg-gray-50 rounded p-1.5 text-center">
                <div className="text-[9px] text-gray-400">Emails</div>
                <div className="text-xs font-bold text-gray-900">24</div>
              </div>
              <div className="bg-gray-50 rounded p-1.5 text-center">
                <div className="text-[9px] text-gray-400">Meetings</div>
                <div className="text-xs font-bold text-gray-900">3</div>
              </div>
              <div className="bg-gray-50 rounded p-1.5 text-center">
                <div className="text-[9px] text-gray-400">Score</div>
                <div className="text-xs font-bold text-green-600">98</div>
              </div>
            </div>
          </div>

          {/* AI Summary */}
          <div className="bg-linear-to-br from-purple-900 to-purple-800 rounded-lg p-3 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-purple-400 rounded-full blur-2xl opacity-20"></div>
            <h3 className="text-[10px] font-bold text-purple-200 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <Bot className="w-3 h-3" /> AI Summary
            </h3>
            <p className="text-[11px] text-purple-100 leading-relaxed">
              High-intent buyer. Ready to move forward with Enterprise plan. Needs compliance approval before signing.
            </p>
            <div className="flex items-center gap-2 mt-2 pt-2 border-t border-purple-700">
              <span className="text-[9px] text-purple-300">Sentiment</span>
              <span className="text-[9px] font-bold text-green-300 flex items-center gap-0.5">
                <TrendingUp className="w-2.5 h-2.5" /> Very Positive
              </span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Quick Actions</h3>
            <div className="space-y-1.5">
              <button className="w-full text-left flex items-center gap-2 px-2 py-1.5 bg-blue-50 text-blue-700 rounded-md text-[11px] font-medium hover:bg-blue-100 transition">
                <Send className="w-3 h-3" /> Draft AI Reply
              </button>
              <button className="w-full text-left flex items-center gap-2 px-2 py-1.5 bg-gray-50 text-gray-600 rounded-md text-[11px] font-medium hover:bg-gray-100 transition">
                <Calendar className="w-3 h-3" /> Schedule Meeting
              </button>
              <button className="w-full text-left flex items-center gap-2 px-2 py-1.5 bg-gray-50 text-gray-600 rounded-md text-[11px] font-medium hover:bg-gray-100 transition">
                <Tag className="w-3 h-3" /> Move to Pipeline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────── AI AUTO-DRAFTS MOCKUP (existing) ──────────────────────── */
function AiAutoDraftsMockup() {
  return (
    <div className="bg-white sm:rounded-xl shadow-2xl border-y sm:border border-gray-200/60 overflow-hidden flex flex-col md:flex-row h-[70vh] sm:h-auto min-h-[500px] md:min-h-0 md:h-[520px]">
       {/* Sidebar */}
       <div className="w-full md:w-64 bg-gray-50 border-r border-gray-200 shrink-0 flex-col hidden md:flex">
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
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center text-sm font-medium text-gray-600 shrink-0">
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
       <div className="w-full md:w-80 bg-gray-50 flex-col hidden lg:flex">
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
  );
}

/* ──────────────────────── LEAD PIPELINE MOCKUP ──────────────────────── */
function LeadPipelineMockup() {
  const columns = [
    {
      title: "New Leads",
      color: "bg-blue-500",
      headerBg: "bg-blue-50",
      headerText: "text-blue-700",
      count: 8,
      value: "$12.4K",
      cards: [
        { name: "TechVision AI", contact: "James Wilson", value: "$8,500", score: 72, days: 2, avatar: "TV", tags: ["Inbound"], hot: false },
        { name: "DataFlow Inc", contact: "Lisa Park", value: "$3,900", score: 58, days: 5, avatar: "DF", tags: ["Referral"], hot: false },
      ]
    },
    {
      title: "Qualified",
      color: "bg-yellow-500",
      headerBg: "bg-yellow-50",
      headerText: "text-yellow-700",
      count: 5,
      value: "$67.2K",
      cards: [
        { name: "Acme Corp", contact: "Mike Chen", value: "$45,000", score: 98, days: 14, avatar: "AC", tags: ["Enterprise"], hot: true },
        { name: "StartupXYZ", contact: "Anna Lee", value: "$22,200", score: 85, days: 7, avatar: "SX", tags: ["Growth"], hot: true },
      ]
    },
    {
      title: "Proposal Sent",
      color: "bg-purple-500",
      headerBg: "bg-purple-50",
      headerText: "text-purple-700",
      count: 3,
      value: "$89.0K",
      cards: [
        { name: "Global Retail", contact: "Sarah Kim", value: "$55,000", score: 91, days: 3, avatar: "GR", tags: ["Closing"], hot: true },
        { name: "NexGen Labs", contact: "Tom Brady", value: "$34,000", score: 78, days: 10, avatar: "NL", tags: ["Follow Up"], hot: false },
      ]
    },
    {
      title: "Won",
      color: "bg-green-500",
      headerBg: "bg-green-50",
      headerText: "text-green-700",
      count: 12,
      value: "$245K",
      cards: [
        { name: "MegaCorp", contact: "Diana Prince", value: "$120,000", score: 100, days: 0, avatar: "MC", tags: ["Enterprise"], hot: false },
      ]
    },
  ];

  return (
    <div className="bg-white sm:rounded-xl shadow-2xl border-y sm:border border-gray-200/60 overflow-hidden flex flex-col h-[70vh] sm:h-auto min-h-[500px] md:h-[520px]">
      {/* Pipeline Header */}
      <div className="p-3 sm:p-4 border-b border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 bg-white">
        <div className="flex items-center gap-3">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900">Sales Pipeline</h2>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">Q2 2026</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-200 transition">
            <Filter className="w-3 h-3" /> Filter
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-700 transition">
            <Plus className="w-3 h-3" /> Add Deal
          </button>
        </div>
      </div>

      {/* Pipeline Stats Bar */}
      <div className="px-3 sm:px-4 py-2 border-b border-gray-100 bg-gray-50/80 flex items-center gap-4 overflow-x-auto scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
        <div className="flex items-center gap-1.5 text-xs text-gray-500 whitespace-nowrap">
          <DollarSign className="w-3 h-3 text-green-500" />
          <span className="font-medium">Total: <span className="text-gray-900 font-bold">$413.6K</span></span>
        </div>
        <div className="w-px h-4 bg-gray-200"></div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500 whitespace-nowrap">
          <Target className="w-3 h-3 text-blue-500" />
          <span className="font-medium">Win Rate: <span className="text-green-600 font-bold">68%</span></span>
        </div>
        <div className="w-px h-4 bg-gray-200"></div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500 whitespace-nowrap">
          <TrendingUp className="w-3 h-3 text-purple-500" />
          <span className="font-medium">Avg Deal: <span className="text-gray-900 font-bold">$14.8K</span></span>
        </div>
      </div>

      {/* Kanban Columns */}
      <div className="flex-1 overflow-x-auto overflow-y-hidden p-3 sm:p-4">
        <div className="flex gap-3 h-full min-w-max">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="w-56 sm:w-60 shrink-0 flex flex-col">
              {/* Column Header */}
              <div className={`${col.headerBg} rounded-t-lg px-3 py-2 flex items-center justify-between`}>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${col.color}`}></div>
                  <span className={`text-xs font-bold ${col.headerText}`}>{col.title}</span>
                  <span className={`text-[10px] font-bold ${col.headerText} bg-white/60 px-1.5 py-0.5 rounded-full`}>{col.count}</span>
                </div>
                <span className="text-[10px] font-bold text-gray-500">{col.value}</span>
              </div>

              {/* Cards */}
              <div className="flex-1 bg-gray-50/50 rounded-b-lg border border-gray-100 border-t-0 p-2 space-y-2 overflow-y-auto">
                {col.cards.map((card, cardIdx) => (
                  <div key={cardIdx} className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm hover:shadow-md transition cursor-grab group">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-md bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center text-[9px] font-bold text-gray-600">
                          {card.avatar}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-900 leading-tight">{card.name}</div>
                          <div className="text-[10px] text-gray-400">{card.contact}</div>
                        </div>
                      </div>
                      <GripVertical className="w-3 h-3 text-gray-300 opacity-0 group-hover:opacity-100 transition" />
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs font-bold text-gray-900">{card.value}</span>
                      <div className="flex items-center gap-1">
                        {card.hot && (
                          <span className="text-[8px] font-bold px-1 py-0.5 rounded bg-red-100 text-red-600 flex items-center gap-0.5">
                            <Zap className="w-2 h-2" /> HOT
                          </span>
                        )}
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 font-medium">
                          {card.tags[0]}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-50">
                      <div className="flex items-center gap-1">
                        <div className={`w-1.5 h-1.5 rounded-full ${card.score >= 90 ? 'bg-green-500' : card.score >= 70 ? 'bg-yellow-500' : 'bg-gray-400'}`}></div>
                        <span className="text-[9px] text-gray-400 font-medium">Score {card.score}</span>
                      </div>
                      <span className="text-[9px] text-gray-400">{card.days}d ago</span>
                    </div>
                  </div>
                ))}

                {/* Add card button */}
                <button className="w-full border border-dashed border-gray-200 rounded-lg p-2 text-[10px] text-gray-400 hover:text-gray-600 hover:border-gray-300 transition flex items-center justify-center gap-1">
                  <Plus className="w-3 h-3" /> Add deal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────── FOLLOW-UP SEQUENCES MOCKUP ──────────────────────── */
function FollowUpSequencesMockup() {
  return (
    <div className="bg-white sm:rounded-xl shadow-2xl border-y sm:border border-gray-200/60 overflow-hidden flex flex-col md:flex-row h-[70vh] sm:h-auto min-h-[500px] md:min-h-0 md:h-[520px]">
      {/* Sequences List */}
      <div className="w-full md:w-64 bg-gray-50 border-r border-gray-200 shrink-0 flex flex-col">
        <div className="p-3 border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-gray-900">Sequences</h3>
            <button className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition">
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-2.5 py-1.5">
            <Search className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-xs text-gray-400">Search sequences...</span>
          </div>
        </div>
        <div className="overflow-y-auto flex-1 p-2 space-y-1">
          {[
            { name: "Enterprise Outreach", status: "active", contacts: 45, replies: 12, color: "bg-green-500" },
            { name: "Demo Follow-up", status: "active", contacts: 28, replies: 8, color: "bg-green-500" },
            { name: "Re-engagement", status: "paused", contacts: 120, replies: 15, color: "bg-yellow-500" },
            { name: "Onboarding Welcome", status: "active", contacts: 67, replies: 22, color: "bg-green-500" },
          ].map((seq, i) => (
            <div key={i} className={`p-2.5 rounded-lg cursor-pointer transition ${i === 0 ? 'bg-white shadow-sm border border-blue-200' : 'hover:bg-gray-100'}`}>
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs font-semibold ${i === 0 ? 'text-gray-900' : 'text-gray-700'}`}>{seq.name}</span>
                <div className={`w-1.5 h-1.5 rounded-full ${seq.color}`}></div>
              </div>
              <div className="flex items-center gap-3 text-[10px] text-gray-400">
                <span className="flex items-center gap-0.5"><User className="w-2.5 h-2.5" /> {seq.contacts}</span>
                <span className="flex items-center gap-0.5"><MessageSquare className="w-2.5 h-2.5" /> {seq.replies}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sequence Builder */}
      <div className="flex-1 flex flex-col bg-white overflow-hidden">
        {/* Sequence Header */}
        <div className="p-3 sm:p-4 border-b border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-gray-900">Enterprise Outreach</h2>
              <span className="text-[9px] font-bold bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">ACTIVE</span>
            </div>
            <p className="text-[11px] text-gray-500 mt-0.5">4 steps · 45 contacts enrolled · 26.7% reply rate</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 px-2.5 py-1.5 bg-gray-100 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-200 transition">
              <Pause className="w-3 h-3" /> Pause
            </button>
            <button className="flex items-center gap-1 px-2.5 py-1.5 bg-gray-100 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-200 transition">
              <BarChart3 className="w-3 h-3" /> Stats
            </button>
          </div>
        </div>

        {/* Sequence Steps */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="max-w-lg mx-auto space-y-0">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex gap-3 sm:gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-blue-200 z-10">1</div>
                  <div className="w-0.5 h-full bg-gray-200 min-h-[40px]"></div>
                </div>
                <div className="flex-1 bg-white rounded-xl border border-gray-200 p-3 sm:p-4 shadow-sm mb-3 group hover:border-blue-200 transition">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Send className="w-3.5 h-3.5 text-blue-600" />
                      <span className="text-xs font-bold text-gray-900">Initial Outreach</span>
                    </div>
                    <span className="text-[9px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-medium">Day 0</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mb-3">AI-personalized email based on prospect's LinkedIn profile and company info</p>
                  <div className="flex items-center gap-3 text-[10px]">
                    <span className="flex items-center gap-1 text-gray-400"><Eye className="w-3 h-3" /> 78% opened</span>
                    <span className="flex items-center gap-1 text-gray-400"><MousePointerClick className="w-3 h-3" /> 12% clicked</span>
                    <span className="flex items-center gap-1 text-green-600 font-semibold"><MessageSquare className="w-3 h-3" /> 8% replied</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Wait Step */}
            <div className="relative">
              <div className="flex gap-3 sm:gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center z-10">
                    <Clock className="w-3.5 h-3.5 text-gray-500" />
                  </div>
                  <div className="w-0.5 h-full bg-gray-200 min-h-[20px]"></div>
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg border border-dashed border-gray-200 px-3 sm:px-4 py-2 mb-3">
                  <span className="text-[11px] text-gray-500 font-medium">Wait 3 days · if no reply</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex gap-3 sm:gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-purple-200 z-10">2</div>
                  <div className="w-0.5 h-full bg-gray-200 min-h-[40px]"></div>
                </div>
                <div className="flex-1 bg-white rounded-xl border border-gray-200 p-3 sm:p-4 shadow-sm mb-3 group hover:border-purple-200 transition">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                      <span className="text-xs font-bold text-gray-900">Value-Add Follow-up</span>
                    </div>
                    <span className="text-[9px] bg-purple-50 text-purple-600 px-1.5 py-0.5 rounded font-medium">Day 3</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mb-3">Share relevant case study or ROI calculator tailored to their industry</p>
                  <div className="flex items-center gap-3 text-[10px]">
                    <span className="flex items-center gap-1 text-gray-400"><Eye className="w-3 h-3" /> 65% opened</span>
                    <span className="flex items-center gap-1 text-gray-400"><MousePointerClick className="w-3 h-3" /> 18% clicked</span>
                    <span className="flex items-center gap-1 text-green-600 font-semibold"><MessageSquare className="w-3 h-3" /> 12% replied</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Wait Step 2 */}
            <div className="relative">
              <div className="flex gap-3 sm:gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center z-10">
                    <Clock className="w-3.5 h-3.5 text-gray-500" />
                  </div>
                  <div className="w-0.5 h-full bg-gray-200 min-h-[20px]"></div>
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg border border-dashed border-gray-200 px-3 sm:px-4 py-2 mb-3">
                  <span className="text-[11px] text-gray-500 font-medium">Wait 5 days · if no reply</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex gap-3 sm:gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-orange-200 z-10">3</div>
                  <div className="w-0.5 h-full bg-gray-200 min-h-[40px]"></div>
                </div>
                <div className="flex-1 bg-white rounded-xl border border-gray-200 p-3 sm:p-4 shadow-sm mb-3 group hover:border-orange-200 transition">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <RefreshCw className="w-3.5 h-3.5 text-orange-500" />
                      <span className="text-xs font-bold text-gray-900">Breakup Email</span>
                    </div>
                    <span className="text-[9px] bg-orange-50 text-orange-600 px-1.5 py-0.5 rounded font-medium">Day 8</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mb-3">"Not a good time? No worries" - low-pressure final touch with easy opt-out</p>
                  <div className="flex items-center gap-3 text-[10px]">
                    <span className="flex items-center gap-1 text-gray-400"><Eye className="w-3 h-3" /> 72% opened</span>
                    <span className="flex items-center gap-1 text-green-600 font-semibold"><MessageSquare className="w-3 h-3" /> 6.5% replied</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 - End */}
            <div className="relative">
              <div className="flex gap-3 sm:gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center z-10">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex-1 bg-green-50 rounded-lg border border-green-200 px-3 sm:px-4 py-2">
                  <span className="text-[11px] text-green-700 font-semibold">Sequence complete · Move to nurture if no reply</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


/* ──────────────────────── TAB CONFIG ──────────────────────── */
const tabConfig = [
  { label: 'Gmail Extension', Mockup: GmailExtensionMockup },
  { label: 'AI Auto-Drafts', Mockup: AiAutoDraftsMockup },
  { label: 'Lead Pipeline', Mockup: LeadPipelineMockup },
  { label: 'Follow-up Sequences', Mockup: FollowUpSequencesMockup },
];


/* ──────────────────────── HERO COMPONENT ──────────────────────── */
export function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const [modalType, setModalType] = useState<'gmail' | 'demo'>('gmail');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (type: 'gmail' | 'demo') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="pt-32 pb-0 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
            <button
              onClick={() => openModal('gmail')}
              className="inline-flex justify-center items-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
              <img src="https://www.gstatic.com/images/branding/product/1x/gmail_32dp.png" alt="Gmail" className="w-5 h-5" />
              Add to Gmail — It's Free
            </button>
            <button
              onClick={() => openModal('demo')}
              className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-full text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
              Book A Demo
            </button>
          </motion.div>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="mt-20 border-b border-gray-200">
        <nav className="-mb-px flex space-x-6 sm:space-x-8 overflow-x-auto scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none" aria-label="Tabs">
          {tabConfig.map((tab, idx) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(idx)}
              className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors relative
                ${activeTab === idx 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'}
              `}
              aria-current={activeTab === idx ? 'page' : undefined}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* UI Mockup — full-width gradient backdrop */}
      <div className="mt-8 -mx-4 sm:-mx-6 lg:-mx-8 relative overflow-hidden" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}>
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-200 to-sky-300 opacity-95" />
        {/* Subtle noise/mesh overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {tabConfig[activeTab].Mockup()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={modalType}
      />
    </>
  );
}
