import { SelectPlan } from "./switch";

interface PriceFeatureProp {
  text: String;
  heading: String;
}

const PriceFeature = ({ text, heading }: PriceFeatureProp) => {
  return (
    <div className="grid grid-cols-[40px_auto] gap-[0_.5rem]">
      <svg className="relative top-[.3rem] h-[28px]"
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="30"
        viewBox="0 0 31 30"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.2621 30C23.6912 30 30.5242 23.2843 30.5242 15C30.5242 6.71573 23.6912 0 15.2621 0C6.83308 0 0 6.71573 0 15C0 23.2843 6.83308 30 15.2621 30Z"
          fill="#14A800"
        />
        <path
          d="M8.14258 14.5H21.3698"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.3008 11L21.3707 15L17.3008 19"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div className="flex flex-col gap-4">
        <p className="text-white text-2xl">{heading}</p>
        <h4 className="text-md text-white leading-7 opacity-90 font-extralight">{text}</h4>
      </div>
    </div>
  );
};

interface checkLIst {
  text: String;
}

const PriceCheckList = ({ text }: checkLIst) => {
  return (
    <div className="flex gap-2 items-center text-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 30 31"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15 30.5C23.2843 30.5 30 23.7843 30 15.5C30 7.21573 23.2843 0.5 15 0.5C6.71573 0.5 0 7.21573 0 15.5C0 23.7843 6.71573 30.5 15 30.5Z"
          fill="#14A800"
          fill-opacity="0.1"
        />
        <path
          d="M13.7466 20.5C13.5221 20.5 13.2981 20.4157 13.1267 20.2468L9 16.1791L10.2397 14.9567L13.7466 18.4134L20.7603 11.5L22 12.7224L14.3664 20.2468C14.195 20.4157 13.971 20.5 13.7466 20.5Z"
          fill="#14A800"
        />
      </svg>
      <span className="font-[300] text-[98%]">{text}</span>
    </div>
  );
};

export const PricingSection = () => {
  return (
    <>
      <section className=" font-poppins">
        <div className="flex flex-col items-center gap-14  container mx-auto pt-16 lg:px-20">
          <div className="flex flex-col items-center gap-6 text-center px-4 lg:px-0 md:w-[55%]">
            <h3 className="text-[40px] text-[#001E00] font-[400] leading-[60px] max-w-[606px]">One simple pricing plan.</h3>
            <p className=" text-[#001E00] leading-10 xl:max-w-[800px] w-full font-[300] text-[20px]">
              Boostlancer is currently open to Upwork sellers on subscription
              basis. You can cancel your subscription in any moment.
            </p>
          </div>
          <div className=" flex gap-4 justify-center px-4 lg:px-0">
            <div className="text-base flex items-center gap-4 font-light ">
              <span>Monthly</span>
              <SelectPlan />
              <span>Yearly</span>
            </div>
            <span className="rounded-full bg-boostlancer-light-grey whitespace-nowrap text-white text-xs px-4 py-2">Save 25%</span>
          </div>
          <div className="flex justify-center items-start z-3 mb-[-10rem]">
            <div className="grid gap-[91px] grid-cols-2 justify-center lg:justify-start p-12 lg:p-20 bg-[#f7f7fb] w-[1080px] rounded-[20px] border-[#E7E9EB] border-[1px]  ">
              <div className="flex flex-col items-center justify-between gap-12 lg:gap-0">
                <div className="flex flex-col gap-4 items-center">
                  <h3 className="text-boostlancer-light-grey font-semibold text-sm">Starter</h3>
                  <span className="text-2xl font-bold">
                    $ <span className="text-5xl font-[600]">19</span> /mo
                  </span>
                  <span className="text-gray-500 text-sm">Per user</span>
                </div>
                <button className="w-[fit-content] border border-boostlancer-dark-grey px-6 py-2 text-sm text-white bg-boostlancer-light-grey rounded-full">Star 14 day free trial</button>
              </div>
              <div className="flex flex-col gap-4">
                <PriceCheckList text="Custom Cover Letters," />
                <PriceCheckList text="Priority support" />
                <PriceCheckList text="unlimited notifications." />
                <PriceCheckList text="14 day free trial" />
                <PriceCheckList text="Lifetime updates" />
              </div>
            </div>
          </div>
        </div>
        <div className="price-feature  bg-[#001e00] w-full pt-60 pb-20">
          <div className="grid grid-cols-2 max-w-[1080px] mx-auto relative bottom-0 gap-[3.625rem_2rem]">
            <PriceFeature
              heading="Can I use Boostlancer for my clients?"
              text="Ipsum is side frisbees orbs bred shell. 'zis green tears turns goblet vanishing. Candles us galleons snape knut trace. Snare side-along hedwig kittens silver cabinet wool."
            />
            <PriceFeature
              heading="Do I get free updates?"
              text="Ipsum is side frisbees orbs bred shell. 'zis green tears turns goblet vanishing. Candles us galleons snape knut trace. Snare side-along hedwig kittens silver cabinet wool."
            />
            <PriceFeature
              heading="Does it work with Upwork?"
              text="Ipsum is side frisbees orbs bred shell. 'zis green tears turns goblet vanishing. Candles us galleons snape knut trace. Snare side-along hedwig kittens silver cabinet wool."
            />
            <PriceFeature
              heading="Will you provide support?"
              text="Ipsum is side frisbees orbs bred shell. 'zis green tears turns goblet vanishing. Candles us galleons snape knut trace. Snare side-along hedwig kittens silver cabinet wool."
            />
          </div>
        </div>
      </section>
    </>
  );
};
