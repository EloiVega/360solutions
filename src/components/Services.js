import React from 'react'
import Service from './Service'
import { faPhone, faHandshake, faHeadset } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
    <div className='w-full  lg:h-60vh py-10 lg:py-0 bg-orange-200/30 flex flex-col justify-evenly items-center'>
        <h1 className='text-6xl font-semibold text-gray-700 mb-6 xl:mb-0'>Our Services</h1>
        <div className="w-full md:w-11/12 flex md:grid grid-cols-2 lg:flex flex-col lg:flex-row justify-center items-center gap-6">
            <Service 
                mainText = "Commercial Cold Calling" 
                description = "Virtual agents that are specialized in lead generation and prospecting residents with intent to sell their properties. Suited for companies and individuals looking for outbound lead generation and off market opportunities" 
                icon = {faPhone}
            />
            <Service 
                mainText = "Resedential Cold Calling" 
                description = "We provide closers that are qualified to follow up on your leads and take it to the finish line resulting in an increase in your Contracts/Listings/Product Sales" 
                icon = {faHeadset}
            />
            <Service 
                mainText = "Acquisitions" 
                description = "Trained personnel that possess knowledge when it comes to the commercial side. Key merits our agents have are holding up conversations with business owners and extracting needed information that would help push the lead further" 
                icon = {faHandshake}
            />
        </div>
    </div>
  )
}

export default Services