import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Home id = "home"/>
      <About id = "about"/>
      <Services id = "services"/>
    </div>
  );
}

export default App;
