import { Link } from "react-router-dom"

const NavRoute = ({closeModal, value, destination, extraStylings}) => {

  const handleClick = (e) => {
    e.preventDefault();
    if(closeModal){
      closeModal();
    }
    if(destination === '') {window.scrollTo(0,0); return;}

    const element = document.querySelector(`#${destination}`);
    const top = element.offsetTop;
    window.scrollTo(0, top-100);

  }

  return (
    <Link 
        onClick={handleClick}
        className={`select-none h-full mx-4 transition duration-300  text-bold text-lg font-bold cursor-pointer hover:text-orange-500 ${extraStylings}`}
        to = {destination}    
    >
        {value}
    </Link>
  )
}

export default NavRoute;