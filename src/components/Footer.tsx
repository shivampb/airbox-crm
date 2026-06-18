import { Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/50 pt-16 sm:pt-24 overflow-hidden border-t border-gray-100">
      {/* Massive Background Text */}
      <div className="relative w-full overflow-hidden flex justify-center items-end" aria-hidden="true">
        <h1 className="text-[20vw] sm:text-[23vw] font-bold tracking-tighter leading-[0.8] text-black pointer-events-none select-none translate-y-[30%]">
          airbox
        </h1>
      </div>
    </footer>
  );
}
