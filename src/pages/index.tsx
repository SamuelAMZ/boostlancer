import { JoinList } from "@/components/JoinList/joinList";

import { Footer } from "@/components/footer/footer";
import { Services } from "@/components/home/services";
import { NotificationSection } from "@/components/home/notificationSection";
import { Features } from "@/components/home/features";
import { PricingSection } from "@/components/home/pricing";
import { GetAccess } from "@/components/home/getAccess";

export default function Home() {
  return (
    <>
      <section className="hero--section">
        <div className="nav-bar container">
          <div className="logo">Boostlancer</div>
          <div className="nav--links">
            <button className="login--btn">Login</button>
            <button className="access--btn">Get early access</button>
          </div>
        </div>
        <div className="hero container">
          <div className="section-1">
            <div className="content">
              <div className="content--container">
                <h1 className="main--title">Automate your Upwork job search</h1>
                <p className="main--text">
                  Boostlancer automates your job search, generates custom cover
                  letters, and puts you ahead of the competition.
                </p>
                <div className="input--container">
                  <svg
                    className="email-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="18"
                    viewBox="0 0 22 18"
                    fill="none"
                  >
                    <path
                      d="M2 2L11.5 10L21 2"
                      stroke="#001E00"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="1"
                      y="1"
                      width="20"
                      height="16"
                      rx="2"
                      stroke="#001E00"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {/* <CiMail /> */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                  />
                  <button className="input--btn">Get Started</button>
                </div>
              </div>
              <JoinList />
            </div>

            <div className="bg-section">
              <i className="bg"></i>
              <i className="bg-1"></i>
              <i className="bg-2"></i>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <NotificationSection />
      <Features />
      <PricingSection />
      <GetAccess />
      <Footer />
    </>
  );
}
