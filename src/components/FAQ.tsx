import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How does Airbox CRM integrate with Gmail?",
    answer: "Airbox CRM works as a lightweight browser extension that seamlessly integrates into your existing Gmail interface. It adds a powerful sidebar and inline tools without slowing down your inbox."
  },
  {
    question: "Do I need to leave Gmail to use it?",
    answer: "No. Airbox CRM is designed so you never have to switch tabs. You can manage your entire pipeline, send AI-drafted emails, and track opens directly from your Gmail window."
  },
  {
    question: "How does the AI email drafting work?",
    answer: "Our AI reads the context of your email thread and your prospect's history to instantly draft highly personalized, context-aware replies and follow-up sequences."
  },
  {
    question: "Is my email data secure?",
    answer: "Absolutely. We use enterprise-grade encryption and adhere to strict privacy policies. We do not sell your data, and the AI only reads the specific threads you authorize."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-500">Everything you need to know about the product and how it works.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
