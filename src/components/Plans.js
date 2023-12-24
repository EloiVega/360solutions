import Plan from "./Plan"

const Plans = () => {

    const silverPlan = {
        name : "Silver",
        price: "1040",
        content: [
            "professional cold caller",    
            "Quality assurance manager",
            "Account manager ",
            "CRM Setup",
            "Weekly/ Bi-weekly management meetings on demand",
        ]
    }

    const goldPlan = {
        name : "Gold",
        price: "2240",
        content: [
            "professional cold caller", 
            "Professional Acquisition Manager",
            "Quality assurance manager",
            "Account manager ",
            "CRM Setup",
            "Weekly/ Bi-weekly management meetings on demand",
        ]
    }

    const platinumPlan = {
        name : "Diamond",
        price: "4950",
        content: [
            "5 Full professional cold callers",
            "2 Professional Acquisition Manager",
            "Quality assurance manager",
            "Account manager ",
            "CRM Setup ",
            "Weekly/ Bi-weekly management meetings on demand",
            "4th build your own / customize your own package",
        ]
    }

  return (
        <div className='w-full lg:h-100vh pb-10 bg-orange-200/30 flex flex-col justify-evenly items-center'>
        <h1 className='tracking-wider min-h-24 flex justify-center items-center text-6xl font-semibold text-gray-700 mb-6 xl:mb-0'>Pricing <span className="text-orange-500/90 ml-5">Plans</span></h1>
        <div className="w-full md:px-5 flex md:grid grid-cols-2 lg:flex flex-col lg:flex-row justify-center items-center gap-6">
            <Plan 
                plan = { silverPlan } 
            />
            <Plan 
                plan = { goldPlan }
            />
            <Plan
                plan = { platinumPlan }
            />
        </div>
    </div>
    
  )
}

export default Plans