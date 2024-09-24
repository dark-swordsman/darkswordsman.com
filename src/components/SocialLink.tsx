import Image from "next/image";

interface SocialProps {
  name: string,
  image: string,
  href: string,
}

export default function SocialLink({ name, image, href }: SocialProps) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href} className="flex-grow-0 flex-initial">
      <Image src={image} className="" alt={`Social Media Link for ${name}`} width={32} height={32} />
    </a>
  );
}