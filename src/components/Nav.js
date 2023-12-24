import logo from '../ui/icons/logo.png'
import NavRoute from './NavRoute';

const Nav = () => {
  return (
    <div className = "w-full h-20 fixed flex justify-center items-center shadow-md bg-white z-50">
        <div className='w-7/12 h-full flex justify-between items-center'>
          
          {/* Navbar Logo */}
            <div id="logo" className="w-20 h-full flex justify-between items-center">
                <img src={logo} alt="A representation logo for the enterprise" className = {`w-16 h-16`}/>
            </div>

          {/* Navbar Links */}
            <nav className='w-4/12 flex justify-around items center text-purple-800'>
                <NavRoute value = "Home" destination = "#" extraStylings = {` text-blue-800`}/>
                <NavRoute value = "About" destination = "#about" extraStylings = {` text-sky-800`}/>
                <NavRoute value = "Contact Us" destination = "#contactus" extraStylings = {` text-teal-800`}/>
            </nav>
        </div>
    </div>
  )
}

export default Nav