import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero_Banner from './Components/Hero_Banner.jsx'
import Partner_Section from './Components/Partner_Section.jsx'
import Value_Section from './Components/Value_Section.jsx'
import Testimonial_Section from './Components/Testimonial_Section.jsx'
import Trial_Section from './Components/Trial_Section.jsx'
import Test from './Test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Hero_Banner />
    <Partner_Section />
    <Value_Section />
    <Testimonial_Section />
    <Trial_Section />
    {/* <Test /> */}
  </StrictMode>,
)
