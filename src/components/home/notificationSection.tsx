import Image from "next/image";

import { JoinList } from "@/components/JoinList/joinList";

import user from "public/user-look.png";
import notif from 'public/notification-icons.png';
import profile_6 from "public/profile-6.png";
import profile_7 from "public/profile-7.png";
import profile_8 from "public/profile-8.png";
import profile_9 from "public/profile-9.png";


export const NotificationSection = () => {
  return (
    <section className="">
      <div className="grid grid-cols-[1.2fr_.9fr] p-0 container mx-auto font-poppins">
        <div className="mx-auto  w-full bg-white relative flex flex-col justify-center gap-8 py-20 px-16 self-center">
          <div className="flex items-center justify-cente">
            <div className="flex justify-center">
              <Image className="w-10 h-10" src={profile_6} alt="profile picture" />
              <Image
                src={profile_7}
                alt="profile picture"
                className="relative w-10 h-10 right-4"
              />
              <Image
                src={profile_8}
                alt="profile picture"
                className="relative w-10 h-10 right-8"
              />
              <Image
                src={profile_9}
                alt="profile picture"
                className="relative w-10 h-10 right-12"
              />
            </div>
            <p className="relative text-boostlancer-dark-grey font-light text-base -ml-10">
              100k+ Freelancers joined
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="text-[40px] text-[#001E00] font-[400] leading-[60px] max-w-[606px]">
              Get notified jobs matching with your skills!{" "}
            </h3>
            <p className=" text-[#001E00] leading-10 xl:max-w-[600px] w-full font-[300] text-[20px]">
              Mcgonagall phials string squashy stan mischief lily dirigible
              50. Spells above ghost trevor mr nick cupboard portkey
              bott&apos;s blubber. Many patronus bedroom revision ludo.
            </p>
            <button className="w-[fit-content] text-white whitespace-nowrap text-sm rounded-full px-6 py-2 bg-boostlancer-light-grey border border-boostlancer-dark-grey">Learn more</button>
          </div>
        </div>

        <div className="flex-none hidden md:block">
          <div className="relative bg-center bg-cover bg-no-repeat h-[85vh] w-full"
            style={{ backgroundImage: 'url("/user-look.png")' }}>
            <Image alt="user-look" src={notif} className="absolute -left-16 top-12 h-32 w-32" />
          </div>
        </div>
      </div>
    </section>
  );
};