import React, { useEffect } from 'react'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contract from './pages/Contract'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

export default function App() {
  function loadTheLandingPage() {
    return (
      <>
        <Header />
        <Home />
        <About />
        <Projects />
        <Contract />
        <Contact />
        <Footer />
      </>
      
      
    )
  }
  useEffect(() => {
    loadTheLandingPage()
  }, [])

  return (
    <>
      {loadTheLandingPage()}
    </>
  )

}
