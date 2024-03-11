

const HeroSection = ({scrollToSection}) => {
  return (
    // <section className="bg-white dark:bg-gray-900 md:min-h-[100vh] min-h-0">
    //     <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    //         <a href="#" className="inline-flex justify-between items-center py-2 px-4 mb-7 text-sm font-medium text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
    //             <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-2 mr-3">New</span>
    //             New chatbot is out! See what&apos;s new
    //             <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
    //         </a>
    //         <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
    //         <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
    //             Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
    //         </p>
    //         <div className="flex flex-col mb-8 lg:space-x-4 lg:flex-row lg:mb-16 justify-center">
    //             <a onClick={scrollToSection} href="#" className="inline-flex items-center justify-center px-5 py-3 mb-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 lg:mb-0">
    //                 Learn more
    //                 <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    //             </a>
    //             <a href="https://youtu.be/dQw4w9WgXcQ?si=eLEd7CftwIxLE9q7" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 dark:text-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" target="_blank">
    //                 <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 5a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"></path><path d="M2 13a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path><path d="M10 5a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V5z"></path><path d="M10 13a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4z"></path></svg>
    //                 Watch video
    //             </a>
    //         </div>
            
    //     </div>
    // </section>
    <section className="bg-white dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Payments tool for software companies
        </h1>
        <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
        </p>
        <div className="flex  mb-8 gap-4 md:flex-row  justify-center flex-col">
                 <a onClick={scrollToSection} style={{ width: '200px' }}  className="inline-flex items-center justify-center px-5 py-3  text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 mb-0">
                     Learn more
                     <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                 </a>
                 <a href="https://youtu.be/dQw4w9WgXcQ?si=eLEd7CftwIxLE9q7" style={{ width: '200px' }} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 dark:text-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" target="_blank">
                     <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 5a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"></path><path d="M2 13a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path><path d="M10 5a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V5z"></path><path d="M10 13a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4z"></path></svg>
                     Watch video
                 </a>
             </div>
      </div>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
      </div>                
    </div>
  </section>
  );
};

export default HeroSection;
