interface ItemText {
  title: string;
}

const FeaturesItem = ({ title }: ItemText) => {
  return (
    <div className="item">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="55"
        viewBox="0 0 56 55"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M28 55C43.1878 55 55.5 42.6878 55.5 27.5C55.5 12.3122 43.1878 0 28 0C12.8122 0 0.5 12.3122 0.5 27.5C0.5 42.6878 12.8122 55 28 55Z"
          fill="#14A800"
          fill-opacity="0.08"
        />
        <path
          d="M26.0294 30H18.9706C18.7108 30 18.5 29.776 18.5 29.5V17.5C18.5 17.224 18.7108 17 18.9706 17H26.0294C26.2892 17 26.5 17.224 26.5 17.5V29.5C26.5 29.776 26.2892 30 26.0294 30Z"
          fill="#14A800"
        />
        <path
          d="M26.0294 39H18.9706C18.7108 39 18.5 38.776 18.5 38.5V32.5C18.5 32.224 18.7108 32 18.9706 32H26.0294C26.2892 32 26.5 32.224 26.5 32.5V38.5C26.5 38.776 26.2892 39 26.0294 39Z"
          fill="#14A800"
        />
        <path
          d="M37.0294 24H29.9706C29.7108 24 29.5 23.776 29.5 23.5V17.5C29.5 17.224 29.7108 17 29.9706 17H37.0294C37.2892 17 37.5 17.224 37.5 17.5V23.5C37.5 23.776 37.2892 24 37.0294 24Z"
          fill="#14A800"
        />
        <path
          d="M37.0294 39H29.9706C29.7108 39 29.5 38.776 29.5 38.5V26.5C29.5 26.224 29.7108 26 29.9706 26H37.0294C37.2892 26 37.5 26.224 37.5 26.5V38.5C37.5 38.776 37.2892 39 37.0294 39Z"
          fill="#14A800"
        />
      </svg>
      <span>{title}</span>
    </div>
  );
};

