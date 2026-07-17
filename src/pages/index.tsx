import Head from "next/head";
import { Inter } from "next/font/google";
import StartBar from "components/StartBar/StartBar";
import "xp.css/dist/XP.css";
import styles from "../styles/Home.module.css";
import DesktopIcon from "components/DesktopIcon/DesktopIcon";
import mycomputer from "../../assets/mycomputer.png";
import bin from "../../assets/recycling_bin.png";
import pdf from "../../assets/pdf.png";
import github from "../../assets/github.png";
import cmd from "../../assets/cmd.png";
import solitare from "../../assets/solitaire.png";
import linkedin from "../../assets/linkedin.png";
import WinForm from "components/WinForm/WinForm";
import { useEffect, useState } from "react";
import store from "@/redux/store";
import { AppDirectory } from "@/appData";
import { App, RootState, Tab } from "@/types";
import { addTab } from "@/redux/tabSlice";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Outlook from "@/programs/Outlook";
import MyWork from "@/programs/MyWork";
import MsgBox from "components/MsgBox/MsgBox";
import Welcome from "@/programs/Welcome";
import MyGallery from "@/programs/MyGallery";
export default function Home() {
  const Tabs = useSelector((state: RootState) => state.tab.tray);
  const currTabID = useSelector((state: RootState) => state.tab.id);

  const handleRunApp = (e: number) => {
    const newTab = { ...AppDirectory.get(e), id: uuidv4(), zIndex: currTabID };
    store.dispatch(addTab(newTab));
  };

  const handleOpenGitHub = () => {
    window.open("https://github.com/MoaazBesher", "_blank", "noreferrer");
  };

  const handleOpenLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/moaaz-besher/",
      "_blank",
      "noreferrer"
    );
  };

  const handleOpenResume = () => {
    window.open("./Resume.pdf");
  };

  return (
    <>
      <Head>
        <title>Moaaz Besher | QA Engineer &amp; Web Developer Portfolio — Palestine Advocacy</title>
        <meta name="description" content="Moaaz Besher (معاذ بشير) — QA engineer, web developer, and Palestine advocate from Egypt. Explore my portfolio: manual &amp; automation testing, front-end projects, and a photo gallery documenting the Palestinian struggle for freedom." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="keywords" content="Moaaz Besher, Moaz Besher, Moaaz Beshir, معاذ بشير, software tester Egypt, QA engineer Egypt, web developer portfolio, Palestine, Gaza, free Palestine, Palestinian struggle, Palestinian cause, فلسطين, غزة" />
        <link rel="canonical" href="https://moaazbesher.vercel.app/" />
        <link rel="icon" href="/images/favicon.ico" />

        <meta property="og:title" content="Moaaz Besher | QA Engineer &amp; Web Developer Portfolio — Palestine Advocacy" />
        <meta property="og:description" content="Moaaz Besher (معاذ بشير) — QA engineer and web developer from Egypt. Manual &amp; automation testing, front-end projects, and a photo gallery documenting the Palestinian struggle." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moaazbesher.vercel.app/" />
        <meta property="og:site_name" content="Moaaz Besher — XP Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/moaaz-portofolio.firebasestorage.app/o/profile%2Fprofile_image.jpg?alt=media&amp;token=4265a6bc-845d-4bb0-99ea-8cfacb11098d" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Moaaz Besher — QA engineer, web developer, and Palestine advocate" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Moaaz Besher | QA Engineer &amp; Web Developer — Palestine Advocacy" />
        <meta name="twitter:description" content="Moaaz Besher — QA engineer, web developer, and Palestine advocate from Egypt. Manual &amp; automation testing, front-end projects, and a Gaza photo gallery." />
        <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/moaaz-portofolio.firebasestorage.app/o/profile%2Fprofile_image.jpg?alt=media&amp;token=4265a6bc-845d-4bb0-99ea-8cfacb11098d" />
        <meta name="twitter:image:alt" content="Moaaz Besher portfolio — QA engineer, web developer, Palestine advocate" />

        <script type="application/ld+json" id="seo-json-ld">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://moaazbesher.vercel.app/#website",
                "url": "https://moaazbesher.vercel.app/",
                "name": "Moaaz Besher Portfolio — XP Edition",
                "description": "Portfolio of Moaaz Besher, QA engineer, web developer, and Palestine advocate from Egypt.",
                "inLanguage": "en",
                "publisher": { "@id": "https://moaazbesher.vercel.app/#person" }
              },
              {
                "@type": "Person",
                "@id": "https://moaazbesher.vercel.app/#person",
                "name": "Moaaz Besher",
                "alternateName": ["Moaz Besher", "Moaaz Beshir", "Moaz Beshir", "معاذ بشير"],
                "jobTitle": ["Software Developer", "Software Tester", "QA Engineer", "Palestine Advocate"],
                "description": "QA engineer and web developer from Egypt. Building software and advocating for Palestine through visual documentation of the Palestinian struggle.",
                "url": "https://moaazbesher.vercel.app/",
                "image": "https://firebasestorage.googleapis.com/v0/b/moaaz-portofolio.firebasestorage.app/o/profile%2Fprofile_image.jpg?alt=media&token=4265a6bc-845d-4bb0-99ea-8cfacb11098d",
                "nationality": { "@type": "Country", "name": "Egypt" },
                "address": { "@type": "PostalAddress", "addressCountry": "EG" },
                "knowsAbout": ["Software Testing", "Quality Assurance", "Test Automation", "Selenium", "Web Development", "JavaScript", "Palestinian Cause"],
                "sameAs": ["https://www.linkedin.com/in/moaaz-besher/", "https://github.com/MoaazBesher"]
              }
            ]
          })}
        </script>
      </Head>
      <main className={styles.main}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <DesktopIcon
            appID={1}
            doubleClick={() => void 0}
            title="My Computer"
            img={mycomputer}
          />
          <DesktopIcon
            appID={2}
            doubleClick={() => void 0}
            title="Recycling Bin"
            img={bin}
          />
          <DesktopIcon
            appID={3}
            doubleClick={handleOpenResume}
            title="My Resume"
            img={pdf}
          />
          <DesktopIcon
            appID={4}
            doubleClick={handleOpenLinkedin}
            title="My LinkedIn"
            img={linkedin}
          />
          <DesktopIcon
            appID={5}
            doubleClick={handleOpenGitHub}
            title="My Github"
            img={github}
          />
          <DesktopIcon
            appID={6}
            doubleClick={() => handleRunApp(2)}
            title="My Work"
            img={cmd}
          />

          <DesktopIcon
            appID={7}
            doubleClick={() => void 0}
            title="My Hobbies"
            img={solitare}
          />
          {Tabs.map((tab, index) => {
            return tab.isMinimized ? (
              <></>
            ) : (
              <WinForm
                key={tab.id}
                id={tab.id}
                title={tab.title}
                message={tab.message}
                icon={tab.Icon}
                zIndex={tab.zIndex}
                programType={tab.program}
                prompt={tab.prompt}
              >
                {tab.program === App.MYWORK ? (
                  <MyWork id={tab.id} />
                ) : tab.program === App.OUTLOOK ? (
                  <Outlook />
                ) : tab.program === App.WELCOME ? (
                  <Welcome id={tab.id} />
                ) : tab.program === App.MYGALLERY ? (
                  <MyGallery id={tab.id} />
                ) : tab.program === App.ERROR ? (
                  <p>{tab.message}</p>
                ) : tab.program === App.INFO ? (
                  <MsgBox id={tab.id} message={tab.message} icon={tab.Icon} />
                ) : tab.program === App.WARNING ? (
                  <p>{tab.message}</p>
                ) : tab.program === App.HELP ? (
                  <p>{tab.message}</p>
                ) : null}
              </WinForm>
            );
          })}
        </div>
        <StartBar />
      </main>
    </>
  );
}
