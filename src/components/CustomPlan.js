import React, { useState } from 'react'
import { PopupButton } from 'react-calendly'

const CustomPlan = () => {
  // const [showPopUp, setShowPopUp] = useState(false);

  // document.body.addEventListener('click', () => {
  //   setShowPopUp(false);
  // }, true); 

  return (
    <div id = "customPlan" className='w-96 h-48 mt-10 rounded-xl flex flex-col justify-center items-center bg-white/30 border border-orange-700 text-gray-800 transition duration-300 hover:scale-110'>
      <h1 className="font-bold text-3xl tracking-wide">Customize Your Plan</h1>
      <p className='text-gray-600 tracking-wide font-semibold mt-1'>Plans Fully Customized To Your Needs</p>
      <div className='text-xl font-bold w-3/4 mt-3 tracking-wide p-2 bg-orange-500/80 rounded-lg cursor-pointer'>
        <PopupButton
          url="https://calendly.com/admin-ewu/30min?background_color=ffc8aa&text_color=202836"
          /*
          * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
          * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
          */
          rootElement={document.getElementById("root")}
          text="Contact Us!"
        />
      </div>
    </div>
  )
}

export default CustomPlan