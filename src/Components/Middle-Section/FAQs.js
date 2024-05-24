import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQs = () => {
  const faqsData = [
    {
      id: 1,
      question: "What is Aridian Array?",
      answer: "Aridian Array is a vibrant community and platform for students and graduates of PMAS Arid Agriculture University Rawalpindi, focused on fostering innovation, collaboration, and leadership development."
    },
    {
      id: 2,
      question: "Who can join Aridian Array?",
      answer: "Aridian Array is open to all students who are interested in innovation and community development."
    },
    {
      id: 3,
      question: "What kind of events does Aridian Array host?",
      answer: "The community organizes various events such as workshops, seminars, and hackathons."
    },
    {
      id: 4 ,
      question: "How can I get involved in the Aridian Array community?",
      answer: "You can get involved by attending events, volunteering for initiatives, or by becoming a member of the organization committees"
    },
    {
      id: 5,
      question:"What are some of the benefits of being involved in the community?",
      answer:"Benefits include networking opportunities, professional growth, skill development, and being part of a supportive innovation-driven environment."
    }
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
        <span className="block text-md text-blue-600 font-inter" style={{ letterSpacing: '3px' }}>KNOW MORE?</span>
        <h1 className="lg:text-4xl md:text-2xl text-xl font-medium  my-4 font-Title">
          Frequently Asked Question?
        </h1>
        <p className="my-2 text-center lg:text-xl md:text-sm text-slate-500 font-inter">
        Everything you need to know about the product and billing.
        </p>
      </div>

      {faqsData.map(faq => (
        <div key={faq.id} className="mb-12  ">
          <div className="flex justify-between items-center ">
            <div className="text-lg font-semibold font-inter">{faq.question}</div>
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
