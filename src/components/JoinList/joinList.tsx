import Image from "next/image";

import profile_6 from "public/profile-6.png";
import profile_7 from "public/profile-7.png";
import profile_8 from "public/profile-8.png";
import profile_9 from "public/profile-9.png";

export const JoinList = () => {
  return (
    <>
      <div className="flex items-center justify-center lg:justify-start">
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
        <p className="relative text-white font-light text-base -ml-10">
          100k+ Freelancers joined
        </p>
      </div>
    </>
  );
};
