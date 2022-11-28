//React
import { createRoot } from 'react-dom/client'
import React from "react"

import "./styles.css"
import Home from"./pages/home"
import { Html} from "@react-three/drei"

console.info(`Welcome fellow internet explorer! Thanks for visiting. 🙇🏻‍♂️
Let me tell you a bit about this site. . 👀 https://github.com/dannygarcia/dannygarcia.github.com
If you have any questions or issues let me know: @dannygarcia. 😎 My condolences for your GPU. 🙏🏻`);


function App() {
  return (
    <>
        <Home />
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />);
