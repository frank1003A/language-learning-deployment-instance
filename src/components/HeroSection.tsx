import Image from "next/image";

import { fira_sans } from "~/app/layout";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 px-4 pt-[5%] md:grid-cols-2 md:pr-0">
      <div className="flex flex-col items-center justify-center md:ml-[80px] md:mr-[180px] md:items-start">
        <h1
          className={`${fira_sans.className} mt-[130px] text-center text-4xl font-bold leading-relaxed text-[#2A2A2A] md:text-left md:text-5xl md:leading-relaxed`}
        >
          Learning Made Fun With Gaming
        </h1>
        <p className="text-center text-lg text-[#5D7590] md:text-left">
          Experience language learning like never before with thrilling quests
          and real-life challenges that keep you at your toes.
        </p>
        <Button className="my-6 w-fit rounded-full bg-orange-500 text-white md:my-[20px] md:px-[32px] md:py-[21.5]">
          Explore Quests
        </Button>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-1 bg-[#FFE0BC] p-1 md:mt-0">
        <Image
          width={396}
          height={550.5}
          src="/images/landing/hero_image1.jpg"
          alt="Save the baby"
          className="h-full w-full object-cover"
        />
        <Image
          width={396}
          height={550.5}
          src="/images/landing/hero_image2.jpg"
          alt="Get off the island"
          className="h-full w-full object-cover"
        />
        <Image
          width={396}
          height={550.5}
          src="/images/landing/hero_image3.jpg"
          alt="Save the cyclist"
          className="h-full w-full object-cover"
        />
        <Image
          width={396}
          height={550.5}
          src="/images/landing/hero_image4.jpg"
          alt="Catch the flight"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
