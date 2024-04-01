import Header from '../components/Header'
import HeroSection from '../components/Hero'
import Feature from '../components/Feature'
import CallToAction from '../components/CallToAction'
import NewsletterSignUp from '../components/NewsLetter'
import Footer from '../components/Footer'
import { useRef,useEffect } from 'react'
import { useAuth } from '../hooks/context'
import submitscam from "../assets/createpost2.png";
import chatbot from "../assets/chatbotpage4.png";

function Home() {

  const auth = useAuth();

  const mySectionRef = useRef(null);
  const scrollToSection = () => {
    mySectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  useEffect(() => {
    if (auth.isNewsletterSubmitting && auth.proceed) {
      auth.handleSubmittomail();
      auth.setIsNewsletterSubmitting(false); // Reset the flag after submission
    }
  }, [auth.isNewsletterSubmitting, auth]);


  const handleSubmit = () => {
    auth.setIsPrivacyModalOpen(true);
    auth.setIsNewsletterSubmitting(true);
  };

  const feature = [
    {
      title: "Local Insights, Global Vigilance",
      description: "Navigate your travels smarter with ScamSensei's user-powered Scam Radar. Whether you're a few blocks from home or halfway across the world, stay one step ahead with our location-based scam feed. Our platform lets you:",
      subdescription: ["Post Scams: Share your experiences directly on ScamSensei. Your insights can be the beacon that guides fellow travelers safely.",
    "Discover Locally: Filter scams by location to uncover specific threats in your vicinity. Knowledge is your local shield against deceit.",
  "Vote for Awareness: Elevate the most pressing scams with your upvote. The most notorious schemes rise to the top, helping the community prioritize caution."],
      image: submitscam,
    },
    {
      title: "Chatbot Intelligence at Your Service",
      description: "Navigate the complexities of travel with a companion that's always ready to guide you. ScamSensei's chatbot is more than just a program; it's a fine-tuned guardian powered by advanced GPT models and enriched with a vast database of scams collected meticulously by our dedicated team. Whether you're looking to identify a suspicious offer or need quick tips to secure your travel plans, our chatbot is at your beck and call, providing personalized support with precision and understanding. Dive into a dialogue with ScamSensei's chatbot and experience real-time assistance that’s as informed as it is intuitive.",
      subdescription: [],
      image: chatbot,
    },
    
  ];

  return (
    <div>
        <Header />
 
 <main>
 <div className="min-h-[10vh] bg-white dark:bg-gray-900 ">
   <HeroSection />
   </div>
   <div className="min-h-[10vh] bg-white dark:bg-gray-900">
   <Feature  order1={"order-2"} order2={"order-1"} feature={feature[0]} />
   
   </div>
   <div className="min-h-[10vh] bg-white dark:bg-gray-900">
   <Feature  order1={"order-1"} order2={"order-2"} feature={feature[1]}/>
   
   </div>
   <div className=" bg-gray-900 dark:bg-gray-900">
   <CallToAction />
    </div>
   
 </main>
 <NewsletterSignUp handleSubmit={handleSubmit}/>
 <Footer />
    </div>
  )
}

export default Home