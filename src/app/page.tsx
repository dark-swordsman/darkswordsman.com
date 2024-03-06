import Hero from "@/components/main/Hero";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col max-w-[76rem]">
        <Hero />
        <span className="font-semibold text-3xl mb-6">3D Works</span>
        <div className="bg-gray-800 rounded-xl overflow-hidden flex flex-col relative">
          <div className="bg-gradient-to-r from-gray-800 to-transparent left-0 w-24 h-full absolute z-50" />
          <div className="bg-gradient-to-l from-gray-800 to-transparent right-0 w-24 h-full absolute z-50" />
          <div className="flex gap-6 p-8 h-64 overflow-scroll hide-scrollbar">
            <WorksThumb src="/img/pfp.jpg" />
            <WorksThumb src="/img/pfp.jpg" />
            <WorksThumb src="/img/pfp.jpg" />
            <WorksThumb src="/img/pfp.jpg" />
            <WorksThumb src="/img/pfp.jpg" />
            <WorksThumb src="/img/pfp.jpg" />
            <WorksThumb src="/img/pfp.jpg" />
            <WorksThumb src="/img/pfp.jpg" />
            <WorksThumb src="/img/pfp.jpg" />
            <WorksThumb src="/img/pfp.jpg" />
            <WorksThumb src="/img/pfp.jpg" />
            <WorksThumb src="/img/pfp.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

function WorksThumb({ src }: { src: string }) {
  return (
    <img src={src} className="rounded-lg cursor-pointer transition duration-75 hover:brightness-75 hover:shadow" />
  )
}