import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import AboutSection from './Components/AboutSection'
import ServiceSection from './Components/ServiceSection'
import ToursSection from './Components/ToursSection'
import FooterSection from './Components/FooterSection'

const root = ReactDOM.createRoot(document.getElementById('root'))
const Page = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <AboutSection />
      <ServiceSection />
      <ToursSection />
      <FooterSection />
    </React.Fragment>
  )
}
root.render(<Page />)
