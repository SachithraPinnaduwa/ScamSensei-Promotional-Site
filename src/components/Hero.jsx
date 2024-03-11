
import { Link } from "react-router-dom";
import hero from "../assets/hero3.png";

const HeroSection = () => {
  return (
   
    <section className="bg-white dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        Embark on Adventures Scam free
        </h1>
        <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        Set your sights on new horizons and leave the worry of tourist traps behind. 
        ScamSensei is your trusty guide through the bustling streets and serene landscapes, shielding you from the unseen pitfalls of travel.
         Our vigilant chatbot and robust community are your sentinels against fraud, so you can immerse yourself fully in the wonders of exploration.
        </p>
        <div className="flex  mb-8 gap-4 md:flex-row  justify-center flex-col">
          <Link to={"/faq"}>
                 <a  style={{ width: '200px' }}  className="inline-flex items-center justify-center px-5 py-3  text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 mb-0">
                     Learn more
                     <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                 </a>
                 </Link>
                 <a  style={{ width: '200px' }} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 dark:text-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" target="_blank">
                     <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 5a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"></path><path d="M2 13a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path><path d="M10 5a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V5z"></path><path d="M10 13a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4z"></path></svg>
                     Watch video
                 </a>
             </div>
      </div>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src={hero} alt="Image by stockking on Freepik" />
      </div>                
    </div>
  </section>
  );
};

export default HeroSection;