export const Features = () => {
  return (
    <>
      <section className="feature bg-gray-100">
        <div className="content container py-[6.25rem] mx-auto flex flex-col gap-[66px]">
          <h3 className="text-center mx-auto text-[40px] text-[#001E00] font-[400] leading-[60px] max-w-[606px]">Stop sifting, start thriving.</h3>
          <div className="features--items  grid grid-cols-6 grid-rows-3 justify-center items-center gap-[1.5rem] w-[70%] mx-auto">
            <div className="rounded-[100px] border border-[#eae9f2] flex items-center py-[8px] px-[12px] gap-4 text-center   item justify-self-end col-span-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="55"
                viewBox="0 0 56 55"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28 55C43.1878 55 55.5 42.6878 55.5 27.5C55.5 12.3122 43.1878 0 28 0C12.8122 0 0.5 12.3122 0.5 27.5C0.5 42.6878 12.8122 55 28 55Z"
                  fill="#14A800"
                  fill-opacity="0.08"
                />
                <path
                  d="M26.0294 30H18.9706C18.7108 30 18.5 29.776 18.5 29.5V17.5C18.5 17.224 18.7108 17 18.9706 17H26.0294C26.2892 17 26.5 17.224 26.5 17.5V29.5C26.5 29.776 26.2892 30 26.0294 30Z"
                  fill="#14A800"
                />
                <path
                  d="M26.0294 39H18.9706C18.7108 39 18.5 38.776 18.5 38.5V32.5C18.5 32.224 18.7108 32 18.9706 32H26.0294C26.2892 32 26.5 32.224 26.5 32.5V38.5C26.5 38.776 26.2892 39 26.0294 39Z"
                  fill="#14A800"
                />
                <path
                  d="M37.0294 24H29.9706C29.7108 24 29.5 23.776 29.5 23.5V17.5C29.5 17.224 29.7108 17 29.9706 17H37.0294C37.2892 17 37.5 17.224 37.5 17.5V23.5C37.5 23.776 37.2892 24 37.0294 24Z"
                  fill="#14A800"
                />
                <path
                  d="M37.0294 39H29.9706C29.7108 39 29.5 38.776 29.5 38.5V26.5C29.5 26.224 29.7108 26 29.9706 26H37.0294C37.2892 26 37.5 26.224 37.5 26.5V38.5C37.5 38.776 37.2892 39 37.0294 39Z"
                  fill="#14A800"
                />
              </svg>
              <span>Google chrome Extension</span>
            </div>
            <div className="rounded-[100px] border border-[#eae9f2] flex items-center py-[8px] px-[12px] gap-4 text-center item col-span-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="55"
                viewBox="0 0 56 55"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28 55C43.1878 55 55.5 42.6878 55.5 27.5C55.5 12.3122 43.1878 0 28 0C12.8122 0 0.5 12.3122 0.5 27.5C0.5 42.6878 12.8122 55 28 55Z"
                  fill="#14A800"
                  fill-opacity="0.08"
                />
                <path
                  d="M26.0294 30H18.9706C18.7108 30 18.5 29.776 18.5 29.5V17.5C18.5 17.224 18.7108 17 18.9706 17H26.0294C26.2892 17 26.5 17.224 26.5 17.5V29.5C26.5 29.776 26.2892 30 26.0294 30Z"
                  fill="#14A800"
                />
                <path
                  d="M26.0294 39H18.9706C18.7108 39 18.5 38.776 18.5 38.5V32.5C18.5 32.224 18.7108 32 18.9706 32H26.0294C26.2892 32 26.5 32.224 26.5 32.5V38.5C26.5 38.776 26.2892 39 26.0294 39Z"
                  fill="#14A800"
                />
                <path
                  d="M37.0294 24H29.9706C29.7108 24 29.5 23.776 29.5 23.5V17.5C29.5 17.224 29.7108 17 29.9706 17H37.0294C37.2892 17 37.5 17.224 37.5 17.5V23.5C37.5 23.776 37.2892 24 37.0294 24Z"
                  fill="#14A800"
                />
                <path
                  d="M37.0294 39H29.9706C29.7108 39 29.5 38.776 29.5 38.5V26.5C29.5 26.224 29.7108 26 29.9706 26H37.0294C37.2892 26 37.5 26.224 37.5 26.5V38.5C37.5 38.776 37.2892 39 37.0294 39Z"
                  fill="#14A800"
                />
              </svg>
              <span>Switch automation On/Off</span>
            </div>
            <div className="rounded-[100px] border border-[#eae9f2] flex items-center py-[8px] px-[12px] gap-4 text-center item col-span-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="55"
                viewBox="0 0 56 55"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28 55C43.1878 55 55.5 42.6878 55.5 27.5C55.5 12.3122 43.1878 0 28 0C12.8122 0 0.5 12.3122 0.5 27.5C0.5 42.6878 12.8122 55 28 55Z"
                  fill="#14A800"
                  fill-opacity="0.08"
                />
                <path
                  d="M26.0294 30H18.9706C18.7108 30 18.5 29.776 18.5 29.5V17.5C18.5 17.224 18.7108 17 18.9706 17H26.0294C26.2892 17 26.5 17.224 26.5 17.5V29.5C26.5 29.776 26.2892 30 26.0294 30Z"
                  fill="#14A800"
                />
                <path
                  d="M26.0294 39H18.9706C18.7108 39 18.5 38.776 18.5 38.5V32.5C18.5 32.224 18.7108 32 18.9706 32H26.0294C26.2892 32 26.5 32.224 26.5 32.5V38.5C26.5 38.776 26.2892 39 26.0294 39Z"
                  fill="#14A800"
                />
                <path
                  d="M37.0294 24H29.9706C29.7108 24 29.5 23.776 29.5 23.5V17.5C29.5 17.224 29.7108 17 29.9706 17H37.0294C37.2892 17 37.5 17.224 37.5 17.5V23.5C37.5 23.776 37.2892 24 37.0294 24Z"
                  fill="#14A800"
                />
                <path
                  d="M37.0294 39H29.9706C29.7108 39 29.5 38.776 29.5 38.5V26.5C29.5 26.224 29.7108 26 29.9706 26H37.0294C37.2892 26 37.5 26.224 37.5 26.5V38.5C37.5 38.776 37.2892 39 37.0294 39Z"
                  fill="#14A800"
                />
              </svg>
              <span>Instant results</span>
            </div>
            <div className="rounded-[100px] border border-[end#eae9f2] flex items-center py-[8px] px-[12px] gap-4 text-center item col-span-3  w-[60%] justify-self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="55"
                viewBox="0 0 56 55"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28 55C43.1878 55 55.5 42.6878 55.5 27.5C55.5 12.3122 43.1878 0 28 0C12.8122 0 0.5 12.3122 0.5 27.5C0.5 42.6878 12.8122 55 28 55Z"
                  fill="#14A800"
                  fill-opacity="0.08"
                />
                <path
                  d="M26.0294 30H18.9706C18.7108 30 18.5 29.776 18.5 29.5V17.5C18.5 17.224 18.7108 17 18.9706 17H26.0294C26.2892 17 26.5 17.224 26.5 17.5V29.5C26.5 29.776 26.2892 30 26.0294 30Z"
                  fill="#14A800"
                />
                <path
                  d="M26.0294 39H18.9706C18.7108 39 18.5 38.776 18.5 38.5V32.5C18.5 32.224 18.7108 32 18.9706 32H26.0294C26.2892 32 26.5 32.224 26.5 32.5V38.5C26.5 38.776 26.2892 39 26.0294 39Z"
                  fill="#14A800"
                />
                <path
                  d="M37.0294 24H29.9706C29.7108 24 29.5 23.776 29.5 23.5V17.5C29.5 17.224 29.7108 17 29.9706 17H37.0294C37.2892 17 37.5 17.224 37.5 17.5V23.5C37.5 23.776 37.2892 24 37.0294 24Z"
                  fill="#14A800"
                />
                <path
                  d="M37.0294 39H29.9706C29.7108 39 29.5 38.776 29.5 38.5V26.5C29.5 26.224 29.7108 26 29.9706 26H37.0294C37.2892 26 37.5 26.224 37.5 26.5V38.5C37.5 38.776 37.2892 39 37.0294 39Z"
                  fill="#14A800"
                />
              </svg>
              <span>Tailored messages</span>
            </div>
            <div className="rounded-[100px] border border-[#eae9f2] flex items-center py-[8px] px-[12px] gap-4 text-center item col-span-3  w-[60%] justify-self-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="55"
                viewBox="0 0 56 55"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28 55C43.1878 55 55.5 42.6878 55.5 27.5C55.5 12.3122 43.1878 0 28 0C12.8122 0 0.5 12.3122 0.5 27.5C0.5 42.6878 12.8122 55 28 55Z"
                  fill="#14A800"
                  fill-opacity="0.08"
                />
                <path
                  d="M26.0294 30H18.9706C18.7108 30 18.5 29.776 18.5 29.5V17.5C18.5 17.224 18.7108 17 18.9706 17H26.0294C26.2892 17 26.5 17.224 26.5 17.5V29.5C26.5 29.776 26.2892 30 26.0294 30Z"
                  fill="#14A800"
                />
                <path
                  d="M26.0294 39H18.9706C18.7108 39 18.5 38.776 18.5 38.5V32.5C18.5 32.224 18.7108 32 18.9706 32H26.0294C26.2892 32 26.5 32.224 26.5 32.5V38.5C26.5 38.776 26.2892 39 26.0294 39Z"
                  fill="#14A800"
                />
                <path
                  d="M37.0294 24H29.9706C29.7108 24 29.5 23.776 29.5 23.5V17.5C29.5 17.224 29.7108 17 29.9706 17H37.0294C37.2892 17 37.5 17.224 37.5 17.5V23.5C37.5 23.776 37.2892 24 37.0294 24Z"
                  fill="#14A800"
                />
                <path
                  d="M37.0294 39H29.9706C29.7108 39 29.5 38.776 29.5 38.5V26.5C29.5 26.224 29.7108 26 29.9706 26H37.0294C37.2892 26 37.5 26.224 37.5 26.5V38.5C37.5 38.776 37.2892 39 37.0294 39Z"
                  fill="#14A800"
                />
              </svg>
              <span>Add custom Information</span>
            </div>
            <div className="rounded-[100px] border border-[#eae9f2] flex items-center py-[8px] px-[12px] gap-4 text-center item col-span-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="55"
                viewBox="0 0 56 55"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28 55C43.1878 55 55.5 42.6878 55.5 27.5C55.5 12.3122 43.1878 0 28 0C12.8122 0 0.5 12.3122 0.5 27.5C0.5 42.6878 12.8122 55 28 55Z"
                  fill="#14A800"
                  fill-opacity="0.08"
                />
                <path
                  d="M26.0294 30H18.9706C18.7108 30 18.5 29.776 18.5 29.5V17.5C18.5 17.224 18.7108 17 18.9706 17H26.0294C26.2892 17 26.5 17.224 26.5 17.5V29.5C26.5 29.776 26.2892 30 26.0294 30Z"
                  fill="#14A800"
                />
                <path
                  d="M26.0294 39H18.9706C18.7108 39 18.5 38.776 18.5 38.5V32.5C18.5 32.224 18.7108 32 18.9706 32H26.0294C26.2892 32 26.5 32.224 26.5 32.5V38.5C26.5 38.776 26.2892 39 26.0294 39Z"
                  fill="#14A800"
                />
                <path
                  d="M37.0294 24H29.9706C29.7108 24 29.5 23.776 29.5 23.5V17.5C29.5 17.224 29.7108 17 29.9706 17H37.0294C37.2892 17 37.5 17.224 37.5 17.5V23.5C37.5 23.776 37.2892 24 37.0294 24Z"
                  fill="#14A800"
                />
                <path
                  d="M37.0294 39H29.9706C29.7108 39 29.5 38.776 29.5 38.5V26.5C29.5 26.224 29.7108 26 29.9706 26H37.0294C37.2892 26 37.5 26.224 37.5 26.5V38.5C37.5 38.776 37.2892 39 37.0294 39Z"
                  fill="#14A800"
                />
              </svg>
              <span>68% average increase</span>
            </div>
            <div className="rounded-[100px] border border-[#eae9f2] flex items-center py-[8px] px-[12px] gap-4 text-center item col-span-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="55"
                viewBox="0 0 56 55"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28 55C43.1878 55 55.5 42.6878 55.5 27.5C55.5 12.3122 43.1878 0 28 0C12.8122 0 0.5 12.3122 0.5 27.5C0.5 42.6878 12.8122 55 28 55Z"
                  fill="#14A800"
                  fill-opacity="0.08"
                />
                <path
                  d="M26.0294 30H18.9706C18.7108 30 18.5 29.776 18.5 29.5V17.5C18.5 17.224 18.7108 17 18.9706 17H26.0294C26.2892 17 26.5 17.224 26.5 17.5V29.5C26.5 29.776 26.2892 30 26.0294 30Z"
                  fill="#14A800"
                />
                <path
                  d="M26.0294 39H18.9706C18.7108 39 18.5 38.776 18.5 38.5V32.5C18.5 32.224 18.7108 32 18.9706 32H26.0294C26.2892 32 26.5 32.224 26.5 32.5V38.5C26.5 38.776 26.2892 39 26.0294 39Z"
                  fill="#14A800"
                />
                <path
                  d="M37.0294 24H29.9706C29.7108 24 29.5 23.776 29.5 23.5V17.5C29.5 17.224 29.7108 17 29.9706 17H37.0294C37.2892 17 37.5 17.224 37.5 17.5V23.5C37.5 23.776 37.2892 24 37.0294 24Z"
                  fill="#14A800"
                />
                <path
                  d="M37.0294 39H29.9706C29.7108 39 29.5 38.776 29.5 38.5V26.5C29.5 26.224 29.7108 26 29.9706 26H37.0294C37.2892 26 37.5 26.224 37.5 26.5V38.5C37.5 38.776 37.2892 39 37.0294 39Z"
                  fill="#14A800"
                />
              </svg>
              <span>Simple Pricing</span>
            </div>
            <div className="rounded-[100px] border border-[#eae9f2] flex items-center py-[8px] px-[12px] gap-4 text-center item col-span-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="55"
                viewBox="0 0 56 55"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28 55C43.1878 55 55.5 42.6878 55.5 27.5C55.5 12.3122 43.1878 0 28 0C12.8122 0 0.5 12.3122 0.5 27.5C0.5 42.6878 12.8122 55 28 55Z"
                  fill="#14A800"
                  fill-opacity="0.08"
                />
                <path
                  d="M26.0294 30H18.9706C18.7108 30 18.5 29.776 18.5 29.5V17.5C18.5 17.224 18.7108 17 18.9706 17H26.0294C26.2892 17 26.5 17.224 26.5 17.5V29.5C26.5 29.776 26.2892 30 26.0294 30Z"
                  fill="#14A800"
                />
                <path
                  d="M26.0294 39H18.9706C18.7108 39 18.5 38.776 18.5 38.5V32.5C18.5 32.224 18.7108 32 18.9706 32H26.0294C26.2892 32 26.5 32.224 26.5 32.5V38.5C26.5 38.776 26.2892 39 26.0294 39Z"
                  fill="#14A800"
                />
                <path
                  d="M37.0294 24H29.9706C29.7108 24 29.5 23.776 29.5 23.5V17.5C29.5 17.224 29.7108 17 29.9706 17H37.0294C37.2892 17 37.5 17.224 37.5 17.5V23.5C37.5 23.776 37.2892 24 37.0294 24Z"
                  fill="#14A800"
                />
                <path
                  d="M37.0294 39H29.9706C29.7108 39 29.5 38.776 29.5 38.5V26.5C29.5 26.224 29.7108 26 29.9706 26H37.0294C37.2892 26 37.5 26.224 37.5 26.5V38.5C37.5 38.776 37.2892 39 37.0294 39Z"
                  fill="#14A800"
                />
              </svg>
              <span>Add custom information</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};