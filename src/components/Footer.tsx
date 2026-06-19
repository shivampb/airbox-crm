import { Linkedin, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full flex flex-col">
      {/* Top Banner (CTA) */}
      <div className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
            Let's work <span className="font-bold">together</span>
          </h2>
          <div className="flex gap-8 text-white font-medium text-lg">
            <a href="#" className="border-b border-white pb-1 hover:text-blue-200 hover:border-blue-200 transition-colors">Get in Touch</a>
            <a href="#" className="border-b border-white pb-1 hover:text-blue-200 hover:border-blue-200 transition-colors">Careers</a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-white pt-20 px-4 sm:px-6 lg:px-8 pb-0 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16 mb-8">
          
          {/* Left Column: Socials & Legal */}
          <div className="flex flex-col gap-12">
            <div className="flex gap-6">
              <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold text-gray-900">
              <span className="text-gray-400 font-normal">©{new Date().getFullYear()} Airbox CRM</span>
              <a href="#" className="hover:text-gray-600 transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
            </div>
          </div>

          {/* Right Column: Locations */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">San Francisco</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                100 Market Street<br />
                San Francisco, CA 94105<br />
                415.555.0198
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">New York</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                One World Trade Center<br />
                New York, NY 10007<br />
                212.555.0189
              </p>
            </div>
          </div>
        </div>

        {/* Massive Background Text */}
        <div className="relative w-full overflow-hidden flex justify-center items-end" aria-hidden="true">
          <h1 className="text-[25vw] sm:text-[23vw] font-bold tracking-tighter leading-[0.75] text-gray-900 pointer-events-none select-none translate-y-[25%]">
            airbox
          </h1>
        </div>
      </div>
    </footer>
  );
}
