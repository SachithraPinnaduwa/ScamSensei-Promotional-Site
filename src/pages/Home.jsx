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

  return (
    <div>
        <Header />
 
 <main>
  
   <HeroSection scrollToSection={scrollToSection}/>
   <div className="min-h-[100vh] bg-white dark:bg-gray-900">
   <Feature mySectionRef={mySectionRef} order1={"order-2"} order2={"order-1"}/>
   
   </div>
   <div className="min-h-[100vh] bg-white dark:bg-gray-900">
   <Feature mySectionRef={mySectionRef} order1={"order-1"} order2={"order-2"}/>
   
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