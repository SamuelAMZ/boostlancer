import { SelectPlan } from "./switch";

interface PriceFeatureProp {
  text: String;
  heading: String;
}

const PriceFeature = ({ text, heading }: PriceFeatureProp) => {
  return (
    <div className="item">
      <svg
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
      <div className="content">
        <p className="title">{heading}</p>
        <h4 className="text">{text}</h4>
      </div>
    </div>
  );
};

interface checkLIst {
  text: String;
}

const PriceCheckList = ({ text }: checkLIst) => {
  return (
    <div className="item">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="31"
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
      <span>{text}</span>
    </div>
  );
};

export const PricingSection = () => {
  return (
    <>
      <section className="pricing">
        <div className="contents">
          <div className="heading">
            <h3 className="title">One simple pricing plan.</h3>
            <p className="text">
              Boostlancer is currently open to Upwork sellers on subscription
              basis. You can cancel your subscription in any moment.
            </p>
          </div>
          <div className="checklist">
            <div className="content">
              <div className="options">
                <span>Monthly</span>
                <SelectPlan />
                <span>Yearly</span>
              </div>
              <span className="saved">Save 25%</span>
            </div>
          </div>
          <div className="pricing--section">
            <div className="price-plan">
              <div className="pricing--card">
                <div className="price">
                  <div>
                    <h3 className="colorful-text">Starter</h3>
                    <span className="price--text">
                      $ <span>19</span> /mo
                    </span>
                    <span className="per_user">Per user</span>
                  </div>
                </div>
                <button>Star 14 day free trial</button>
              </div>
              <div className="price--checklist">
                <PriceCheckList text="Custom Cover Letters," />
                <PriceCheckList text="Priority support" />
                <PriceCheckList text="unlimited notifications." />
                <PriceCheckList text="14 day free trial" />
                <PriceCheckList text="Lifetime updates" />
              </div>
            </div>
          </div>
        </div>
        <div className="price-feature">
          <div>
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
