import React, { useState } from "react";

const FAQSection = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "What motivates you to donate to our charity?",
      answer:
        "Explore the variety of volunteer opportunities available. From event planning and fundraising to fieldwork and administrative support, there are many ways to lend your talents. Find the perfect fit for your skills and interests.",
    },
    {
      question: "How did you hear about our organization?",
      answer:
        "You can share how you came across us! Through word-of-mouth, social media, or other channels, your feedback helps us grow and improve.",
    },
    {
      question: "How frequently do you prefer to volunteer?",
      answer:
        "Let us know your availability—whether it's weekly, monthly, or during special events. Your time makes a big difference!",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6 md:p-12">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* FAQ Section (Left) */}
        <div className="md:w-1/2 md:pr-8">
          <h3 className="text-yellow-500 font-semibold text-lg">
            Frequently Asked Questions
          </h3>
          <h2 className="text-gray-800 text-3xl font-bold mt-2 mb-6">
            Have Any Questions For Us?
          </h2>

          {/* FAQ Cards */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h4>
                  <span
                    className={`transform transition-transform duration-300 ${
                      open === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span>
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    open === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section (Right) */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://via.placeholder.com/400"
            alt="Elderly Woman and Child"
            className="rounded-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;