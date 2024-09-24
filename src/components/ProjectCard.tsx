import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ name, description, image, href, accentColor = "secondary" }: { name: string, description?: string, image?, href: string, accentColor?: string }) {
  /**
   * This is a project card.
   * 
   * @param name - The name of the project
   * @param description - (opt) The description of the project
   * @param image - (opt) The image for the project 
   * 
   * @returns A project card component
   */
  return (
    <Link href={href} className="relative rounded-lg bg-black flex overflow-clip group cursor-pointer h-32">
      <div className="z-20 duration-100 select-none flex flex-col gap-2 px-2 group-hover:px-4 py-2">
        <span className="bg-black bg-opacity-50 group-hover:bg-transparent w-fit px-2 group-hover:px-0 rounded-lg text-2xl group-hover:h-auto group-hover:text-lg duration-100 line-clamp-1">{name}</span>
        <span className="invisible group-hover:visible text-sm font-light line-clamp-3">{description}</span>
      </div>
      {image ? 
        <div className="absolute left-0 top-0 w-full h-full flex bg-primary bg-opacity-50">
          <Image className="object-cover w-full opacity-100 group-hover:opacity-20 duration-100" src={image} alt={`Image for: ${name}`} width={400} height={400} />
        </div>
        : null}
    </Link>
  );
}