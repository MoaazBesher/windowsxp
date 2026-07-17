import styles from "./StartMenu.module.css";
import folder from "../../assets/folder_plain.png";
import StartMenuItem from "components/StartMenuItem/StartMenuItem";
import recentdoc from "../../assets/recentdoc.png";
import mycomputer from "../../assets/mycomputer.png";
import folder_image from "../../assets/folder_image.png";
import folder_music from "../../assets/folder_music.png";
import clipboard from "../../assets/clipboard.png";
import help from "../../assets/help.png";
import search from "../../assets/search.png";
import run from "../../assets/run.png";
import outlook from "../../assets/outlook.png";
import ie from "../../assets/ie.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import cmd from "../../assets/cmd.png";
import paint from "../../assets/paint.png";
import msn from "../../assets/msn.png";
import pdf from "../../assets/pdf.png";
import arrow from "../../assets/all-programs.ico";
import logoff from "../../assets/logoff.png";
import shutdown from "../../assets/shutdown.png";
import defaultprog from "../../assets/defaultprog.png";
import printerfax from "../../assets/printerfax.png";
import userPhoto from "../../assets/userPhoto.png";
import { useState } from "react";
import { AppDirectory } from "@/appData";
import { addTab } from "@/redux/tabSlice";
import store from "@/redux/store";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

interface StartMenuProps {
  menuControl: React.Dispatch<React.SetStateAction<boolean>>;
}

const StartMenu = ({ menuControl }: StartMenuProps) => {
  const [showPreview, setShowPreview] = useState(false);

  const handleOpenGitHub = () => {
    window.open("https://github.com/MoaazBesher", "_blank", "noreferrer");
  };

  const handleOpenResume = () => {
    window.open("./Resume.pdf", "_blank");
  };

  const handleOpenLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/moaaz-besher/",
      "_blank",
      "noreferrer"
    );
  };
  //const currTabID = useSelector((state: RootState) => state.tab.id);
  const handleRunApp = (e: number) => {
    menuControl(false);
    const newTab = { ...AppDirectory.get(e), id: uuidv4() };
    store.dispatch(addTab(newTab));
  };
  return (
    <div className={styles.startmenu}>
      <hr className={styles.whitehr} />
      <div className={styles.menutopbar}>
        <img
          alt="userprofile"
          src={userPhoto.src}
          width={55}
          height={55}
          onClick={(e) => { e.stopPropagation(); setShowPreview(true); }}
          style={{
            border: "2px solid rgba(255, 255, 255, 0.4)",
            borderRadius: "3px",
            boxShadow: "0 0 3px 3px rgba(0, 0, 0, 0.25)",
            margin: "0 5px 0 5px",
            objectFit: "cover",
            cursor: "pointer",
          }}
        />
        <p
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "white",
            textShadow: "1px 1px #000000",
          }}
        >
          Moaaz Besher&apos;s PC
        </p>
      </div>
      <hr className={styles.orangehr} />
      <div className={styles.menu}>
        <div className={styles.leftmenu}>
          <div>
            <StartMenuItem
              title="Internet"
              subtitle="Internet Explorer"
              icon={ie}
              type={1}
            />
            <StartMenuItem
              onClick={() => handleRunApp(1)}
              title="E-mail"
              subtitle="Drop me a message!"
              icon={outlook}
              type={1}
            />
            <hr className={styles.greyhr} />
            <StartMenuItem
              onClick={handleOpenResume}
              title="My Resume"
              icon={pdf}
              type={2}
            />
            <StartMenuItem
              onClick={handleOpenGitHub}
              title="My Github"
              icon={github}
              type={2}
            />
            <StartMenuItem
              onClick={handleOpenLinkedin}
              title="My Linkedin"
              icon={linkedin}
              type={2}
            />
            <StartMenuItem
              title="My Work"
              onClick={() => handleRunApp(2)}
              icon={cmd}
              type={2}
            />
            <StartMenuItem title="Paint" icon={paint} type={2} />
          </div>
          <div>
            <hr className={styles.greyhr} />
            <div className={styles.allprograms}>
              All Programs
              <Image
                height={15}
                width={15}
                alt="arrow"
                style={{ marginLeft: "4px" }}
                src={arrow.src}
              />
            </div>
          </div>
        </div>
        <div className={styles.rightmenu}>
          <StartMenuItem title="My Documents" icon={folder} type={3} />
          <StartMenuItem
            title="My Recent Documents"
            icon={recentdoc}
            type={3}
            expanded={true}
          />
          <StartMenuItem title="My Pictures" icon={folder_image} type={3} />
          <StartMenuItem title="My Music" icon={folder_music} type={3} />
          <StartMenuItem title="My Computer" icon={mycomputer} type={3} />
          <hr className={styles.bluehr} />
          <StartMenuItem title="Control Panel" icon={clipboard} type={4} />
          <StartMenuItem
            title="Set Program Access and Defaults"
            icon={defaultprog}
            type={4}
          />
          <StartMenuItem title="Printer and Faxes" icon={printerfax} type={4} />
          <hr className={styles.bluehr} />
          <StartMenuItem title="Help and Support" icon={help} type={4} />
          <StartMenuItem title="Search" icon={search} type={4} />
          <StartMenuItem title="Run..." icon={run} type={4} />
        </div>
      </div>
      <div className={styles.menubtmbar}>
        <div className={styles.systemBtn}>
          <Image
            width={30}
            height={30}
            alt=""
            className={styles.systemBtnIcon}
            src={logoff.src}
          />
          Log Off
        </div>
        <div className={styles.systemBtn}>
          <Image
            width={30}
            height={30}
            alt=""
            className={styles.systemBtnIcon}
            src={shutdown.src}
          />
          Turn Off Computer
        </div>
      </div>
      {showPreview && (
        <div
          onClick={(e) => { e.stopPropagation(); setShowPreview(false); }}
          style={{
            position: "fixed", inset: 0, zIndex: 10000,
            background: "rgba(0,0,0,0.5)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff", borderRadius: "6px", padding: "6px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            <img
              src={userPhoto.src}
              alt="Moaaz Besher"
              style={{ maxWidth: "90vw", maxHeight: "80vh", borderRadius: "4px", display: "block" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default StartMenu;
