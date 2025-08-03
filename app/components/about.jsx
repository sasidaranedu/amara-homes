export default function About() {
  return (
    <div>
      <section>
        <div className="relative">
          {/* Vertical side label */}
          <span className="absolute top-3 -left-16 block text-[rgba(132,132,132,0.5)] tracking-[0.15rem] uppercase transform rotate-90 origin-top-left">
            LIFE AT AMARA
          </span>

          {/* Main heading */}
          <h2 className="text-5xl font-semibold">Welcome to the Amara life.</h2>
        </div>

        <div className="flex gap-x-16 py-12 max-w-6xl">
          <p className="leading-[30px] text-justify columns-2 gap-16 mb-0">
            A robust presence of over a decade as one of Chennai’s most highly
            regarded real estate developers has placed Amara on an unmatched
            pedestal. It stands towering amongst its compatriots for developing
            ultra-luxury homes for only the crème de la of society. Amara homes,
            a family-owned business founded by Amarnath Reddy, is a leader in
            building opulent homes of grandeur for the niche of society, who
            ultimately influence and redefine the luxury lifestyle.
          </p>
        </div>
      </section>
    </div>
  );
}
