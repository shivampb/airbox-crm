import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Loader2, Mail, Phone, User, MessageSquare, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'gmail' | 'demo';
}




const getAutoMessage = (type: 'gmail' | 'demo', name: string) => {
  if (type === 'gmail') {
    return `Hi Airbox Team,

My name is ${name || '[Your Name]'} and I came across your Gmail CRM extension and I'm very interested in getting started.

I'd love to learn more about how Airbox CRM can help me auto-categorize leads, write AI-powered emails, and automate follow-ups directly from Gmail.

Please reach out to walk me through the setup and any onboarding steps. Looking forward to hearing from you!

Best regards,
${name || '[Your Name]'}`;
  }
  return `Hi Airbox Team,

My name is ${name || '[Your Name]'} and I'd like to schedule a demo of your AI-powered Gmail CRM.

I'm interested in seeing how Airbox CRM can help my team close more deals without leaving our inbox — particularly the AI drafting, lead pipeline, and follow-up automation features.

Please get in touch to arrange a convenient time for the demo.

Looking forward to it!

Best regards,
${name || '[Your Name]'}`;
};

export function ContactModal({ isOpen, onClose, type }: ContactModalProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  // Update auto-message whenever name or type changes
  useEffect(() => {
    setMessage(getAutoMessage(type, form.name));
  }, [form.name, type]);

  // Reset state on open
  useEffect(() => {
    if (isOpen) {
      setForm({ name: '', email: '', phone: '' });
      setStatus('idle');
      setErrorMsg('');
      setMessage(getAutoMessage(type, ''));
    }
  }, [isOpen, type]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSend = async () => {
    if (!form.name.trim() || !form.email.trim()) {
      setErrorMsg('Please fill in your name and email.');
      return;
    }
    setErrorMsg('');
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message,
          type,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
      } else {
        setErrorMsg(data?.error || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  const isGmail = type === 'gmail';
  const title = isGmail ? 'Add Airbox to Gmail' : 'Book Your Demo';
  const subtitle = isGmail
    ? 'Fill in your details and we\'ll set you up in minutes.'
    : 'Tell us a bit about yourself and we\'ll schedule your personalised demo.';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden max-h-[90vh] flex flex-col">

              {/* Header */}
              <div className={`relative px-8 pt-8 pb-6 ${isGmail ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-indigo-600 to-purple-700'}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-8 translate-x-8" />
                <button
                  onClick={onClose}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-3 mb-3">
                  {isGmail ? (
                    <img src="https://www.gstatic.com/images/branding/product/1x/gmail_32dp.png" alt="Gmail" className="w-8 h-8" />
                  ) : (
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <h2 className="text-xl font-bold text-white">{title}</h2>
                </div>
                <p className="text-sm text-white/70">{subtitle}</p>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto px-8 py-6 space-y-4">

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                      Thanks, <strong>{form.name}</strong>! We've received your request and will be in touch at <strong>{form.email}</strong> very soon.
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-6 px-6 py-2.5 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <>
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-purple-500" /> Your Message
                        <span className="text-[10px] font-normal normal-case text-purple-500 ml-1">AI-drafted for you</span>
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                        <textarea
                          name="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={6}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none leading-relaxed"
                        />
                      </div>
                    </div>

                    {errorMsg && (
                      <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{errorMsg}</p>
                    )}
                  </>
                )}
              </div>

              {/* Footer */}
              {status !== 'success' && (
                <div className="px-8 pb-8 pt-2">
                  <button
                    onClick={handleSend}
                    disabled={status === 'sending'}
                    className={`w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl text-sm font-semibold transition-all ${
                      isGmail
                        ? 'bg-gray-900 hover:bg-gray-700 text-white'
                        : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white'
                    } disabled:opacity-60 disabled:cursor-not-allowed shadow-lg`}
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {isGmail ? 'Send My Request' : 'Book My Demo'}
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-gray-400 mt-3">
                    We'll respond within 1 business day. No spam, ever.
                  </p>
                </div>
              )}

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
