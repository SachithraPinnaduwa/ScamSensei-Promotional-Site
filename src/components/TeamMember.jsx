import { FaGithub ,FaLinkedin} from "react-icons/fa";
function TeamMember({image,name}) {
  return (
   
      
      
        
      <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 ">
          <a href="#">
            <img
              className=" rounded-lg sm:rounded-none sm:rounded-l-lg mx-auto"
              src={image}
              alt="Bonnie Avatar"
              width={300}
            />
          </a>
          <div className="p-5">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">{name}</a>
            </h3>
            <span className="text-gray-500 dark:text-gray-400">
              CEO & Web Developer
            </span>
            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
              Bonnie drives the technical strategy of the flowbite platform and
              brand.
            </p>
            <ul className="flex space-x-4 sm:mt-0">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <FaGithub fontSize={30}/>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                 <FaLinkedin fontSize={30}/>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  
                </a>
              </li>
            </ul>
          </div>
        </div>
      
    
  );
}

export default TeamMember;
