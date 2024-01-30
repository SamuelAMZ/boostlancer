import Image from "next/image";

import profile_6 from "public/profile-6.png";
import profile_7 from "public/profile-7.png";
import profile_8 from "public/profile-8.png";
import profile_9 from "public/profile-9.png";

export const JoinList = () => {
  return (
    <>
      <div className="join--list">
        <div className="profile">
          <Image src={profile_6} alt="profile picture" />
          <Image src={profile_7} alt="profile picture" />
          <Image src={profile_8} alt="profile picture" />
          <Image src={profile_9} alt="profile picture" />
        </div>
        <p className="join--list--text">100k+ Freelancers joined</p>
      </div>
    </>
  );
};
