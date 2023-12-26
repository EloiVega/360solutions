import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Socials = () => {
  return (
    <div className = {` fixed bottom-5 left-1/2 -translate-x-1/2 md:-translate-x-12 md:left-full md:bottom-1/2 md:-tanslate-y-1/2 bg-slate-600 rounded-full flex md:flex-col justify-around transition duration-300 border border-transparent hover:border-orange-500`}>
        <div className = {`w-10 h-10 flex justify-center items-center text-xl rounded-full transition duration-300 border-2 border-transparent hover:border-orange-500/80 hover:scale-150 hover:bg-slate-600 text-sky-400/80 font-bold `}>
        <FontAwesomeIcon icon = {faFacebookF}/>
        </div>
        <div className = {`w-10 h-10 flex justify-center items-center text-xl rounded-full transition duration-300 border-2 border-transparent hover:border-orange-500/80 hover:scale-150 hover:bg-slate-600 text-purple-400/80 font-bold `}>
        <FontAwesomeIcon icon = {faInstagram}/>
        </div>
        <div className = {`w-10 h-10 flex justify-center items-center text-xl rounded-full transition duration-300 border-2 border-transparent hover:border-orange-500/80 hover:scale-150 hover:bg-slate-600 text-green-400/80 font-bold `}>
        <FontAwesomeIcon icon = {faWhatsapp}/>
        </div>
    </div>
  )
}

export default Socials