import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, BadgeCheck, Volume2, VolumeX } from 'lucide-react';

const XLogo = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 text-gray-400 fill-current">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

function VideoCard({ author }: { author: any }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => console.log("Video play interrupted", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="bg-white rounded-4xl overflow-hidden shadow-sm border border-gray-200 flex flex-col group/video">
      <div className="p-6 flex items-center justify-between">
         <div className="flex items-center gap-3">
          <img src={author.avatar} alt="" className="w-12 h-12 rounded-full" />
          <div>
            <div className="font-semibold text-[15px] flex items-center gap-1 text-gray-900">
              {author.name}
              <BadgeCheck className="w-4 h-4 text-white fill-blue-500" />
            </div>
            <div className="text-sm text-gray-500">@{author.handle}</div>
          </div>
        </div>
        <XLogo />
      </div>
      <div 
        onClick={togglePlay}
        className="relative aspect-4/5 bg-black cursor-pointer overflow-hidden group"
      >
        <video
          ref={videoRef}
          src="https://assets.mixkit.co/videos/preview/mixkit-businessman-working-on-his-laptop-34282-large.mp4"
          loop
          muted={isMuted}
          playsInline
          className="object-cover w-full h-full opacity-90 transition group-hover:scale-105 duration-700"
          poster="https://plus.unsplash.com/premium_photo-1676998930907-796724570f0a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        
        {/* Play/Pause Overlay */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity opacity-100 group-hover:opacity-100">
          <button 
            className="w-16 h-16 bg-purple-600/90 hover:bg-purple-700 text-white rounded-full flex items-center justify-center transition shadow-xl transform group-hover:scale-110 duration-300"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-current text-white" />
            ) : (
              <Play className="w-6 h-6 ml-1 fill-current text-white" />
            )}
          </button>
        </div>

        {/* Video Control Bar */}
        {isPlaying && (
          <div className="absolute bottom-4 right-4 z-10 flex gap-2">
            <button 
              onClick={toggleMute}
              className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white backdrop-blur-sm transition"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const testimonials = [
  {
    content: "Before switching over, our sales process lived across spreadsheets, Slack messages, and pure chaos. Within two weeks, the entire team was aligned. Follow-ups stopped slipping through the cracks and our close rate noticeably improved.",
    author: {
      name: "Marcus Rivera",
      handle: "marky_mark_riv",
      avatar: "https://i.pravatar.cc/150?u=1"
    },
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    content: "I've tried a ridiculous number of CRM tools over the years and most of them felt bloated or frustrating. This one just makes sense inside Gmail. Clean interface, fast workflows, and honestly... my team actually enjoys using it.",
    author: {
      name: "Olivia Bennett",
      handle: "callmeolivetree_1",
      avatar: "https://i.pravatar.cc/150?u=2"
    }
  },
  {
    content: "The AI drafting alone probably saves our sales reps hours every single week. Summaries happen in the background, reminders are always on point, and management finally has visibility into the pipeline without chasing people.",
    author: {
      name: "Ethan Walker",
      handle: "missionethanisgreat",
      avatar: "https://i.pravatar.cc/150?u=3"
    }
  },
  {
    content: "Absolutely a game changer. The AI insights we get now when opening an email thread are incredible. It tells me exactly what the prospect cares about.",
    author: {
      name: "Sarah Chen",
      handle: "sarah.chen991",
      avatar: "https://i.pravatar.cc/150?u=4"
    }
  },
  {
    content: "The onboarding was ridiculously fast. We moved from our legacy platform and imported everything seamlessly without disrupting active workflows.",
    author: {
      name: "Jason Ramirez",
      handle: "jason_r1988",
      avatar: "https://i.pravatar.cc/150?u=5"
    }
  },
  {
    content: "Sales velocity is up 35% in Q3. The contextual AI drafting feature basically writes perfect follow-up emails using the thread history. It's almost like magic.",
    author: {
      name: "Michael Chang",
      handle: "mikechang_sales",
      avatar: "https://i.pravatar.cc/150?u=6"
    }
  }
];

function TextCard({ quote, author }: { quote: string, author: any }) {
  return (
    <div className="bg-white rounded-4xl p-8 shadow-sm border border-gray-200 flex flex-col h-max">
      <div className="text-6xl text-gray-900 font-serif leading-none h-8 mb-6">“</div>
      <p className="text-gray-800 text-[15px] leading-relaxed mb-8 flex-1">
        {quote}
      </p>
      <div className="flex items-center justify-between">
         <div className="flex items-center gap-3">
            <img src={author.avatar} alt="" className="w-12 h-12 rounded-full" />
            <div>
              <div className="font-semibold text-[15px] flex items-center gap-1 text-gray-900">
                {author.name}
                <BadgeCheck className="w-4 h-4 text-white fill-blue-500" />
              </div>
              <div className="text-sm text-gray-500">@{author.handle}</div>
            </div>
          </div>
          <XLogo />
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            <span className="hidden sm:inline">Real users. Real growth.<br />Real fast.</span>
            <span className="sm:hidden">Real users.<br />Real growth<br />Real fast </span>
          </h2>
        </div>

        {/* Mobile Horizontal Marquee */}
        <div className="flex sm:hidden overflow-hidden relative w-full">
          <motion.div
            className="flex gap-6 pr-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {[...testimonials, ...testimonials].map((testimonial, i) => (
               <div key={i} className="w-[300px] shrink-0">
                 <TextCard quote={testimonial.content} author={testimonial.author} />
               </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop 3-Column Masonry Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-0">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <TextCard quote={testimonials[3].content} author={testimonials[3].author} />
            <TextCard quote={testimonials[4].content} author={testimonials[4].author} />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
              {/* Media Card */}
              <VideoCard author={testimonials[0].author} />

               {/* Second text card */}
               <TextCard quote={testimonials[2].content} author={testimonials[2].author} />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
             <TextCard quote={testimonials[1].content} author={testimonials[1].author} />
             <TextCard quote={testimonials[5].content} author={testimonials[5].author} />
          </div>
        </div>
      </div>
    </section>
  );
}
