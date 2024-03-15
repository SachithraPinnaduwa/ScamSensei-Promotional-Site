import { Link } from "react-router-dom";
import logo from "../assets/upscaledlogo.png";
import { FaXTwitter,FaFacebook,FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    

      {/* Horizontal line */}
      <hr className="border-t border-gray-300" />

    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
      
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className=" md:m-auto sm:m-auto lg:ml-10 sm:py-5 mb-10 md:mb-0 ">
            <a
              href="#"
              className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img src={logo} className="h-40" alt="ScamSensei Logo" />
            </a>
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span> */}
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 sm:mt-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://www.sltda.gov.lk/" className="hover:underline" target="_blank">
                    SLTDA
                  </a>
                </li>
                <li>
                  <a
                    href="https://https://www.srilanka.travel/"
                    className="hover:underline"
                    target="_blank"
                  >
                    Sri Lanka Travel
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://github.com/SachithraPinnaduwa"
                    className="hover:underline "
                    target="_blank"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sachithra-pinnaduwa-566703242/"
                    className="hover:underline"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
                
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  
                   
                    <Link to="/legal" className="hover:underline">
                      Privacy Policy
                </Link>
                  
                </li>
                <li>
                  <a href="#" className="hover:underline" target="_blank">
                  <Link to="/terms" className="hover:underline">
                    Terms &amp; Conditions
                </Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 " />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com" className="hover:underline">
              ScamSensei™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
           
           
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
             <FaFacebook  />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
