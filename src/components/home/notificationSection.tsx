import Image from "next/image";

import { JoinList } from "@/components/JoinList/joinList";

import user from "public/user-look.png";
import notif from 'public/notification-icons.png';

export const NotificationSection = () => {
  return (
    <section className="notificationPart">
      <div className="container">
        <div className="content">
          <JoinList />
          <Image
            src={notif}
            alt="notification-icons"
            className="notification-icons"
          />
          <div className="notif--text">
            <div className="notif--text--content">
              <h3 className="title">
                Get notified jobs matching with your skills!{" "}
              </h3>
              <p className="text">
                Mcgonagall phials string squashy stan mischief lily dirigible
                50. Spells above ghost trevor mr nick cupboard portkey
                bott&apos;s blubber. Many patronus bedroom revision ludo.
              </p>
              <button className="learn-more--btn">Learn more</button>
            </div>
          </div>
        </div>
        <div className="user">
          <Image src={user} alt="user" />
        </div>
      </div>
    </section>
  );
};
