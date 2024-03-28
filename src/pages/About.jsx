
import Header from '../components/Header'
import Footer from '../components/Footer'
import TeamMember from '../components/TeamMember'
import Sachithra from '../assets/sachithra.jpg'
import Eranga from '../assets/eranga.jpg'
import Gayana from '../assets/gayana.jpg'
import Oshani from '../assets/oshani.jpg'
import Sandali from '../assets/sandali.jpg'
function About() {
  const team = [
    {
      name: "Isuru Eranga",
      image: Eranga,
      position:"Leader of the team",
      contribution:"Lead the team to develop the project and manage the team. He is responsible for arranging the meetings and managing the project."
    },
    {
      name: "Oshani Kavindya",
      image: Oshani,
      position:"UI/UX Designer",
      contribution:"Design the user interface and make the website of the project user friendly."
    },
    {
      name: "Scahithra Pinnaduwa",
      image: Sachithra,
      position:"Marketing Manager",
      contribution:"Promote the project and make the project popular among the users by using social media and a custom website."
    },
    {
      name: "Gayana Waraketiya",
      image: Gayana,
      position:"Frontend Developer",
      contribution:"Develop the front end of the project and add frontend features to the project."
    },
    {
      name: "Sandali Sawmindi",
      image: Sandali,
      position:"Backend Developer",
      contribution:"Develop the project's backend and add backend features to the project like authentication and database management."
    },
  ];
  return (
    <div>
        <Header />
        <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
 
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Our Team
        </h2>
        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
          Get to know the team behind the project. We are a group of passionate individuals who are dedicated to making this project a success.
        </p>
      </div>
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        {team.map((member,key) => (
          <TeamMember key={key} image={member.image} name={member.name} position={member.position} contribution={member.contribution}/>
        ))}
    
     </div>
  </div>
</section>
 
 <Footer />
    </div>
  )
}

export default About
