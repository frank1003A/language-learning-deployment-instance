import { fira_sans } from "~/app/layout";

const HeroSection = () => {
  return (
    <section className="flex h-screen w-screen flex-row">
      <div className="flex h-full basis-1/2 flex-col justify-center">
        <div className="ml-auto w-full max-w-[630px]">
          <h1
            className={`font-fira text-black text-7xl font-semibold leading-[75px] ${fira_sans.className}`}
          >
            Learning Made Fun With Gaming
          </h1>

          <p className="mt-5 font-inter text-lg font-normal leading-6 text-neutral-110">
            Experience language learning like never <br /> before with thrilling
            quests and real-life <br /> challenges that keep you at your toes.
          </p>

          <button className="mt-4 rounded-full bg-primary-100 px-6 py-3 font-inter text-sm capitalize text-white outline-none">
            Explore questes
          </button>
        </div>
      </div>

      <div className="grid h-full basis-1/2 grid-cols-2 gap-1 bg-[#ffe0bc]">
        <div className="bg-heroImageOne relative h-[323px] w-full overflow-hidden bg-cover bg-top bg-no-repeat">
          <div className="text-black absolute bottom-0 left-0 right-0 mx-auto my-3 w-[300px] overflow-hidden whitespace-nowrap bg-gray-300 bg-opacity-80 p-3 text-center font-inter text-sm">
            Save the baby from the burning building
          </div>
        </div>

        <div className="bg-heroImageTwo relative h-[323px] w-full overflow-hidden bg-cover bg-top bg-no-repeat">
          <div className="text-black absolute bottom-0 left-0 right-0 mx-auto my-3 w-[300px] overflow-hidden whitespace-nowrap bg-gray-300 bg-opacity-80 p-3 text-center font-inter text-sm">
            Get off the Tahiti island or die trying
          </div>
        </div>

        <div className="bg-heroImageThree relative h-[323px] w-full overflow-hidden bg-cover bg-top bg-no-repeat">
          <div className="text-black absolute bottom-0 left-0 right-0 mx-auto my-3 w-[300px] overflow-hidden whitespace-nowrap bg-gray-300 bg-opacity-80 p-3 text-center font-inter text-sm">
            Save the injured cyclist
          </div>
        </div>

        <div className="bg-heroImageFour relative h-[323px] w-full overflow-hidden bg-cover bg-top bg-no-repeat">
          <div className="text-black absolute bottom-0 left-0 right-0 mx-auto my-3 w-[300px] overflow-hidden whitespace-nowrap bg-gray-300 bg-opacity-80 p-3 text-center font-inter text-sm">
            Catch the flight or get fired
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
