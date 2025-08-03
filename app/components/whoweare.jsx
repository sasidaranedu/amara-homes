import Image from "next/image";

export default function WhoWeAre() {
  return (
    <div className="space-y-12">
      <article className="flex items-center py-12 max-w-6xl">
        <div className="flex-1/2 h-[300px] relative">
          <Image
            src="/images/whoweare/img1.jpg"
            alt="Who We Are"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex-1/2 pl-20">
          <h2 className="text-3xl font-semibold inline-block border-b-2 border-[#f05b27] pb-1.5 mb-4">
            Delightful
          </h2>

          <p className="leading-[30px] text-[15px] text-justify">
            Every experience at Amara is delightful and unique. Every detail is
            thoughtfully composed with generous proportions and addresses
            carefully picked in the most coveted locales. We are proud to carry
            the badge of honour of being a real estate firm that delights across
            every facet imaginable.
          </p>
        </div>
      </article>

      <article className="flex items-center flex-row-reverse py-12 max-w-6xl">
        <div className="flex-1/2 h-[300px] relative">
          <Image
            src="/images/whoweare/img2.jpg"
            alt="Who We Are"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex-1/2 pr-20">
          <h2 className="text-3xl font-semibold inline-block border-b-2 border-[#f05b27] pb-1.5 mb-4">
            Beautiful
          </h2>

          <p className="leading-[30px] text-[15px] text-justify">
            Amara Homes is a brand renowned for its ability to craft some of the
            most elegant homes with lasting impressions. Each Amara home speaks
            to the undeniable power of beauty. We have taken a novel approach to
            refinement, crafting beautiful living spaces for the most discerning
            residents..
          </p>
        </div>
      </article>

      <article className="flex items-center py-12 max-w-6xl">
        <div className="flex-1/2 h-[300px] relative">
          <Image
            src="/images/whoweare/img3.jpg"
            alt="Who We Are"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex-1/2 pl-20">
          <h2 className="text-3xl font-semibold inline-block border-b-2 border-[#f05b27] pb-1.5 mb-4">
            Trustworthy
          </h2>

          <p className="leading-[30px] text-[15px] text-justify">
            At Amara Homes, we embody the highest level of standards, realizing
            our vision without compromise. Honesty and integrity at the heart of
            every conversation, every pricing decision, and every material
            choice. The people behind Amara Homes take an unprecedented approach
            to service and exceptional standards of care.
          </p>
        </div>
      </article>
    </div>
  );
}
