import React from 'react'
import landingStyles from './Landing.module.css'
import heroImage from '../ui/images/heroBanner.jpg'

const Home = () => {
  return (
    <div id = "landing" className = "md:pt-20 h-dvh relative">
        {/* Landing Section */}
        <div id = "landing_content" className={`w-full h-full flex flex-col ol:12 md:pl-24 pt-24 bg-gray-800 ${landingStyles.landing}`}>
            {/* content */}
            <div id="landing_content_text" className='w-10/12 xl:w-1/3 h-auto rounded-lg p-10 font-bold text-gray-200 flex flex-col items-start text-left select-none'>
                <p className="text-lg text-orange-400/90 tracking-wide ml-0.5">Your one-stop shop to</p>
                <h1 className='tracking-widest text-5xl text-left leading-extra-loose'>
                    Gurantee Your <br /> <span className='text-orange-500/90'>Deals.</span>
                </h1>
                <p className='mt-8 text-lg ml-0.5'>One platform, endless possibilities. 360 Solutions: Your one-stop shop for virtual assistants who unlock your sales potential.</p>
            </div>

            <div className='ml-10  flex justify-center w-2/3 md:w-96 xl:w-96 h-12 text-orange-200 font-medium rounded-full tracking-wider'>
            <div className='w-1/2 h-12 border border-solid border-orange-100 flex justify-center items-center text-lg xl:text-xl rounded-l-full hover:bg-gray-200 hover:text-orange-800/80 transition'>
                What We Do?
            </div>
            <div className='w-1/2 h-12 bg-orange-500/90 border border-solid border-orange-100 flex justify-center items-center text-white text-lg xl:text-xl rounded-r-full hover:bg-gray-200 hover:text-orange-800/80 transition'>
                Get A Quote!
            </div>
            </div>

        </div>
        {/* Hero Banner */}
        <div className={`absolute top-1/4 left-1/2 w-1/2 h-1/2 -translate-x-20 hidden xl:flex`}>
            <img className='w-full h-full object-contain' src={heroImage} alt="" />
        </div>
    </div>
  )
}

export default Home