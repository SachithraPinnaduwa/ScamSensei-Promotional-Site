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
      answer: "Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation."
    },
    {
      question: "How do I track my order?",
      answer: "Once shipped, you’ll get a confirmation email that includes a tracking number and additional information regarding tracking your order."
    },
    {
      question: "What’s your return policy?",
      answer: "We allow the return of all items within 30 days of your original order’s date. If you’re interested in returning your items, send us an email with your order number and we’ll ship a return label."
    },
    // Add more questions as needed
  ];

  return (
    <>
    <Navbar />
    <main className="p-4 bg-white sm:p-6 dark:bg-gray-800 min-h-[100vh]">
      <div className="mx-auto max-w-screen-xl">
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
