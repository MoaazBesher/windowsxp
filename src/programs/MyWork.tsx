import { TechIcon, myTechStack } from "@/appData";
import { RootState, WorkContent } from "@/types";
import WinAccordion from "components/WinAccordion/WinAccordion";
import { useEffect, useState } from "react";
import styles from "./MyWork.module.css";
import Image from "next/image";
import github from "../../assets/github.png";
import github_w from "../../assets/github_w.png";
import ie from "../../assets/ie.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "components/Carousel/Carousel";
import { useSelector } from "react-redux";
import { setBackBtn } from "@/redux/tabSlice";
import store from "@/redux/store";
import axios from "axios";
import emptyfile from "../../assets/workaccordion/emptyfile.png";

const loaderProp = ({ src }: any) => src;

const FIREBASE_DB_URL = "https://moaaz-portofolio-default-rtdb.firebaseio.com";

const techNameToBadge: Record<string, string> = {
  HTML: TechIcon.HTML,
  CSS: TechIcon.CSS,
  JavaScript: TechIcon.JAVASCRIPT,
  Firebase: TechIcon.FIREBASE,
  Flutter: TechIcon.FLUTTER,
  Dart: TechIcon.DART,
  Java: TechIcon.JAVA,
  Python: TechIcon.PYTHON,
  "C++": TechIcon.CPP,
  "Node.js": TechIcon.NODEJS,
  Express: TechIcon.NODEJS,
  Git: TechIcon.GIT,
  SQLite: TechIcon.SQLITE,
  Selenium: TechIcon.SELENIUM,
  TestNG: TechIcon.JAVA,
  Maven: TechIcon.JAVA,
  Netlify: TechIcon.FIREBASE,
  "Google Sign-In": TechIcon.GOOGLECLOUDFUNCTIONS,
  Firestore: TechIcon.FIREBASE,
  SQL: TechIcon.MYSQL,
  Electron: TechIcon.ELECTRON,
  "JSON Export/Import": TechIcon.JAVASCRIPT,
  "RTL Support": TechIcon.HTML,
  "Smart Search": TechIcon.JAVASCRIPT,
  "PDF Export": TechIcon.TYPESCRIPT,
  Localization: TechIcon.DART,
  "Android Widgets": TechIcon.FLUTTER,
};

interface FirebaseProject {
  title: string;
  date: string;
  description: string;
  link: string;
  tech: string[];
  category?: string;
  order?: number;
}

const mapFirebaseProjects = (data: Record<string, FirebaseProject> | null): WorkContent[] => {
  if (!data) return [];
  return Object.entries(data)
    .map(([key, proj]) => ({
      id: parseInt(key.replace(/\D/g, "").slice(0, 8)) || Math.random(),
      title: proj.title || "",
      date: proj.date || "",
      gitURL: proj.link || "",
      techstack: (proj.tech || []).map((t) => techNameToBadge[t] || TechIcon.HTML),
      gallery: [],
      overview: proj.description || "",
    }))
    .sort((a, b) => (b.id || 0) - (a.id || 0));
};

interface Props {
  id: number;
}

const MyWork = ({ id }: Props) => {
  const [projects, setProjects] = useState<WorkContent[]>([]);
  const [currDisplay, setCurrDisplay] = useState<WorkContent>({
    id: 0, title: "", date: "", gitURL: "", gallery: [], techstack: [], overview: "",
  });
  const [btnIcon, setBtnIcon] = useState(github_w);
  const backBtnActive = useSelector(
    (state: RootState) =>
      state.tab.tray[state.tab.tray.findIndex((tab) => tab.id === id)].backBtnActive
  );

  useEffect(() => {
    axios.get(`${FIREBASE_DB_URL}/projects.json`)
      .then((res) => setProjects(mapFirebaseProjects(res.data)))
      .catch(() => setProjects([]));
  }, []);

  useEffect(() => {
    if (currDisplay.title !== "" && !backBtnActive) {
      store.dispatch(setBackBtn({ id, backBtnActive: true }));
    }
  }, [currDisplay]);

  useEffect(() => {
    if (!backBtnActive) {
      setCurrDisplay({ id: 0, title: "", date: "", gitURL: "", gallery: [], techstack: [], overview: "" });
    }
  }, [backBtnActive]);

  const isGitHubLink = (url: string) => url.includes("github.com");

  return (
    <div className={styles.main}>
      <div className={styles.leftpanel}>
        <div>
          <div className={styles.accordion}>
            <WinAccordion title="My Projects">
              {projects.map((p) => (
                <div
                  key={p.id}
                  className={styles.accordion_content_item}
                  onClick={() => setCurrDisplay(p)}
                >
                  <div className={styles.accordion_content_text}>
                    <Image alt="file" src={emptyfile.src} height={15} width={15} />
                    <p>{p.title}</p>
                  </div>
                </div>
              ))}
            </WinAccordion>
          </div>
        </div>
      </div>
      <div className={styles.rightpanel}>
        {currDisplay.title === "" ? (
          <div className={styles.body}>
            <h4>Welcome To My Portfolio Section</h4>
            <h5>Begin Navigation by clicking on one of my projects on the left panel</h5>
            <h5>These are some of the tech stacks I have experiences with!</h5>
            <div className={styles.content_tech}>
              {myTechStack.map((badge, i) => (
                <div key={`w-${i}`} className={styles.tech_badge}>
                  <Image
                    style={{ width: "100%", borderRadius: "20px" }}
                    alt="tech"
                    src={badge}
                    width={50}
                    height={35}
                    loader={loaderProp}
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.header}>
              <h4>{currDisplay.title}</h4>
            </div>
            {currDisplay.gallery.length > 0 && (
              <div className={styles.body}>
                <h4>Project Gallery</h4>
                <Carousel images={currDisplay.gallery} />
              </div>
            )}
            <div className={styles.body}>
              <h4>Overview:</h4>
              {currDisplay.overview}
              {currDisplay.gitURL !== "" && (
                <div
                  onMouseEnter={() => setBtnIcon(isGitHubLink(currDisplay.gitURL) ? github : ie)}
                  onMouseLeave={() => setBtnIcon(isGitHubLink(currDisplay.gitURL) ? github_w : ie)}
                  onClick={() => window.open(currDisplay.gitURL, "_blank", "noreferrer")}
                  className={styles.github_button}
                >
                  {isGitHubLink(currDisplay.gitURL) ? "View On GitHub" : "View Live Demo"}
                  <Image
                    className={styles.github_icon}
                    alt="link"
                    src={btnIcon.src}
                    height={50}
                    width={50}
                  />
                </div>
              )}
            </div>
            <div className={styles.body}>
              <h4>Techstack Used</h4>
              <div className={styles.content_tech}>
                {currDisplay.techstack.map((tech, i) => (
                  <div key={`t-${i}`} className={styles.tech_badge}>
                    <Image
                      style={{ width: "100%", borderRadius: "20px" }}
                      alt="tech"
                      src={tech}
                      width={50}
                      height={40}
                      loader={loaderProp}
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWork;
