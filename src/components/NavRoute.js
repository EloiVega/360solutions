import { Link } from "react-router-dom"

const NavRoute = ({value, destination, extraStylings}) => {
  return (
    <Link 
        className={`h-full mx-4 text-bold text-lg font-bold cursor-pointer ${extraStylings}`}
        to = {destination}    
    >
        {value}
    </Link>
  )
}

export default NavRoute;