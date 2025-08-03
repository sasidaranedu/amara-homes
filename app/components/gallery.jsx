import Slider from "./slider";

export default function Gallery() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-6xl">
        <div className="relative">
          {/* Vertical side label */}
          <span className="absolute top-3 -left-16 block text-[rgba(132,132,132,0.5)] tracking-[0.15rem] uppercase transform rotate-90 origin-top-left">
            Gallery
          </span>

          {/* Main heading */}
          <h2 className="text-5xl font-semibold">Homes that define you.</h2>
        </div>
        <div className="flex gap-x-16 py-12">
          <p className="leading-[30px] text-justify columns-2 gap-16 mb-0">
            At Amara, we have always believed in curating spaces that are alive
            and thriving. With over a decade of creating expressive works of art
            in the most prime localities, Amara has pushed the envelope in terms
            of absolute luxury. Each home is a seamless coherence between
            tradition and modern living, bearing all the hallmarks of Amara’s
            design of excellence, eternalized.
          </p>
        </div>
      </div>
      <Slider />
    </div>
  );
}
