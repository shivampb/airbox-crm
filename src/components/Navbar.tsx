import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-black to-gray-800 flex items-center justify-center shadow-lg text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">airbox</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-black">Features</a>
            <a href="#apps" className="text-sm font-medium text-gray-700 hover:text-black">Apps</a>
            <a href="#case-studies" className="text-sm font-medium text-gray-700 hover:text-black">Case Studies</a>
            <a href="#resources" className="text-sm font-medium text-gray-700 hover:text-black">Resources</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://app-airbox.netlify.app/sign-in" className="text-sm font-medium text-gray-700 hover:text-black">Login &gt;</a>
            <a href="https://app-airbox.netlify.app/sign-up" className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
              Sign up
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-500 hover:text-gray-900 focus:outline-none p-2 -mr-2">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <a href="#features" className="block text-base font-medium text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
              <a href="#apps" className="block text-base font-medium text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>Apps</a>
              <a href="#case-studies" className="block text-base font-medium text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</a>
              <a href="#resources" className="block text-base font-medium text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>Resources</a>
              <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
                <a href="https://app-airbox.netlify.app/sign-in" className="block text-center text-base font-medium text-gray-900 py-2" onClick={() => setIsMobileMenuOpen(false)}>Login</a>
                <a href="https://app-airbox.netlify.app/sign-up" className="block text-center px-4 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800" onClick={() => setIsMobileMenuOpen(false)}>
                  Sign up
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
