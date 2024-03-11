import Header from '../components/Header'
import HeroSection from '../components/Hero'
import Feature from '../components/Feature'
import CallToAction from '../components/CallToAction'
import NewsletterSignUp from '../components/NewsLetter'
import Footer from '../components/Footer'
import { useRef,useEffect } from 'react'
import { useAuth } from '../hooks/context'

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
      title: "Secure",
      description: "We strictly enforce privacy and security measures to protect your data.",
    },
    {
      title: "Reliable",
      description: "We are committed to providing a reliable and secure platform for your data.",
    },
    {
      title: "User Friendly",
      description: "Our platform is easy to use and navigate, making it easy to manage your data.",
    },
  ];

  return (
    <div>
        <Header />
 
 <main>
  
   <HeroSection scrollToSection={scrollToSection}/>
   <div className="min-h-[100vh] bg-white dark:bg-gray-900">
   <Feature mySectionRef={mySectionRef} order1={"order-2"} order2={"order-1"} feature={feature[0]}/>
   
   </div>
   <div className="min-h-[100vh] bg-white dark:bg-gray-900">
   <Feature mySectionRef={mySectionRef} order1={"order-1"} order2={"order-2"} feature={feature[1]}/>
   
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