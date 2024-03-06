export default function Home() {
  return (
    <div>
      <div className="flex lg:flex-row flex-col lg:justify-center">
        <div className="lg:w-[38rem] shrink">
          <div className="p-16 flex flex-col gap-8">
            <div className="flex-row flex gap-6">
              <img src="/img/pfp.jpg" className="h-32 rounded-full" />
              <div className="flex flex-col justify-center gap-5">
                <span className="text-5xl font-semibold">Kyle Barr</span>
                <div className="flex flex-col text-gray-200">
                  <span className="text-xl">Frontend Engineer & 3D Artist</span>
                </div>
              </div>
            </div>
            <div className="text-gray-400 text-lg flex flex-col gap-2">
              <span>I build performant interfaces with user experience in mind. I also create high quality 3D assets and renders.</span>
            </div>
          </div>
        </div>
        <div className="lg:w-[38rem]">
          <div className="p-16">
            test
          </div>
        </div>
      </div>
    </div>
  );
}
