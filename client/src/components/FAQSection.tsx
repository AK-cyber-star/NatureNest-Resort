"use client"

import { useState } from "react";

const faqs = [
  {
    question: "What is the check-in and check-out time?",
    answer: "Check-in is from 3 PM and check-out is until 11 AM."
  },
  {
    question: "Do you offer airport shuttle service?",
    answer: "Yes, we provide complimentary airport shuttle services upon prior request."
  },
  {
    question: "Are pets allowed at NatureNest Resort?",
    answer: "Unfortunately, pets are not allowed to maintain a serene environment for all guests."
  },
  {
    question: "Is Wi-Fi available throughout the resort?",
    answer: "Yes, free high-speed Wi-Fi is available in all rooms and public areas."
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="my-20 max-w-4xl mx-auto p-6">
      <h2 id="faq" className="tracking-[4px] text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="mt-10 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded p-4 cursor-pointer" onClick={() => toggleIndex(index)}>
            <h3 className="text-lg font-semibold flex justify-between items-center">
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </h3>
            {openIndex === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
