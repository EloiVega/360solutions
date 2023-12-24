import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

const FB = ({className}) => {
  return (
    <div className = {`w-32 h-8 flex items-end cursor-pointer ${className}`}>
          <FontAwesomeIcon icon={faFacebookF} className='text-sky-900 text-3xl'/>
          <span className = "h-5 flex self-end text-lg select-none -translate-y-0.5 text-sky-800 font-bold ">
            acebook
          </span>
      </div>
  )
}

export default FB