export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col max-w-[76rem]">
        <Hero />
        <div className="lg:w-[38rem]">
          <div className="p-16">
            test
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="p-16 lg:grid lg:grid-cols-2 flex flex-col gap-8">
      <div className="flex md:flex-row flex-col gap-6">
        <img src="/img/pfp.jpg" className="h-32 w-32 rounded-full" />
        <div className="flex flex-col justify-center gap-5">
          <span className="text-5xl font-semibold">Kyle Barr</span>
          <div className="flex flex-col text-gray-200">
            <span className="text-xl">Frontend Engineer & 3D Artist</span>
          </div>
        </div>
      </div>
      <div className="text-gray-400 text-lg flex items-center">
        <span>I build performant interfaces with user experience in mind, as well as high quality 3D assets and renders.</span>
      </div>
    </div>
  );
}