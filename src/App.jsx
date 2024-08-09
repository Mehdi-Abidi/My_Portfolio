import React from 'react'
import Navbar from './Components/Header/Navbar'
import Home from './Components/Content/Home';
import About from './Components/Content/About'; 
import Education from './Components/Content/Education'; 
import Techstack from './Components/Content/TechStack';
import Projects from './Components/Content/Projects';
import Contact from './Components/Content/Contact';
import Footer from './Components/Footer/Footer'
import { useEffect, useState } from 'react'
import { BallTriangle } from 'react-loader-spinner'

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])


  return (
    <>
      {loading ?
        <div className="dark:bg-[#161616] h-[100vh] flex justify-center items-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#a3e635"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>

        :

        <>
          <Navbar />
          <Home />
          <About />
          <Education />
          <Techstack />
          <Projects />
          <Contact />
          <Footer />
        </>}

    </>
  )
}

export default App