import { Link } from "react-router-dom"

const NavRoute = ({value, destination, extraStylings}) => {

  const handleClick = (e) => {
    e.preventDefault();
    if(destination === '') {window.scrollTo(0,0); return;}

    const element = document.querySelector(`#${destination}`);
    const top = element.offsetTop;
    window.scrollTo(0, top-100);
  }

  return (
    <Link 
        onClick={handleClick}
        className={`h-full mx-4 text-bold text-lg font-bold cursor-pointer ${extraStylings}`}
        to = {destination}    
    >
        {value}
    </Link>
  )
}

export default NavRoute;