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
      question: "How do I use the ScamSensei chatbot?",
      subq: [[
        "Can I interact with the chatbot anytime?",
        "What kind of questions can I ask the chatbot?",
        "Is there a guide for chatbot commands?"
      ]],
      answer: [[
        "Yes, our chatbot is available 24/7 for your assistance. Simply start a chat session on our website.",
        "You can ask the chatbot about common scams, safety tips, and advice on how to avoid tourist traps.",
        "While there’s no specific command guide, the chatbot is designed to understand natural language. Just type your questions as you would in a normal conversation."
      ]],
    },
    {
      question: "Is the data provided by the chatbot accurate?",
      subq: [[
        "How often is the chatbot data updated?",
        "Can I rely on the chatbot for emergency situations?",
        "What sources does the chatbot use for its information?"
      ]],
      answer: [[
        "Our chatbot data is regularly updated to ensure accuracy. However, for real-time information or emergencies, we recommend contacting local authorities.",
        "While the chatbot is a helpful resource, it's not a substitute for emergency services. In urgent situations, please seek immediate assistance from local authorities.",
        "The chatbot uses data from verified sources, including travel advisories, scam reports, and our own database of scam incidents."
      ] ],
    },
    {
      question: "How can I post scam data to the ScamSensei site?",
      subq: [[
        "Do I need an account to post scam data?",
        "What details should I include in my scam report?",
        "Is there a review process for submitted scam data?"
      ]
      ],
      answer: [[
        "Yes, you need to create an account to post scam data. This helps us maintain the integrity of our database.",
        "Please include as much detail as possible in your scam report, such as the location, type of scam, and any relevant experiences.",
        "All submitted scam data is subject to a review process by our team to ensure accuracy and relevance before being published on the site."
      ]],
    },
    {
      question: "How does ScamSensei protect user privacy?",
      subq: [[
        "What personal information is collected by ScamSensei?",
        "How is my data used by ScamSensei?",
        "Can I delete my data from ScamSensei?"
      ]
      ],
      answer: [[
        "ScamSensei collects minimal personal information, such as your name and email address, for account creation and communication purposes.",
        "Your data is used to personalize your experience, provide customer support, and improve our services. We do not sell your data to third parties.",
        "Yes, you can request to delete your data from ScamSensei. Please contact our support team for assistance with data deletion."
      ]],
    },
    {
      question: "What should I do if I encounter a technical issue on the site?",
      subq: [[
        "How can I report a technical issue to ScamSensei?",
        "What information should I provide when reporting an issue?",
        "How long does it take for technical issues to be resolved?"
      ]],
      answer: [[
        "You can report technical issues through our contact form or by emailing our support team directly.",
        "When reporting an issue, please provide a detailed description of the problem, the steps to reproduce it, and any error messages you received.",
        "The resolution time for technical issues varies depending on the complexity of the problem. Our team will keep you updated on the progress of your report."
      ]],
    },
  
  ];

  return (
    <>
    <Navbar />
    <main className="p-4 bg-white sm:p-6 dark:bg-gray-800 min-h-[100vh]">
      <div className="mx-auto max-w-screen-xl ">
        <h2 className="text-xl font-semibold text-gray-900 mb-2 dark:text-slate-200">FAQ - Read this before you email us any questions</h2>
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
