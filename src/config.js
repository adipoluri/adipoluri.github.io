import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 9,
  pages: 8,
  zoom: 75,
  mouse: [0, 0],
  z:0,
  palette: {
    textColor:"#ebddc3",
    accentColor:"#b22b27",
    singleColorMode:true,
    ballSingle:61,
    ballMultiple: [2,8,13,14,15,29,50,51, 53, 54, 57, 61, 62, 66, 73, 95, 96] //18
  },
  introduction: {
    offset: 1,
    factor: 1.75,
    header: "hi, i'm adi!",
    image: "/me.jpg",
    aspect: 1.51,
    text: "Currently, I do independent research focused on how we can enable data neutrality on a web dominated by data moats. In my spare time, I create and maintain a number of widely used open-source projects. I’m curious about how we can better incentivize public goods funding, support better interactions with computers and data, and be more responsible stewards of technology. In this era of my life, I’m working towards being someone who is  unabashedly excited and curious about the world."
  },
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 14, factor: 4 },
    { x: 0, offset: 8, pos: new Vector3(), scale: 2.5, factor: 6 }
  ],
  top: createRef(),
  ballCount:50,
}

export default state
