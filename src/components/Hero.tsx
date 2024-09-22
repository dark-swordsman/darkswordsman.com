import Image from "next/image";

export default function Hero() {
  return (
    <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-6">
      <div className="flex flex-col md:items-end md:mx-0 mx-auto">
        <div className="lg:mr-8">
          <Image sizes="100vw" className="max-h-72 rounded-full w-[100%] h-auto border-violet-700 border-2" width={400} height={400} alt="Kyle Barr's profile picture." src="/img/pfp.jpg" />
        </div>
      </div>
      <div className="flex flex-col gap-6 justify-center">
        <div className="flex flex-col gap-1">
          <span className="text-4xl font-semibold">
            Hi! I'm Kyle!
          </span>
          <span className="font-light italic opacity-50">
            Kyle "darkswordsman" Barr
          </span>
        </div>
        <span className="text-lg italic font-light">I'm a "jack of all trades" tech enthusiast, 3D generalist, and passionate creator.</span>
        </div>
    </div>
  );
}