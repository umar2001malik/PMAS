import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQs = () => {
  const faqsData = [
    {
      id: 1,
      question: "What is your return policy?",
      answer: "Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange."
    },
    {
      id: 2,
      question: "Do you offer free shipping?",
      answer: "Yes, we offer free shipping on all orders over $50."
    },
    {
      id: 3,
      question: "What is your return policy?",
      answer: "Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange."
    },
    {
      id: 4 ,
      question: "What is your return policy?",
      answer: "Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange."
    },
    // Add more FAQs as needed
  ];

  const [expandedId, setExpandedId] = useState(null);

  const toggleFAQ = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <div className="container mx-auto md:mb-28 mb-14 ">
       <div className="text-center mb-14">
        <span className="block text-md text-blue-600">KNOW MORE?</span>
        <h1 className="lg:text-4xl md:text-2xl text-xl font-medium  my-4">
          Frequently Asked Question?
        </h1>
        <p className="my-2 text-center lg:text-xl md:text-sm text-slate-500">
        Everything you need to know about the product and billing.
        </p>
      </div>

      {faqsData.map(faq => (
        <div key={faq.id} className="mb-4  ">
          <div className="flex justify-between items-center ">
            <div className="text-lg font-semibold">{faq.question}</div>
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="focus:outline-none"
            >
              {expandedId === faq.id ? <FaMinus  /> : <FaPlus  />}
            </button>
          </div>
          {expandedId === faq.id && (
            <p className="mt-2">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
