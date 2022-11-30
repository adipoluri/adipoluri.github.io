//React
import { createRoot } from 'react-dom/client'
import React from "react"
import{HashRouter, Routes, Route} from "react-router-dom"
import "./styles.css"
import Home from"./pages/home"
import LinkDrasilPage from "./pages/linkdrasil"

console.info(`Welcome fellow internet explorer! Thanks for visiting. 🙇🏻‍♂️
Let me tell you a bit about this site. . 👀 https://github.com/dannygarcia/dannygarcia.github.com
If you have any questions or issues let me know: @dannygarcia. 😎 My condolences for your GPU. 🙏🏻`);


function App() {
  return (
    <>  
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/linkdrasil' element={<LinkDrasilPage/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />);
