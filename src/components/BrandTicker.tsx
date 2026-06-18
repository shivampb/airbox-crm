import { motion } from 'motion/react';

export function BrandTicker() {
  const brands = (
    <div className="flex items-center gap-8 sm:gap-16 px-4 sm:px-8 flex-nowrap opacity-60 shrink-0">
      <span className="text-white text-xl font-bold flex items-center gap-2 whitespace-nowrap">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 6l5 10H7l5-10z"/></svg>
        Raycast
      </span>
      <span className="text-white text-xl font-bold flex items-center gap-2 whitespace-nowrap">
        <span className="text-2xl">O/n</span>+
      </span>
      <span className="text-white text-xl font-bold flex items-center gap-2 whitespace-nowrap">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
        supabase
      </span>
      <span className="text-white text-xl font-bold flex items-center gap-2 whitespace-nowrap">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21 21H3V3h18v18z"/></svg>
        Leap
      </span>
      <span className="text-white text-xl font-bold whitespace-nowrap flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
        Payload
      </span>
      <span className="text-white text-xl font-bold font-serif italic whitespace-nowrap">
        guruhotel
      </span>
      <span className="text-white text-xl font-bold whitespace-nowrap flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
        airbox
      </span>
    </div>
  );

  return (
    <section className="bg-black py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden sm:block">
        <div className="flex justify-center items-center gap-12 flex-wrap opacity-60">
          <span className="text-white text-xl font-bold whitespace-nowrap flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            airbox
          </span>
          <span className="text-white text-xl font-bold flex items-center gap-2 whitespace-nowrap">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 6l5 10H7l5-10z"/></svg>
            Raycast
          </span>
          <span className="text-white text-xl font-bold flex items-center gap-2 whitespace-nowrap">
            <span className="text-2xl">O/n</span>+
          </span>
          <span className="text-white text-xl font-bold flex items-center gap-2 whitespace-nowrap">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
            supabase
          </span>
          <span className="text-white text-xl font-bold flex items-center gap-2 whitespace-nowrap">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21 21H3V3h18v18z"/></svg>
            Leap
          </span>
          <span className="text-white text-xl font-bold whitespace-nowrap flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
            Payload
          </span>
          <span className="text-white text-xl font-bold font-serif italic whitespace-nowrap">
            guruhotel
          </span>
        </div>
      </div>

      <div className="flex sm:hidden overflow-hidden relative">
        {/* Edge fade gradient */}
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black to-transparent z-10"></div>

        <motion.div 
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {brands}
          {brands}
        </motion.div>
      </div>
    </section>
  );
}
