import './App.css'
import selfie from "./assets/option-three-small.jpg"
import Bio from './components/Bio'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
function App() {
  return (
    <div className='bio-container'>
      <div className='bio-image-container'>
        <img src={selfie} alt='Korey Moore'></img>
      </div>
      <Bio />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App
