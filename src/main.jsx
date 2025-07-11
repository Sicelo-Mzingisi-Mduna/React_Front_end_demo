import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero_Banner from './Components/Hero_Banner.jsx'
import Partner_Section from './Components/Partner_Section.jsx'
import Value_Section from './Components/Value_Section.jsx'
import Testimonial_Section from './Components/Testimonial_Section.jsx'
import Trial_Section_v1 from './Components/Trial_Section_v1.jsx'
import Trial_Section_v2 from './Components/Trial_Section_v2.jsx'
import Solutions_Section from './Components/Solutions_Section.jsx'
import FAQ_Section_Body from './Components/FAQ_Section_Body.jsx'
import Nav_Bar from './Components/Nav_Bar.jsx'
import Test from './Test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Hero_Banner />
    <Partner_Section />
    <Value_Section />
    <Testimonial_Section />
    <h3>************ Trial Section_v1 ******** start *******</h3>
    <p>No background gradient on Buttons</p>
    <Trial_Section_v1 />
    <h3>************ Trial Section_v1 ******** end *******</h3>
    <h3>************ Trial Section_v2 ******** start *******</h3>
    <p>has background gradient on Buttons </p>
    <Trial_Section_v2 />
    <h3>************ Trial Section_v2 ******** end *******</h3>
    <Solutions_Section />
    <FAQ_Section_Body /> */}

    {/* <Nav_Bar /> */}

    {/* -------------------TEST -------- */}

    <Test />
  </StrictMode>,
)
