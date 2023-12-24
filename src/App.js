import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Home id = "home"/>
      <About id = "about"/>
      <ContactUs id = "contactus"/>
    </div>
  );
}

export default App;
