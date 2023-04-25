import './App.css';
import Aboutme from './Components/Aboutme';
import Hero from './Components/Hero';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skillstab from './Components/Skillstab';
import Cards from './Components/Cards';
import Buttons from './Components/Buttons';
// import Slideshow from './Components/Slideshow';

function App() {
  return (
    <div className='bg-blue-950 h-screen mt-0.25' >
      <Navbar/>
      <Hero/>
      <Aboutme/>
      <Skillstab/>
      {/* <Slideshow/> */}
      <Projects/>
    </div>
  );
}

export default App;
