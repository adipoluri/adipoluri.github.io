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
    text: "Currently, I do independent research focused on how we can enable data neutrality on a web dominated by data moats. In my spare time, I create and maintain a number of widely used open-source projects. I’m curious about how we can better incentivize public goods funding, support better interactions with computers and data, and be more responsible stewards of technology. In this era of my life, I’m working towards being someone who is  unabashedly excited and curious about the world."
  },
  experience: {
    offset: 2,
    factor: 1.75,
    header: "Experience",
    aspect: 2.0,
    sections: [
      { employer: "DaoAI Robotics", employerLink:"https://www.daoai.com/", title: "Computer Vision Engineer", duration: "Jan - Aug 2022", description:"Currently, I do independent research focused on how we can enable data neutrality on a web dominated by data moats. In my spare time, I create and maintain a number of widely used open-source projects. I’m curious about how we can better incentivize public goods funding, support better interactions with computers and data, and be more responsible stewards of technology. In this era of my life, I’m working towards being someone who is  unabashedly excited and curious about the world." },
      { employer: "ICBC",employerLink:"", title: "RPA Engineer", duration: "May - Aug 2021", description:"Currently, I do independent research focused on how we can enable data neutrality on a web dominated by data moats. In my spare time, I create and maintain a number of widely used open-source projects. I’m curious about how we can better incentivize public goods funding, support better interactions with computers and data, and be more responsible stewards of technology. In this era of my life, I’m working towards being someone who is  unabashedly excited and curious about the world." },
      { employer: "picoTera Electronics",employerLink:"https://www.picotera.co/", title: "Firmware Engineer", duration: "Jan - Apr 2021", description:"Currently, I do independent research focused on how we can enable data neutrality on a web dominated by data moats. In my spare time, I create and maintain a number of widely used open-source projects. I’m curious about how we can better incentivize public goods funding, support better interactions with computers and data, and be more responsible stewards of technology. In this era of my life, I’m working towards being someone who is  unabashedly excited and curious about the world." }
    ]
  },
  projects: {
    header: "Projects",
    sections: [
      { projectName: "DaoAI Robotics1", githubLink:"", ytLink:"https://www.youtube.com/",relevantLink: "Computer Vision Engineer", technologies: ["React",  "Styled Components",  "Express", "Spotify API"], description:"Currently, I do independent research focused on how we can enable data neutrality on a web dominated by data moats. In my spare time, I create and maintain a number of widely used open-source projects. I’m curious about how we can better incentivize public goods funding, support better interactions with computers and data, and be more responsible stewards of technology. In this era of my life, I’m working towards being someone who is  unabashedly excited and curious about the world." },
      { projectName: "DaoAI Robotics2", githubLink:"https://www.daoai.com/", ytLink:"https://www.youtube.com/", relevantLink: "Computer Vision Engineer", technologies: ["React",  "Styled Components",  "Express Spotify","API"], description:"Currently, I do independent research focused on how we can enable data neutrality on a web dominated by data moats. In my spare time, I create and maintain a number of widely used open-source projects. I’m curious about how we can better incentivize public goods funding, support better interactions with computers and data, and be more responsible stewards of technology. In this era of my life, I’m working towards being someone who is  unabashedly excited and curious about the world." },
      { projectName: "DaoAI Robotics3", githubLink:"", ytLink:"https://www.youtube.com/",relevantLink: "Computer Vision Engineer", technologies:["React",  "Styled Components",  "Express Spotify","API"], description:"Currently, I do independent research focused on how we can enable data neutrality on a web dominated by data moats. In my spare time, I create and maintain a number of widely used open-source projects. I’m curious about how we can better incentivize public goods funding, support better interactions with computers and data, and be more responsible stewards of technology. In this era of my life, I’m working towards being someone who is  unabashedly excited and curious about the world." },
      { projectName: "DaoAI Robotics4", githubLink:"https://www.daoai.com/", ytLink:"https://www.youtube.com/", relevantLink: "Computer Vision Engineer", technologies: ["React",  "Styled Components",  "Express Spotify","API"], description:"Currently, I do independent research focused on how we can enable data neutrality on a web dominated by data moats. In my spare time, I create and maintain a number of widely used open-source projects. I’m curious about how we can better incentivize public goods funding, support better interactions with computers and data, and be more responsible stewards of technology. In this era of my life, I’m working towards being someone who is  unabashedly excited and curious about the world." },
      { projectName: "DaoAI Robotics5", githubLink:"", ytLink:"https://www.youtube.com/",relevantLink: "Computer Vision Engineer", technologies: ["React",  "Styled Components",  "Express Spotify","API"], description:"Currently, I do independent research focused on how we can enable data neutrality on a web dominated by data moats. In my spare time, I create and maintain a number of widely used open-source projects. I’m curious about how we can better incentivize public goods funding, support better interactions with computers and data, and be more responsible stewards of technology. In this era of my life, I’m working towards being someone who is  unabashedly excited and curious about the world." },
      { projectName: "DaoAI Robotics6", githubLink:"https://www.daoai.com/", ytLink:"https://www.youtube.com/", relevantLink: "Computer Vision Engineer", technologies: ["React",  "Styled Components",  "Express Spotify","API"], description:"Currently, I do independent research focused on how we can enable data neutrality on a web dominated by data moats. In my spare time, I create and maintain a number of widely used open-source projects. I’m curious about how we can better incentivize public goods funding, support better interactions with computers and data, and be more responsible stewards of technology. In this era of my life, I’m working towards being someone who is  unabashedly excited and curious about the world." },
      { projectName: "DaoAI Robotics7", githubLink:"", ytLink:"https://www.youtube.com/",relevantLink: "Computer Vision Engineer", technologies: ["React",  "Styled Components",  "Express Spotify","API"], description:"Currently, I do independent research focused on how we can enable data neutrality on a web dominated by data moats. In my spare time, I create and maintain a number of widely used open-source projects. I’m curious about how we can better incentivize public goods funding, support better interactions with computers and data, and be more responsible stewards of technology. In this era of my life, I’m working towards being someone who is  unabashedly excited and curious about the world." },
      { projectName: "DaoAI Robotics8", githubLink:"https://www.daoai.com/", ytLink:"https://www.youtube.com/", relevantLink: "Computer Vision Engineer", technologies: ["React",  "Styled Components",  "Express Spotify","API"], description:"Currently, I do independent research focused on how we can enable data neutrality on a web dominated by data moats. In my spare time, I create and maintain a number of widely used open-source projects. I’m curious about how we can better incentivize public goods funding, support better interactions with computers and data, and be more responsible stewards of technology. In this era of my life, I’m working towards being someone who is  unabashedly excited and curious about the world." },
      { projectName: "DaoAI Robotics9", githubLink:"https://www.daoai.com/", ytLink:"https://www.youtube.com/", relevantLink: "Computer Vision Engineer", technologies: ["React",  "Styled Components",  "Express Spotify","API"], description:"Currently, I do independent research focused on how we can enable data neutrality on a web dominated by data moats. In my spare time, I create and maintain a number of widely used open-source projects. I’m curious about how we can better incentivize public goods funding, support better interactions with computers and data, and be more responsible stewards of technology. In this era of my life, I’m working towards being someone who is  unabashedly excited and curious about the world." },
      { projectName: "DaoAI Robotics10", githubLink:"https://www.daoai.com/", ytLink:"", relevantLink: "Computer Vision Engineer", technologies: ["React",  "Styled Components",  "Express Spotify","API"], description:"Currently, I do independent research focused on how we can enable data neutrality on a web dominated by data moats. In my spare time, I create and maintain a number of widely used open-source projects. I’m curious about how we can better incentivize public goods funding, support better interactions with computers and data, and be more responsible stewards of technology. In this era of my life, I’m working towards being someone who is  unabashedly excited and curious about the world." }
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
    { offset: 6.3, color: "#000", height: 20 }
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 14, factor: 4 },
  ],
  top: createRef(),
  ballCount:50,
}

export default state
