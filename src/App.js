import './App.css';
import Aboutme from './Components/Aboutme';
import Hero from './Components/Hero';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skillstab from './Components/Skillstab';
import Cards from './Components/Cards';
import Buttons from './Components/Buttons';
import Contpage from './Contpage';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import Homepage from './Components/Homepage';
function App() {
  return (
  <BrowserRouter>
    <div className='bg-blue-950 h-screen mt-0.25' >
      <Routes>
        <Route  path='/' element = {<Homepage/>}/>
        <Route path='Contpage' element = {<Contpage/>}/>
      </Routes>  
    </div>
  </BrowserRouter>
    
  );
}

export default App;
