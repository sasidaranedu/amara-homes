import Image from "next/image";
// import Header from "./header";

export default function Hero() {
  return (
    <div className="bg-gray-900 h-screen relative overflow-hidden">
      <div className="relative isolate pt-14 h-full">
        {/* <Header /> */}
        <Image
          src="/images/hero/hero.jpg"
          alt="Hero Image"
          fill
          priority
          className="absolute inset-0 -z-20 object-cover h-full w-full object-center"
        />

        <div className="absolute inset-0 bg-black/60 -z-10"></div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl py-32 sm:py-48 lg:py-52">
            <h1 className="text-left font-poppins text-white font-semibold tracking-tight text-5xl sm:text-[80px] leading-tight">
              Homes that
              <br />
              move you.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
