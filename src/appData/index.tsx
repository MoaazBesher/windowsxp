import {
  App,
  GalleryImage,
  Tab,
  WorkContent,
  WorkFile,
  WorkType,
} from "src/types";
import error from "../../assets/dialog/error.png";
import info from "../../assets/dialog/info.png";
import warning from "../../assets/dialog/warning.png";
import help from "../../assets/dialog/help.png";
import cmd from "../../assets/cmd.png";
import mycomputer from "../../assets/mycomputer.png";
import gallery from "../../assets/folder_image.png";
import outlook from "../../assets/outlook.png";
import dsta from "../../assets/workaccordion/dsta.png";
import gdsc from "../../assets/workaccordion/gdsc.png";
import file from "../../assets/workaccordion/file.png";
import emptyfile from "../../assets/workaccordion/emptyfile.png";
import ee2026_1 from "../../assets/work/EE2026/ee2026_1.jpg";
import ee2026_2 from "../../assets/work/EE2026/ee2026_2.jpg";
import ee2026_3 from "../../assets/work/EE2026/ee2026_3.jpg";
import ee2026_4 from "../../assets/work/EE2026/ee2026_4.jpg";
import ee2026_5 from "../../assets/work/EE2026/ee2026_5.jpg";
import ee2026_6 from "../../assets/work/EE2026/ee2026_6.jpg";
import ee2026_7 from "../../assets/work/EE2026/ee2026_7.jpg";
import dsta_1 from "../../assets/work/dsta/1.png";
import dsta_2 from "../../assets/work/dsta/2.png";
import dsta_3 from "../../assets/work/dsta/3.png";
import dsta_4 from "../../assets/work/dsta/4.png";
import dsta_5 from "../../assets/work/dsta/5.png";
import dsta_6 from "../../assets/work/dsta/6.png";
import dsta_7 from "../../assets/work/dsta/7.png";
import dsta_8 from "../../assets/work/dsta/8.png";
import hfg_1 from "../../assets/work/hfg/1.png";
import hfg_2 from "../../assets/work/hfg/2.png";
import hfg_3 from "../../assets/work/hfg/3.png";
import hfg_5 from "../../assets/work/hfg/5.png";
import hfg_6 from "../../assets/work/hfg/6.png";
import hfg_7 from "../../assets/work/hfg/7.png";
import eg_1 from "../../assets/work/eg1311/1.jpg";
import eg_2 from "../../assets/work/eg1311/2.jpg";
import eg_3 from "../../assets/work/eg1311/3.jpg";
import eg_4 from "../../assets/work/eg1311/4.jpg";
import eg_5 from "../../assets/work/eg1311/5.jpg";
import eg_6 from "../../assets/work/eg1311/6.jpg";
import cg1 from "../../assets/work/cg1111/1.jpg";
import cg2 from "../../assets/work/cg1111/2.jpg";
import cg3 from "../../assets/work/cg1111/3.jpg";
import cg4 from "../../assets/work/cg1111/4.jpg";
import cg5 from "../../assets/work/cg1111/5.jpg";
import cg6 from "../../assets/work/cg1111/6.jpg";
import cg1_2 from "../../assets/work/cg2111/1.jpg";
import cg2_2 from "../../assets/work/cg2111/2.jpg";
import cg3_2 from "../../assets/work/cg2111/3.jpg";
import cg4_2 from "../../assets/work/cg2111/4.jpg";
import cg5_2 from "../../assets/work/cg2111/5.jpg";
import cg6_2 from "../../assets/work/cg2111/6.jpg";
import cs2113_1 from "../../assets/work/cs2113/1.png";
import cs2113_2 from "../../assets/work/cs2113/2.png";
import sc_1 from "../../assets/work/supercanvas/1.png";
import sc_2 from "../../assets/work/supercanvas/2.png";
import sc_3 from "../../assets/work/supercanvas/3.png";
import lul from "../../assets/work/lul.png";
import butterfly from "../../assets/butterfly.png";
import mr1 from "../../assets/mr1.jpg";
import mr2 from "../../assets/mr2.jpg";
import mrIcon from "../../assets/mr_icon.png";
import MS from "../../assets/work/MS.png";
import MS2 from "../../assets/work/MS2.png";
import col1 from "../../assets/gallery/3.jpg";
import col2 from "../../assets/gallery/0.jpg";
import col3 from "../../assets/gallery/1.jpg";
import col4 from "../../assets/gallery/2.jpg";
import col5 from "../../assets/gallery/4.jpg";
import col6 from "../../assets/gallery/5.webp";
import col7 from "../../assets/gallery/7.webp";
import col8 from "../../assets/gallery/8.webp";
import col9 from "../../assets/gallery/9.webp";
import col10 from "../../assets/gallery/10.jpg";
import col11 from "../../assets/gallery/11.webp";
import col12 from "../../assets/gallery/12.jpg";
import col13 from "../../assets/gallery/13.jpg";
import col14 from "../../assets/gallery/14.jpg";

