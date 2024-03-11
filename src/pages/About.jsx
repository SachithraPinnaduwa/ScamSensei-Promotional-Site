
import Header from '../components/Header'
import Footer from '../components/Footer'
import TeamMember from '../components/TeamMember'
import Sachithra from '../assets/sachithra.jpg'
import Eranga from '../assets/eranga.jpg'
import Gayana from '../assets/gayana.jpg'
import Oshani from '../assets/oshani.jpg'
import Sandali from '../assets/sandali.jpg'
function About() {
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
          Explore the whole collection of open-source web components and
          elements built with the utility classes from Tailwind
        </p>
      </div>
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
     <TeamMember image={Eranga} name={"Ottarachige Eranga"}/>
     <TeamMember image={Oshani} name={"Oshani"}/>
     <TeamMember image={Sachithra} name={"Scahithra Pinnaduwa"}/>
     <TeamMember image={Gayana} name={"Gayana Waragetiya"}/>
     <TeamMember image={Sandali} name={"Sandali Sawmindi"}/>
     </div>
  </div>
</section>
 
 <Footer />
    </div>
  )
}

export default About