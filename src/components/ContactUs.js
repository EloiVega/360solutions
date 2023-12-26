import React, { useRef, useState } from 'react'
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ContactUs = ({id}) => {

  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [isMessageFocused, setIsMessageFocused] = useState(false);

  const nameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const messageRef = useRef()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsPhoneValid(phone.length === 11);
    setIsNameValid(name.length > 0);
    setIsEmailValid(email.length > 0);

    if( !isPhoneValid || !isNameValid || !isEmailValid ) return;

    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    
  }

  // resets form inputs' focus when clicked outside
  document.body.addEventListener('click', () => {
    setIsNameFocused(false);
    setIsEmailFocused(false);
    setIsPhoneFocused(false);
    setIsMessageFocused(false);
  }, true); 

  return (
    <div id = {id} className='w-full min-h-80vh sm:px-10 py-10 flex flex-col items-center gap-10'>
      <h1 className='text-4xl sm:text-6xl font-semibold tracking-wider'>Get In Touch</h1>
      <div className=" w-11/12 sm:w-10/12 lg:w-1/2 h-5/6 p-2 bg-orange-100/70 rounded-2xl shadow-xl">
        <form  onSubmit={handleSubmit} className="w-full h-full px-4 sm:px-10 py-14 bg-white">
          {/* Name Handling */}
          <label className={`flex relative font-semibold transition duration-100 ${isNameFocused? `text-slate-700`: `text-gray-500`}`} htmlFor="name"> Name </label>
          <div className={`flex justify-start items-center w-full rounded-md border-2 transition duration-100 ${isNameFocused? `border-gray-500`: `border-gray-300`}`}>
            <span className='w-10' id="nameIcon">
              <FontAwesomeIcon icon = {faUser} className='text-gray-400' />
            </span>
            <input 
              ref = {nameRef}
              value = {name}
              onChange = {(e) => setName(e.target.value)}
              type = "text" 
              placeholder = { name === ''? `Your Name`: name} 
              className='appearance-none rounded w-full py-2 text-gray-700 bg-transparent leading-tight focus:outline-none focus:shadow-outline tracking-wider'
              onClick={() => {setIsNameFocused(true);}}
              />
          </div>
          {!isNameValid && <div className='flex text-red-600/80 tracking-wide'>Please enter a Name!</div>}
          {/* Email Handling */}
          <label className={`flex mt-4 items-start relative font-semibold transition duration-100 ${isEmailFocused? `text-slate-700`: `text-gray-500`}`} htmlFor="email"> Email </label>
          <div className={`flex justify-start items-center w-full rounded-md border-2 transition duration-100 ${isEmailFocused? `border-gray-500`: `border-gray-300`}`}>
            <span className='w-10' id="nameIcon">
              <FontAwesomeIcon icon = {faEnvelope} className='text-gray-400' />
            </span>
            <input 
              ref = {emailRef}
              value = {email}
              onChange = {(e) => setEmail(e.target.value)}
              type = "email" 
              placeholder = { email === ''? `Your Email`: email} 
              className='appearance-none rounded w-full py-2 text-gray-700 bg-transparent leading-tight focus:outline-none focus:shadow-outline tracking-wider'
              onClick={() => {setIsEmailFocused(true);}}
              />
          </div>
          {!isEmailValid && <div className='flex text-red-600/80 tracking-wide'>Please enter a valid Email!</div>}

          {/* Phone Number Handling */}
          <label className={`flex mt-4 items-start relative font-semibold transition duration-100 ${isPhoneFocused? `text-slate-700`: `text-gray-500`}`} htmlFor="phone"> Phone Number </label>
          <div className={`flex justify-start items-center w-full rounded-md border-2 transition duration-100 ${isPhoneFocused? `border-gray-500`: `border-gray-300`}`}>
            <span className='w-10' id="nameIcon">
              <FontAwesomeIcon icon = {faPhone} className='text-gray-400' />
            </span>
            <input 
              ref = {phoneRef}
              value = {phone}
              onChange = {(e) => setPhone(e.target.value)}
              type = "text" 
              placeholder = { phone === ''? `Your Phone Number`: phone} 
              className='appearance-none rounded w-full py-2 text-gray-700 bg-transparent leading-tight focus:outline-none focus:shadow-outline tracking-wider'
              onClick={() => {setIsPhoneFocused(true);}}
              />
          </div>
          {!isPhoneValid && <div className='flex text-red-600/80 tracking-wide'>Please enter a valid phone number!</div>}

          {/* Message Handling */}
          <label className={`flex mt-4 items-start relative font-semibold transition duration-100 ${isMessageFocused? `text-slate-700`: `text-gray-500`}`} htmlFor="phone"> Message </label>
          <div className={`flex justify-start items-center w-full rounded-md border-2 transition duration-100 ${isMessageFocused? `border-gray-500`: `border-gray-300`}`}>
            <textarea
              ref = {messageRef}
              value = {message}
              onChange = {(e) => setMessage(e.target.value)}
              placeholder = { message === ''? `Your Message`: message} 
              className='appearance-none rounded w-full h-32 p-2 text-gray-700 bg-transparent leading-tight focus:outline-none focus:shadow-outline tracking-wider'
              onClick={() => {setIsMessageFocused(true);}}
              />
          </div>

          <button type="submit" className='rounded-lg w-2/3 h-16 bg-orange-500/70 p-2 text-gray-700 font-bold mt-10'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs