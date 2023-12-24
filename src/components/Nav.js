import { Routes, Route } from 'react-router-dom';
import logo from '../ui/icons/logo.png'
import About from './About';
import Home from './Home';
import NavRoute from './NavRoute';

const Nav = () => {
  return (
    <div className = "w-full h-20 flex justify-center items-center shadow-md">
        <div className='w-7/12 h-full flex justify-between items-center'>
            <div id="logo" className="w-1/6 h-full flex justify-between items-center">
                <img src={logo} alt="A representation logo for the enterprise" className = {`w-16 h-16`}/>
            </div>
            <nav className='w-4/12 flex justify-around items center text-purple-800'>
                <NavRoute value = "Home" destination = "/" extraStylings = {` text-blue-800`}/>
                <NavRoute value = "About" destination = "/About" extraStylings = {` text-sky-800`}/>
                <NavRoute value = "Contact Us" destination = "/ContactUs" extraStylings = {` text-teal-800`}/>
            </nav>
        </div>
    </div>
  )
}

export default Nav