import Image from "next/image";

export default function ProjectBanner({ children, imageURL }: { children: React.ReactNode, imageURL: string }) {
  return (
    <div className="relative bg-black mb-4 rounded-2xl overflow-clip max-h-36 flex justify-center flex-col">
      <div className="z-10 absolute w-full h-full flex justify-center items-center">
        <span className="self-center drop-shadow-[0_0_5px_rgba(0,0,0,1)] my-2 md:my-4 text-2xl md:text-3xl lg:text-4xl font-semibold">{children}</span>
      </div>
      <Image className="opacity-65 rounded-lg" src={imageURL} alt="Echo's Home World" width={1920} height={1080} />
    </div>
  );
}