import { useEffect, useState } from 'react';
import logo from '../ui/icons/logo.png'
import NavRoute from './NavRoute';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

  const [onMobile, setOnMobile] = useState(window.innerWidth <= 768);
  const [showNavList, setShowNavList] = useState(false);
  const mobileStyles = "py-2 hover:translate-y-0.5 transition duration-300 text-orange-600 border-b border-gray-300 rounded-lg hover:shadow-md";

  const closeModal = () => {
    setShowNavList((prev) => !prev);
  }

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
              <FontAwesomeIcon onClick={() => {setShowNavList((prev) => !prev)}} className = "text-2xl transition duration-300 hover:scale-125" icon = {faBars}/>
                <nav className={`${showNavList? 'flex':'hidden'} fixed py-3 w-11/12 left-1/2 -translate-x-1/2 top-24 bg-white xl:w-4/12 flex-col justify-around items center text-purple-800 rounded-xl`}>
                    <NavRoute closeModal = {closeModal} value = "Home" destination = "" extraStylings = {`text-orange-600 ${mobileStyles}`}/>
                    <NavRoute closeModal = {closeModal} value = "About" destination = "about" extraStylings = {`text-sky-800 ${mobileStyles}`}/>
                    <NavRoute closeModal = {closeModal} value = "Services" destination = "services" extraStylings = {`text-sky-800 ${mobileStyles}`}/>
                    <NavRoute closeModal = {closeModal} value = "Plans" destination = "plans" extraStylings = {`text-sky-800 ${mobileStyles}`}/>
                    <NavRoute closeModal = {closeModal} value = "Contact" destination = "contact" extraStylings = {`text-sky-800 ${mobileStyles}`}/>
                </nav>
            </div>
          }
        </div>
    </div>
  )
}

export default Nav