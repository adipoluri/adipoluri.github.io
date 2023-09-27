import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 9,
  pages: 8,
  zoom: 75,
  mouse: [0, 0],
  z:0,
  introduction: {
    offset: 1,
    factor: 1.75,
    header: "hi, i'm adi!",
    image: "/me.jpg",
    aspect: 1.51,
    text: ""
   },
  experience: {
    offset: 2,
    factor: 1.75,
    header: "Experience",
    aspect: 2.0,
    sections: [
      { employer: "DaoAI Robotics", employerLink:"https://www.daoai.com/", title: "Computer Vision Engineer", duration: "Jan - Aug 2022",technologies: ["C/C++","Python","Pytorch","OpenCV","Docker","MIL","libgit2", "Qt"], description:"<ul><li>Developed and maintained DaoAI Bin Picking software, including new feature development, codebase maintenance, and enhancing existing functionality.</li><li>Designed and implemented the ”Snapshot” version control feature for Bin Picking software using a custom built  C++ API for libgit2.</li><li>Improved computer vision algorithms and routines for the Bin Picking system and developed a DaoAI annotation tool.</li><li>Collaborated with the QA team to identify and resolve bugs</li></ul>"},
      { employer: "ICBC", employerLink:"", title: "RPA Engineer", duration: "May - Aug 2021",technologies: ["Python","SpaCy NLP", "Tesseract OCR", "Flask","SQL","Docker","Linux"], description:"<ul><li>Developed and deployed an end-to-end API for extracting names from documents, which currently processes 4500 documents daily at ICBC.</li><li>Automated internal ICBC processes using BluePrism software.</li><li>Collaborated with senior team members for the maintenance of existing automation solutions.</li><li>Worked in an Agile software development environment, including hosting and contributing to code reviews.</li></ul>"},
      { employer: "picoTera", employerLink:"https://www.picotera.co/", title: "Software Engineer", duration: "Jan - Apr 2021",technologies: ["C","Java","Android","Bluetooth LE","pSoC Creator"], description:"<ul><li>Developed firmware for patented hearing protection devices with Bluetooth Low Energy (BLE) technology.</li><li>Applied Machine Learning techniques to enhance noise cancellation and sound detection capabilities.</li><li>Led the development of various features for the accompanying Android app.</li><li>Implemented rigorous unit testing to meet industry standards and specifications.</li><li>Collaborated with cross-functional teams to deliver a high-quality, user-friendly product.</li></ul>"},
    ]
  },
  projects: {
    header: "Projects",
    sections: [
      { projectName: "The Council", winner:"Hack the North 2023 Winner 🥇", githubLink:"https://github.com/TheTripleA2023/theCouncilApp", ytLink:"",relevantLink: "", devpostLink:"https://devpost.com/software/the-council",technologies: ["NextJS","Three.js","React","OpenAI API","Vercel","Supabase","PostGreSQL"], description:"" },
      { projectName: "NLP Name Recognition Microservice", winner:"", githubLink:"", ytLink:"",relevantLink: "", devpostLink:"",technologies: ["Python","SpaCy NLP","Tesseract OCR","Flask","SQL","Docker"], description:"" },
      { projectName: "Chew Chew", winner:"WaffleHacks 2023 Finalist", githubLink:"https://github.com/HelthGoUp/ChewChew", ytLink:"https://www.youtube.com/watch?v=lZVBrbcwgFo",relevantLink: "", devpostLink:"https://devpost.com/software/chew-chew",technologies: ["React","NodeJS","Firebase","ExpressJS","OpenAI API","Spoonicular API"], description:"" },
      { projectName: "Portfolio Website", winner:"", githubLink:"", ytLink:"",relevantLink: "", devpostLink:"",technologies: ["React","Three.js"], description:"" },
      { projectName: "AI Self Driving Car", winner:"", githubLink:"", ytLink:"",relevantLink: "", devpostLink:"",technologies: ["Python","OpenCV","TensorFlow","AlexNet"], description:"" },
      { projectName: "TidBit", winner:"", githubLink:"https://github.com/adipoluri/tidbit", ytLink:"https://www.youtube.com/watch?v=4z1G7PfPPgA",relevantLink: "", devpostLink:"",technologies: ["PlasmoJS","React","Firebase","OpenAI API"], description:"" },
      { projectName: "[REDACTED]", winner:"", githubLink:"https://github.com/adipoluri/redacted", ytLink:"https://www.youtube.com/watch?v=0CjtybXXuxo",relevantLink: "https://4d1games.itch.io/redacted", devpostLink:"",technologies: ["Unity","C#","Photon Networking","Blender"], description:"" },
      { projectName: "Quizify", winner:"", githubLink:"https://github.com/adipoluri/quizifymusicgame", ytLink:"https://www.youtube.com/watch?v=OIWbxEkIubI",relevantLink: "https://quizifymusicgame.herokuapp.com/", devpostLink:"",technologies: ["NodeJS","SocketIO","HTML/CSS","Spotify API"], description:"" },
      { projectName: "Pixelov", winner:"", githubLink:"", ytLink:"",relevantLink: "", devpostLink:"",technologies: [], description:"" },
      { projectName: "Wordler", winner:"", githubLink:"", ytLink:"",relevantLink: "", devpostLink:"",technologies: [], description:"" },
    ]
  },
  palette: {
    textColor:"#ebddc3",
    accentColor:"#d1c5ad",
    singleColorMode:true,
    ballSingle:61,
    ballMultiple: [2,8,13,14,15,29,50,51, 53, 54, 61, 62, 66, 73, 95, 96] //16
  },
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 },
    { offset: 10.3, color: "#000", height: 12 }
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 14, factor: 4 },
  ],
  top: createRef(),
  ballCount:20,
}

export default state

