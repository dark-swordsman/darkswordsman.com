import PrimaryCard from "../components/PrimaryCard";
import Hero from "../components/Hero";
import ProjectTable from "../components/ProjectTable";
import ProjectCard from "../components/ProjectCard";
import SecondaryCard from "../components/SecondaryCard";
import SocialLink from "../components/SocialLink";
import NavLink from "../components/NavLink";

export default function Home() {
  const projectCards = [
    {
      name: "Echo's Home World",
      image: "/img/echo-thumb-1.jpg",
      href: "/projects/echo-home-world",
      description: "A world that I created for my friend. Models were made from scratch and it is Quest compatible."
    },
    {
      name: "RG Solutions",
      image: "/img/echo-thumb-1.jpg",
      href: "/projects/rg-solutions",
      description: "A thriller world created for a horror-themed game jam held by Rollthered. Featured in Spookality 2023."
    },
    {
      name: "1 Hour Challenge",
      image: "/img/echo-thumb-1.jpg",
      href: "/projects/1-hour",
      description: "A small project I did to test my skills. Everything modeled in 1 hour. Took 4 hours total to complete."
    },
  ]
  
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <Hero />
      <PrimaryCard title="Bio">
        <div className="flex flex-col gap-4">
          <span>
            My name is Kyle (also known as 'Dark') and I'm a passionate creator.
          </span>
          <span>
            I consider myself a "jack of all trades" having developed skills from various jobs, hobbies, and projects. This includes programming, creative design, music production, audio design, video editing, photography, UX design, visual effects, game design, 3D modeling, and more.
          </span>
          <span>
            While I'm not an expert in all of these areas, I have a strong ability to observe and can learn new things quickly. This allows me to integrate across different domains of knowledge and grow in my understanding. I find great interest in exploring the relationships between things.
          </span>
        </div>
      </PrimaryCard>
      <PrimaryCard title="VRChat Projects">
        <ProjectTable>
          {projectCards.map(({ name, image, href, description }, i) => <ProjectCard key={i} name={name} image={image} href={href} description={description} />)}
        </ProjectTable>
      </PrimaryCard>
    </div>
  );
}