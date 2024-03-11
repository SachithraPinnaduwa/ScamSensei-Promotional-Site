import  { useState } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import AccordionItem from '../components/AccordionItem';

const FAQAccordion = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleClick = (idx) => {
    setActiveTab(activeTab === idx ? null : idx);
  };

  const questions = [
    {
      question: "When will my order arrive?",
      subq:[["question1","question2","question3"],
      ["question4","question5","question6"],
      ],
      answer: [["Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation.",
      "If you have any questions about your order, please contact us at ", "If you have any questions about your order, please contact us at "],
      ["Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation.",
      "If you have any questions about your order, please contact us at ", "If you have any questions about your order, please contact us at "]],
    },
    {
      question: "How do I track my order?",
      subq:[["question7","question8","question9"],
      ["question10","questio11","question12"],
      ],
      answer: [["Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation.",
      "If you have any questions about your order, please contact us at ", "If you have any questions about your order, please contact us at "],
      ["Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation.",
      "If you have any questions about your order, please contact us at ", "If you have any questions about your order, please contact us at "]],
    },
    {
      question: "What’s your return policy?",
      subq:[["question1","question2","question3"],
      ["question4","question5","question6"],
      ],
      answer: [["Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation.",
      "If you have any questions about your order, please contact us at ", "If you have any questions about your order, please contact us at "],
      ["Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation.",
      "If you have any questions about your order, please contact us at ", "If you have any questions about your order, please contact us at "]],
    },
   
  ];

  return (
    <>
    <Navbar />
    <main className="p-4 bg-white sm:p-6 dark:bg-gray-800 min-h-[100vh]">
      <div className="mx-auto max-w-screen-xl ">
        <h2 className="text-xl font-semibold text-gray-900 mb-2 dark:text-white">FAQ - Read this before you email us any question</h2>
        <ul className="flex flex-col">

          {questions.map((item, idx) => (
            <AccordionItem item={item} idx={idx} key={idx} handleClick={handleClick} activeTab={activeTab} />
          ))}
        </ul>
      </div>
    </main>
    <Footer />
    </>
  );
};

export default FAQAccordion;
