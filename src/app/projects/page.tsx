import PrimaryCard from "../../components/PrimaryCard";
import ProjectCard from "../../components/ProjectCard";
import ProjectTable from "../../components/ProjectTable";

export default function Projects() {
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
    <PrimaryCard title="Projects">
      <ProjectTable>
        {projectCards.map(({ name, image, href, description }, i) => <ProjectCard key={i} name={name} image={image} href={href} description={description} />)}
      </ProjectTable>
    </PrimaryCard>
  );
}