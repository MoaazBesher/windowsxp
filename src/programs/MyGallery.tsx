import { GalleryAccordionTitles, PhotoCollection } from "@/appData";
import { WorkContent, RootState, GalleryImage } from "@/types";
import styles from "./MyGallery.module.css";
import WinAccordion from "components/WinAccordion/WinAccordion";
import Image from "next/image";
import accordionbtnd from "../../assets/workaccordion/accordionbtnd.png";
import pictureicon from "../../assets/workaccordion/pictureicon.png";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import pictureshadow from "../../assets/pictureshadow.png";
import GallerySliderIcon from "components/GallerySliderIcon/GallerySliderIcon";
import sliderleft from "../../assets/slider_left.png";
import sliderright from "../../assets/slider_right.png";

interface Props {
  id: number;
}

const MyGallery = ({ id }: Props) => {
  const [currDisplay, setCurrDisplay] = useState<GalleryImage>({
    id: 0,
    title: "",
    desc: "",
    location: "",
    date: "",
    img: pictureicon,
  });
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    setCurrDisplay(PhotoCollection[0]);
  }, []);

  const setDisplay = (id: number) => {
    setCurrDisplay(PhotoCollection[id]);
  };

  const handlePreviousImage = () => {
    if (currDisplay.id === 0) {
      setCurrDisplay(PhotoCollection[PhotoCollection.length - 1]);
      return;
    }
    setCurrDisplay(PhotoCollection[currDisplay.id - 1]);
  };

  const handleNextImage = () => {
    if (currDisplay.id === PhotoCollection.length - 1) {
      setCurrDisplay(PhotoCollection[0]);
      return;
    }
    setCurrDisplay(PhotoCollection[currDisplay.id + 1]);
  };

  return (
    <div className={styles.main}>
      <div className={styles.leftpanel}>
        <div className={styles.accordion}>
          <div className={styles.accordion_title}>
            <div className={styles.title_group}>
              <Image
                alt="pictureicon"
                src={pictureicon.src}
                height={32}
                width={32}
              />
              <p className={styles.title_text}>{"Palestine Gallery"}</p>
            </div>
            <div>
              <Image
                alt="accordionbtnd"
                src={accordionbtnd.src}
                height={20}
                width={20}
              />
            </div>
          </div>
          {GalleryAccordionTitles.map((title, index) => (
            <WinAccordion key={index} title={title}>
              {PhotoCollection.filter((f) => currDisplay.id === f.id).map(
                (e, index) => {
                  return (
                    <div className={styles.image_detail} key={index}>
                      <div style={{ fontWeight: "700" }}>{e.title}</div>
                      <div>{e.desc}</div>
                      <div>
                        <div>Location: {e.location}</div>
                        <div>Date: {e.date}</div>
                      </div>
                    </div>
                  );
                }
              )}
            </WinAccordion>
          ))}
        </div>
      </div>
      <div className={styles.rightpanel}>
        <div className={styles.display_container}>
          <div
            onClick={() => setLightboxOpen(true)}
            style={{ cursor: "pointer", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <Image
              src={currDisplay.img}
              alt={currDisplay.title}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "95%", height: "90%", objectFit: "contain" }}
            />
          </div>
          <div className={styles.control_container}>
            <div className={styles.control_icon} onClick={handlePreviousImage}>
              <Image src={sliderleft} alt="left control" height={25} />
            </div>
            <div className={styles.control_icon} onClick={handleNextImage}>
              <Image src={sliderright} alt="right control" height={25} />
            </div>
          </div>
        </div>
        <div className={styles.slider_container}>
          <div className={styles.slider}>
            {PhotoCollection.map((e) => (
              <GallerySliderIcon
                key={e.id}
                img={e.img}
                text={e.title}
                showImage={() => setDisplay(e.id)}
                sliderSelected={currDisplay.id === e.id}
              />
            ))}
          </div>
          <Image
            src={pictureshadow}
            alt="Image background shadow"
            width={100}
            height={100}
            style={{
              position: "fixed",
              bottom: -15,
              right: 4,
            }}
          />
        </div>
      </div>
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 10000,
            background: "#000",
            display: "flex", alignItems: "center", justifyContent: "center",
            userSelect: "none",
          }}
        >
          <div
            onClick={(e) => { e.stopPropagation(); handlePreviousImage(); }}
            style={{
              position: "absolute", left: 16, top: 0, bottom: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", zIndex: 1,
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div
            onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
            style={{
              position: "absolute", right: 16, top: 0, bottom: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", zIndex: 1,
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div
            onClick={() => setLightboxOpen(false)}
            style={{
              position: "absolute", top: 16, right: 16, zIndex: 1,
              color: "#fff", fontSize: 36, fontWeight: 700,
              cursor: "pointer", lineHeight: 1, opacity: 0.7,
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
            onMouseLeave={(e) => e.currentTarget.style.opacity = "0.7"}
          >
            &times;
          </div>
          <div onClick={(e) => e.stopPropagation()}>
            <img
              src={currDisplay.img.src}
              alt={currDisplay.title}
              style={{ maxWidth: "90vw", maxHeight: "90vh", display: "block" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyGallery;
