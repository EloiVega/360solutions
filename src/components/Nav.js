import { useEffect, useState } from 'react';
import logo from '../ui/icons/logo.png'
import NavRoute from './NavRoute';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

  const [onMobile, setOnMobile] = useState(window.innerWidth <= 768);

  window.addEventListener('resize', () => {
    if(onMobile === window.innerWidth <= 768) return;
    setOnMobile(window.innerWidth <= 768);
  })

  return (
    <div className = "w-full h-20 fixed flex justify-center items-center shadow-md bg-white z-50">
        <div className='w-11/12 xl:w-7/12 h-full flex justify-between items-center'>
          
          {/* Navbar Logo */}
            <div id="logo" className="w-20 h-full flex justify-between items-center">
                <img src={logo} alt="A representation logo for the enterprise" className = {`w-16 h-16`}/>
            </div>

          {/* Navbar Links On WideScreen */}
          {!onMobile && 
            <nav className='w-8/12 xl:w-4/12 flex justify-around items center text-purple-800'>
                <NavRoute value = "Home" destination = "" extraStylings = {` text-orange-600`}/>
                <NavRoute value = "About" destination = "about" extraStylings = {` text-sky-800`}/>
                <NavRoute value = "Services" destination = "services" extraStylings = {` text-sky-800`}/>
                <NavRoute value = "Plans" destination = "plans" extraStylings = {` text-sky-800`}/>
                <NavRoute value = "Contact" destination = "contact" extraStylings = {` text-sky-800`}/>
            </nav>
          }

          {/* Navbar Links On Mobile */}
          {onMobile && 
            <div>
              <FontAwesomeIcon className = "text-2xl" icon = {faBars}/>
              <nav className='w-8/12 xl:w-4/12 flex justify-around items center text-purple-800'>
                  <NavRoute value = "Home" destination = "" extraStylings = {` text-orange-600`}/>
                  <NavRoute value = "About" destination = "about" extraStylings = {` text-sky-800`}/>
                  <NavRoute value = "Services" destination = "services" extraStylings = {` text-sky-800`}/>
                  <NavRoute value = "Plans" destination = "plans" extraStylings = {` text-sky-800`}/>
                  <NavRoute value = "Contact" destination = "contact" extraStylings = {` text-sky-800`}/>
              </nav>
            </div>
          }
        </div>
    </div>
  )
}

export default Nav