//React
import { createRoot } from 'react-dom/client'
import React from "react"
import{HashRouter, Routes, Route} from "react-router-dom"
import "./styles.css"
import Home from"./pages/home"
import LinkDrasilPage from "./pages/linkdrasil"
import ConstructionPage from "./pages/construction"

let underconstruction = true

console.info(`Welcome fellow internet explorer! Thanks for dropping by 🙇🏻‍♂️. I built this site using react and three.js! 
If you would like to see more, head over to -> https://github.com/adipoluri/adipoluri.github.io .
If you have any questions or issues let me know @adipoluri`);


function App() {

  if(underconstruction){
    return (
      <>
        <ConstructionPage/>
      </>
    )
  }
  
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
