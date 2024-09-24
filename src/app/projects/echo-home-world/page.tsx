import Link from "next/link";
import SecondaryCard from "../../../components/SecondaryCard";
import ContentLink from "../../../components/ContentLink";
import Image from "next/image";

export default function Project() {
  return (
    <div>
      <SecondaryCard>
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-semibold">Echo's Home World</span>
          <Image className="rounded-lg" src="/img/echo-home-world/echo-5.jpg" alt="Echo's Home World" width={1920} height={1080} />
          <span>
            <ContentLink newTab href="https://vrchat.com/home/world/wrld_f5519dc9-4ed2-4dc0-b9b4-431355bf87c1">Echo's Home World</ContentLink> is a VRChat world I created for my friend <ContentLink newTab href="https://x.com/Echo_DNG">Echo_DNG</ContentLink>.
          </span>
          <span>
            The primary goal of this world was to be a hangout spot for Echo and his friends, as well as
            showcase his custom avatars.
          </span>
          <span>
            We worked together to compile notes of what he wanted in the world and what sort of vibe to target.
            Echo also gave me a few reference worlds to visit and take inspiration from. 
          </span>
          <div className="grid grid-cols-3 grid-rows-2 gap-3">
            <Image className="rounded-lg" src="/img/echo-home-world/echo-1.jpg" alt="Echo's Home World" width={1920} height={1080} />
            <Image className="rounded-lg" src="/img/echo-home-world/echo-2.jpg" alt="Echo's Home World" width={1920} height={1080} />
            <Image className="rounded-lg" src="/img/echo-home-world/echo-3.jpg" alt="Echo's Home World" width={1920} height={1080} />
            <Image className="rounded-lg" src="/img/echo-home-world/echo-4.jpg" alt="Echo's Home World" width={1920} height={1080} />
            <Image className="rounded-lg" src="/img/echo-home-world/echo-5.jpg" alt="Echo's Home World" width={1920} height={1080} />
            <Image className="rounded-lg" src="/img/echo-home-world/echo-6.jpg" alt="Echo's Home World" width={1920} height={1080} />
          </div>
        </div>
      </SecondaryCard>
    </div>
  );
}