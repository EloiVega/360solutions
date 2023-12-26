import { Link } from "react-router-dom"

const NavRoute = ({closeModal, value, destination, extraStylings}) => {

  const handleClick = (e) => {
    e.preventDefault();
    if(destination === '') {window.scrollTo(0,0); return;}

    const element = document.querySelector(`#${destination}`);
    const top = element.offsetTop;
    window.scrollTo(0, top-100);

    if(closeModal){
      closeModal();
    }
  }

  return (
    <Link 
        onClick={handleClick}
        className={`select-none h-full mx-4 text-bold text-lg font-bold cursor-pointer hover:text-orange-500 ${extraStylings}`}
        to = {destination}    
    >
        {value}
    </Link>
  )
}

export default NavRoute;