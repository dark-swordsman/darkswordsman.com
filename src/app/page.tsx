import Image from "next/image";
import PrimaryCard from "../components/PrimaryCard";
import Hero from "../components/Hero";
import ProjectTable from "../components/ProjectTable";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const projectCards = [
    {
      name: "Echo's Home World",
      image: "img/echo-thumb-1.jpg",
      href: "/projects/echo-home-world",
      description: "A world that I created for my friend. Models were made from scratch and it is Quest compatible."
    },
    {
      name: "RG Solutions",
      image: "img/echo-thumb-1.jpg",
      href: "/projects/rg-solutions",
      description: "A thriller world created for a horror-themed game jam held by Rollthered. Featured in Spookality 2023."
    },
    {
      name: "1 Hour Challenge",
      image: "img/echo-thumb-1.jpg",
      href: "/projects/1-hour",
      description: "A small project I did to test my skills. Everything modeled in 1 hour. Took 4 hours total to complete."
    },
  ]
  
  return (
    <div className="flex flex-col gap-4 md:gap-10">
      <Hero />
      <PrimaryCard title="Bio">
        <div className="flex flex-col gap-4">
          <span>
            My name is Kyle Barr and I'm and incredibly passionate creator!
          </span>
          <span>
            As mentioned, I consider myself a "jack of all trades". I never really grew up liking just
            one thing or crafting any specific skills.
          </span>
          <span>
            Most of my experience and skills come from various jobs, hobbies, or projects I've had.
            This includes things like programming, creative design, music production, 
            audio design, video editing, photography, UX design, visual effects, game design, 3D modeling, and more.
          </span>
          <span>
            I'm not necessarily proficient at any of these things and my level of skill across them varies.
            However, I've found I have an innate ability to observe.
          </span>
          <span>
            While I hate saying that since it sounds... arrogant? I really have no other way to describe it. I tend to
            notice and remember things in explicit detail. This affords me the ability to learn new skills quickly,
            and especially ways to integrate across domains of knowledge. I am obsessed with the relationships between things.
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