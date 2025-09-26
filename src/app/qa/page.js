"use client";
import { useState } from "react";

const FAQ_DATA = [
  {
    id: 1,
    question: "What services do you offer?",
    answer: "All Services"
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer: "1 Hour"
  },
  {
    id: 3,
    question: "What technologies do you work with?",
  answer: "ROCK AND STONE"
  },
  {
    id: 4,
    question: "Do you offer maintenance and support?",
    answer: "zzzzzzzzzzzzzzzzszszszszszszszszsz"
  },
  {
    id: 5,
    question: "What's your design process like?",
    answer: "tftfyfyfyfygygygjgjygjjg"
  },
  {
    id: 6,
    answer: "hiuhoiuhoijijojojoijpj"
  }
];

export default function QA() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (questionId) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center px-4 py-20"
      style={{
         backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
      }}
    >
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto pt-20">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl pt-10 bt-5 md:text-6xl font-bold text-black mb-4 drop-shadow-lg">
            Q&A
          </h1>
          <p className="text-lg md:text-xl text-white drop-shadow-md max-w-2xl mx-auto">
            Frequently asked questions about my services, process, and how we can work together.
          </p>
        </div>

        {/* FAQ Card */}
        <div className="bg-secondary bg-opacity-80 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white border-opacity-20 shadow-xl">
          <div className="space-y-4">
            {FAQ_DATA.map((faq) => (
              <div 
                key={faq.id}
                className="border-b border-white border-opacity-20 last:border-b-0"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full text-left py-4 flex items-center justify-between hover:bg-white hover:bg-opacity-5 transition-all duration-200 rounded-lg px-2"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  
                  {/* Expand/Collapse Icon */}
                  <span className="text-black text-xl font-bold flex-shrink-0">
                    {openQuestion === faq.id ? '−' : '+'}
                  </span>
                </button>

                {/* Answer (Expandable) */}
                {openQuestion === faq.id && (
                  <div className="pb-4 px-2">
                    <div className="pt-2 border-t border-white border-opacity-10">
                      <p className="text-white leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-8 pt-6 border-t border-white border-opacity-20 text-center">
            <p className="text-black mb-4">
              Have a question that isn&apos;t answered here?
            </p>
            <a 
              href="/contact"
              className="inline-block px-8 py-3 bg-primary bg-opacity-20 text-white font-medium rounded-lg border border-primary border-opacity-30 hover:bg-opacity-30 transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}