export const TechIcon = {
  REACT:
    "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  NEXTJS:
    "https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white",
  FIREBASE:
    "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
  TYPESCRIPT:
    "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
  FIGMA:
    "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
  NODEJS:
    "https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white",
  GOOGLECLOUDFUNCTIONS:
    "https://img.shields.io/badge/gCloud_Functions-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",
  JAVA: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white",
  FLUTTER:
    "https://img.shields.io/badge/flutter-%2302569B.svg?style=for-the-badge&logo=flutter&logoColor=white",
  PYTHON:
    "https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white",
  CPP: "https://img.shields.io/badge/C++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&ogoColor=white",
  HTML: "https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  CSS: "https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  JAVASCRIPT:
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  REDUX:
    "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
  DART:
    "https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white",
  SELENIUM:
    "https://img.shields.io/badge/selenium-%2343B02A.svg?style=for-the-badge&logo=selenium&logoColor=white",
  GIT:
    "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
  SQLITE:
    "https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white",
  MYSQL:
    "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white",
  ELECTRON:
    "https://img.shields.io/badge/electron-%2347848F.svg?style=for-the-badge&logo=electron&logoColor=white",
};

export const myTechStack = [
  TechIcon.HTML,
  TechIcon.CSS,
  TechIcon.JAVASCRIPT,
  TechIcon.FIREBASE,
  TechIcon.FLUTTER,
  TechIcon.DART,
  TechIcon.JAVA,
  TechIcon.PYTHON,
  TechIcon.CPP,
  TechIcon.NODEJS,
  TechIcon.SELENIUM,
  TechIcon.GIT,
  TechIcon.SQLITE,
  TechIcon.MYSQL,
  TechIcon.ELECTRON,
  TechIcon.REDUX,
];

