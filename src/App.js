import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Services from './components/Services';
import Plans from './components/Plans';
import Socials from './components/Socials';

function App() {
  return (
    <div className="App select-none">
      <Nav/>
      <Home id = "home"/>
      <About id = "about"/>
      <Services id = "services"/>
      
      <div className='bg-white w-full h-60vh flex items-center justify-center'>
        <h1 className='text-6xl sm:text-8xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-orange-500/80 to-gray-700'>Join Us Now!</h1>
      </div>

      <Plans id = "plans"/>
      <ContactUs id = "contact"/>
      <Socials />
    </div>
  );
}

export default App;
