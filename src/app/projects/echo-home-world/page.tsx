import Link from "next/link";
import SecondaryCard from "../../../components/SecondaryCard";
import ContentLink from "../../../components/ContentLink";
import Image from "next/image";

export default function Project() {
  // links
  const vrcworld = "https://vrchat.com/home/world/wrld_f5519dc9-4ed2-4dc0-b9b4-431355bf87c1";

  return (
    <div>
      <div className="relative bg-black mb-4 rounded-2xl overflow-clip max-h-36 flex justify-center flex-col">
        <div className="z-10 absolute w-full h-full flex justify-center items-center">
          <span className="self-center drop-shadow-[0_0_5px_rgba(0,0,0,1)] my-2 md:my-4 text-2xl md:text-3xl lg:text-4xl font-semibold">Echo's Home World</span>
        </div>
        <Image className="opacity-65 rounded-lg" src="/img/echo-home-world/echo-5.jpg" alt="Echo's Home World" width={1920} height={1080} />
      </div>
      <SecondaryCard>
        <div className="flex flex-col gap-4 my-2">
          <span>
            <ContentLink newTab href={vrcworld}>Echo's Home World</ContentLink> is a VRChat world I created for my friend <ContentLink newTab href="https://x.com/Echo_DNG">Echo_DNG</ContentLink>.
          </span>
          <span>
            The primary goal of this world was to be a hangout spot for Echo and his friends, as well as
            showcase his custom avatars.
          </span>
          <div className="px-0 md:px-12 lg:px-36 my-4">
            <Image className="rounded-lg" src="/img/echo-home-world/echo-1.jpg" alt="Echo's Home World" width={1920} height={1080} />
          </div>
          <span>
            We worked together to compile notes of what he wanted in the world and what sort of vibe to target.
            He also gave me a few reference worlds to visit and take inspiration from. Most of these worlds were also
            high quality avatar worlds designed for people to hangout in.
          </span>
          <span>
          All of the models were made completely from scratch by me in <ContentLink newTab href="https://www.blender.org/">Blender</ContentLink>. I usually do this since it provices 
          maximum creative freedom for my clients, as well as strict control over optimization 
          (UV unwrawpping + topology/poly count). Objects are referenced from real world items crossed 
          with notes from the client.
          </span>
          <div className="px-0 md:px-12 lg:px-36 my-4">
            <Image className="rounded-lg" src="/img/echo-home-world/blender-1.jpg" alt="The world as shown in Blender." width={1920} height={1080} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {/* <Image className="rounded-lg" src="/img/echo-home-world/echo-2.jpg" alt="Echo's Home World" width={1920} height={1080} />
          <Image className="rounded-lg" src="/img/echo-home-world/echo-3.jpg" alt="Echo's Home World" width={1920} height={1080} />
          <Image className="rounded-lg" src="/img/echo-home-world/echo-4.jpg" alt="Echo's Home World" width={1920} height={1080} />
          <Image className="rounded-lg" src="/img/echo-home-world/echo-5.jpg" alt="Echo's Home World" width={1920} height={1080} />
          <Image className="rounded-lg" src="/img/echo-home-world/echo-6.jpg" alt="Echo's Home World" width={1920} height={1080} /> */}
          </div>
        </div>
      </SecondaryCard>
    </div>
  );
}