export const AppDirectory: Map<number, Tab> = new Map([
  [
    0,
    {
      id: 0,
      title: "Welcome To My Website - Quick Start Guide",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.WELCOME,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    1,
    {
      id: 0,
      title: "Outlook Express",
      message: "",
      Icon: outlook,
      isMinimized: false,
      zIndex: 0,
      program: App.OUTLOOK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    2,
    {
      id: 0,
      title: "My Work",
      message: "",
      Icon: cmd,
      isMinimized: false,
      zIndex: 0,
      program: App.MYWORK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    4,
    {
      id: 0,
      title: "Palestine Photo Gallery",
      message: "",
      Icon: gallery,
      isMinimized: false,
      zIndex: 0,
      program: App.MYGALLERY,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    5,
    {
      id: 0,
      title: "Error",
      message: "",
      Icon: error,
      isMinimized: false,
      zIndex: 0,
      program: App.ERROR,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    6,
    {
      id: 0,
      title: "Warning",
      message: "",
      Icon: warning,
      isMinimized: false,
      zIndex: 0,
      program: App.WARNING,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    7,
    {
      id: 0,
      title: "Info",
      message: "",
      Icon: info,
      isMinimized: false,
      zIndex: 0,
      program: App.INFO,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    8,
    {
      id: 0,
      title: "Help",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.HELP,
      prompt: true,
      backBtnActive: false,
    },
  ],
]);

export const WorkAccordionTitles = [
  WorkType.PERSONAL,
];

export const GalleryAccordionTitles = ["Palestine Through My Lens"];

export const WorkData = [
  {
    id: 1,
    title: "Gym Management System",
    date: "Apr 2026 - May 2026",
    gitURL: "https://demogymsystem.vercel.app/",
    techstack: [
      TechIcon.NODEJS,
      TechIcon.JAVASCRIPT,
    ],
    gallery: [],
    overview: `A production-grade offline gym management system designed to efficiently handle member operations,
    subscription plans, attendance tracking, and performance analytics through a fast and intuitive interface.
    Features Arabic RTL user experience, intelligent search capabilities, and robust data export/import
    functionality ensuring full portability and data control. An optional Electron-based desktop version
    provides enhanced usability across platforms.`,
  },
  {
    id: 2,
    title: "Fashion Store - E-Commerce Website",
    date: "Dec 2025 - Jan 2026",
    gitURL: "https://demo-fashionstore.vercel.app/",
    techstack: [TechIcon.HTML, TechIcon.CSS, TechIcon.JAVASCRIPT, TechIcon.FIREBASE],
    gallery: [],
    overview: `A modern e-commerce website with a pink theme, built using HTML, CSS, JavaScript, and Firebase.
    Provides a complete shopping experience including product catalog browsing, search and filtering,
    wishlist management, shopping cart functionality, user authentication via Google or email/password,
    personalized user profiles with product reviews, and an admin dashboard for managing products, orders, and inventory.`,
  },
  {
    id: 3,
    title: "Expenses Tracker - Personal Finance App",
    date: "Mar 2026 - May 2026",
    gitURL: "https://github.com/MoaazBesher/expensesTracker",
    techstack: [TechIcon.FLUTTER, TechIcon.FIREBASE],
    gallery: [],
    overview: `A modern personal finance mobile application built using Flutter, Firebase, and SQLite.
    Helps users manage income, expenses, and debts efficiently through an intuitive and responsive interface.
    Supports offline-first functionality with automatic cloud synchronization, monthly financial reports,
    PDF export, Google Sign-In authentication, home screen widgets, and full English/Arabic localization with RTL support.`,
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    date: "Jun 2025 - Aug 2025",
    gitURL: "https://moaaz-ashraf.netlify.app/",
    techstack: [TechIcon.HTML, TechIcon.CSS, TechIcon.JAVASCRIPT, TechIcon.FIREBASE],
    gallery: [],
    overview: `Developed a dynamic portfolio website fully managed via a custom Android admin app.
    Integrated Firebase (Realtime Database, Authentication, Cloud Functions, FCM, Storage).
    Implemented secure role-based access control ensuring only the owner can update content.
    Enabled real-time updates and notifications for a seamless content management experience.`,
  },
  {
    id: 5,
    title: "Sadaqa Mobile App",
    date: "Mar 2025 - Apr 2025",
    gitURL: "https://github.com/MoaazBesher/sadaqa_app",
    techstack: [TechIcon.FLUTTER, TechIcon.FIREBASE],
    gallery: [],
    overview: `A Flutter application integrated with Firebase. Implements dynamic content and push notifications.
    Designed with a responsive UI ensuring smooth performance across devices.`,
  },
  {
    id: 6,
    title: "Sadaqa Website - Islamic Web Platform",
    date: "Nov 2024 - Dec 2024",
    gitURL: "https://sadaqa-website.vercel.app/",
    techstack: [TechIcon.HTML, TechIcon.CSS, TechIcon.JAVASCRIPT],
    gallery: [],
    overview: `A full-featured Islamic web platform featuring Azkar, Quran, prayer times, supplications, and Tasbeeh.
    Built an admin panel for content, messages, and statistics management.
    Integrated Firebase (Realtime Database, Analytics, Cloud Messaging) for dynamic data and notifications.`,
  },
  {
    id: 7,
    title: "E-Commerce Testing Framework",
    date: "Mar 2025 - May 2025",
    gitURL: "https://github.com/MoaazBesher/Depi-e-commerce-testing",
    techstack: [TechIcon.JAVA],
    gallery: [],
    overview: `Developed an e-commerce automation testing framework using Java, Selenium, TestNG, and Maven.
    Implemented Page Object Model (POM) and automated core flows such as login, search, cart, and checkout.
    Generated professional HTML reports using ExtentReports for comprehensive test result analysis.`,
  },
] as WorkContent[];

export const WorkAccordionContent = [
  {
    id: 1,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "Gym Management System",
    content: WorkData[WorkData.findIndex((x) => x.id === 1)],
  },
  {
    id: 2,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "Fashion Store",
    content: WorkData[WorkData.findIndex((x) => x.id === 2)],
  },
  {
    id: 3,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "Expenses Tracker",
    content: WorkData[WorkData.findIndex((x) => x.id === 3)],
  },
  {
    id: 4,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "Personal Portfolio Website",
    content: WorkData[WorkData.findIndex((x) => x.id === 4)],
  },
  {
    id: 5,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "Sadaqa Mobile App",
    content: WorkData[WorkData.findIndex((x) => x.id === 5)],
  },
  {
    id: 6,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "Sadaqa Website",
    content: WorkData[WorkData.findIndex((x) => x.id === 6)],
  },
  {
    id: 7,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "E-Commerce Testing Framework",
    content: WorkData[WorkData.findIndex((x) => x.id === 7)],
  },
] as WorkFile[];

// For Palestine Photo Gallery
export const PhotoCollection = [
  {
    id: 0,
    title: "Muhammad al-Durrah — The Boy Who Haunted the World",
    location: "Gaza City, Palestine",
    desc: "12-year-old Muhammad al-Durrah was murdered in cold blood by Israeli soldiers on September 30, 2000 as his father Jamal desperately tried to shield him. The footage captured by cameraman Talal Abu Rahma showed the father crouching behind a concrete cylinder, screams of the terrified boy heard as Israeli forces intensified their fire. His image, cowering behind his father, became the symbol of Palestinian suffering. The Israeli occupation army tried to cast doubt on the footage, but in 2013 a French court fined pro-Israeli commentator Philippe Karsenty €7,000 for libel after he alleged the scene was staged.",
    date: "September 30, 2000",
    img: col1,
  },
  {
    id: 1,
    title: "Baby Sewar Abu Deraz",
    location: "Khan Younis, Gaza",
    desc: "Baby Sewar Abu Deraz, who had not yet reached her first birthday, was killed alongside her 23-year-old mother Diana Mohammad Abu Deraz in an Israeli occupation airstrike that struck the Al-Mawasi area of Khan Younis in the southern Gaza Strip. Images from Gaza captured the heartbreaking farewell as grieving relatives mourned the infant and her mother.",
    date: "2025",
    img: col2,
  },
  {
    id: 2,
    title: "Sham Shurrab — 18 Months, Forever a Child",
    location: "Khan Younis, Gaza",
    desc: "The body of 18-month-old Sham Shurrab is carried by her uncle for burial in the aftermath of an Israeli airstrike at the Muwassi camp, outside Nasser Hospital in Khan Younis. Israeli airstrikes struck the camp for displaced Palestinians in southern Gaza, killing at least 21 people. An infant who never got to celebrate a second birthday, carried to her grave in the arms of a grieving family.",
    date: "December 5, 2024",
    img: col11,
  },
  {
    id: 3,
    title: "Inas Abu Maamar Embraces Her Niece Saly",
    location: "Khan Younis, Gaza",
    desc: "Palestinian woman Inas Abu Maamar, 36, embraces the body of her 5-year-old niece Saly, who was killed in an Israeli strike, at Nasser Hospital in Khan Younis, southern Gaza Strip. A child in her aunt's arms, not sleeping, not resting — but gone forever. An image captured by Reuters photographer Mohammad Salem that the world will not forget.",
    date: "October 17, 2023",
    img: col12,
  },
  {
    id: 4,
    title: "A Father Carries His Daughter",
    location: "Gaza City, Palestine",
    desc: "A Palestinian man carries his daughter's body near Al-Shifa Hospital after she was killed by an airstrike. In the midst of war, a father walks with the heaviest burden imaginable — carrying the lifeless body of his own child, a scene that has become tragically familiar in Gaza.",
    date: "October 9, 2024",
    img: col8,
  },
  {
    id: 5,
    title: "Eileen Al-Farra — A Child's Dream Cut Short",
    location: "Khan Younis, Gaza",
    desc: "A heartbreaking farewell to 13-year-old Palestinian girl Eileen Al-Farra, who succumbed to wounds caused by shrapnel from a U.S.-made artillery shell fired by an Israeli tank near Abu Hameed Roundabout in Khan Younis, southern Gaza. She was just a child with simple dreams, but a U.S.-made shell fired by an Israeli tank took her life before she had the chance to grow up.",
    date: "2025",
    img: col4,
  },
  {
    id: 6,
    title: "Muhammad al-Matouq — Starving Under Siege",
    location: "Gaza City, Palestine",
    desc: "Muhammad Zakariya Ayyoub al-Matouq, a child in Gaza City, has a muscle disorder that requires physical therapy and specialized nutrition. He faces life-threatening malnutrition as the humanitarian situation worsens due to ongoing Israeli attacks and the blockade. Having dropped from 9 to 6 kilograms (20 to 13 pounds), he struggles to survive in a tent, a living testament to the collective punishment imposed on over two million people.",
    date: "July 21, 2024",
    img: col10,
  },
  {
    id: 7,
    title: "Grief at Al-Shifa Hospital",
    location: "Gaza City, Palestine",
    desc: "Omar Lafi grieves by the lifeless body of his nephew, who was killed by an airstrike. Another child, another family shattered, another soul added to the endless list of innocent lives taken by Israeli bombardment — a mourning uncle's cries echoing through the halls of a hospital that has seen far too many farewells.",
    date: "October 9, 2024",
    img: col9,
  },
  {
    id: 8,
    title: "Tents Reduced to Rubble in Al-Mawasi",
    location: "Khan Younis, Gaza",
    desc: "With a single Israeli missile, the tents of displaced Palestinians in Al-Mawasi, Khan Younis, were reduced to rubble, leaving around 200 families homeless after their only shelter and belongings were destroyed. The attack also killed a woman and her young daughter, while hundreds of survivors were forced into yet another displacement.",
    date: "2025",
    img: col3,
  },
  {
    id: 9,
    title: "Destroyed Ambulance in Deir el Balah",
    location: "Deir el Balah, Gaza",
    desc: "Palestinian Red Crescent personnel inspect a destroyed ambulance in Deir el Balah, central Gaza Strip. Health infrastructure continues to be a target, crippling an already overwhelmed medical system and denying the wounded the right to emergency care.",
    date: "January 11, 2024",
    img: col5,
  },
  {
    id: 10,
    title: "Injured at al-Ahli Arab Hospital",
    location: "Gaza City, Palestine",
    desc: "People carry a person injured in an Israeli strike at al-Ahli Arab Hospital, also known as the Baptist Hospital, in Gaza City. Hospitals, meant to be safe havens, have become scenes of repeated devastation, with medical staff working beyond capacity to save lives under constant threat.",
    date: "2024",
    img: col6,
  },
  {
    id: 11,
    title: "Al-Shifa Hospital — An Empty Shell",
    location: "Gaza City, Gaza Strip",
    desc: "Palestinians inspect the damage at Al-Shifa Hospital after Israeli forces withdrew following a two-week military operation. The World Health Organization later described the hospital as an 'empty shell' due to the scale of destruction. A medical complex that once saved thousands now stands as a graveyard of what remains of Gaza's shattered healthcare system.",
    date: "April 1, 2024",
    img: col13,
  },
  {
    id: 12,
    title: "Searching Through the Rubble in Khan Younis",
    location: "Khan Younis, Gaza",
    desc: "Palestinians and rescuers search through the rubble in the aftermath of an Israeli strike that hit an administrative building in Khan Younis in the southern Gaza Strip. Amid the dust and destruction, survivors dig through debris with their bare hands, hoping to find loved ones alive beneath the wreckage of yet another targeted civilian structure.",
    date: "2024",
    img: col7,
  },
  {
    id: 13,
    title: "Neighborhoods Reduced to Rubble",
    location: "Gaza City, Gaza Strip",
    desc: "Entire residential neighborhoods in Gaza were left in ruins following extensive Israeli military operations. The destruction displaced thousands of civilians and severely damaged civilian infrastructure. Where homes once stood, now only concrete dust and the memories of families who have lost everything remain.",
    date: "April 2024",
    img: col14,
  },
] as GalleryImage[];
