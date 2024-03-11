import { FaArrowRight } from "react-icons/fa";

const Feature = ({ mySectionRef,order1,order2,feature }) => {
  return (
    <section ref={mySectionRef}>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            className={`"w-full order-2" ${order2}`}
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            alt="dashboard image"
          />
         
         
        {feature && (
          
          
            <div className={`mt-4 md:mt-0 ${order1}`} >
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                {feature.title}
              </h2>
              <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              {feature.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800"
              >
                Join Now
                <span className="ml-2">
                  <FaArrowRight />
                </span>
              </a>
            </div>
          )}

        </div>
      </section>
    </section>
  );
};

export default Feature;
