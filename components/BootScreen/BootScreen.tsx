import { useState } from "react";
import Image from "next/image";
import styles from "./BootScreen.module.css";
import winlogo from "../../assets/winlogo.png";
import shutdown from "../../assets/shutdown.png";
import userPhoto from "../../assets/userPhoto.png";

interface Props {
  onFinish: () => void;
}

const BootScreen = ({ onFinish }: Props) => {
  const [fade, setFade] = useState(false);

  const handleSignIn = () => {
    setFade(true);
    setTimeout(onFinish, 500);
  };

  return (
    <div className={`${styles.overlay} ${fade ? styles.fadeOut : ""}`}>
      <div className={styles.header}>
        <div className={styles.headerLine} />
      </div>
      <div className={styles.body}>
        <div className={styles.leftSection}>
          <div className={styles.logo}>
            <Image src={winlogo} alt="Windows" width={140} height={140} priority />
          </div>
          <div className={styles.heading}>To begin, click your user name</div>
        </div>
        <div className={styles.divider} />
        <div className={styles.rightSection}>
          <div className={styles.userCard} onClick={handleSignIn}>
            <div className={styles.avatarFrame}>
              <Image
                src={userPhoto.src}
                alt="Moaaz Besher"
                width={81}
                height={81}
                className={styles.avatar}
              />
            </div>
            <div className={styles.userInfo}>
              <div className={styles.userName}>Moaaz Besher</div>
              <div className={styles.userHint}>Click here to log on</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerLine} />
        <div className={styles.footerLeft}>
          <div className={styles.turnOffBtn}>
            <Image src={shutdown.src} alt="" width={22} height={22} />
          </div>
          <span className={styles.turnOffText}>Turn Off Computer</span>
        </div>
        <div className={styles.footerRight}>
          After you log on, you can add or change accounts.<br />
          Just go to the Control Panel and click User Accounts.
        </div>
      </div>
    </div>
  );
};

export default BootScreen;
