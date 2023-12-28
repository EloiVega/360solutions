import CustomPlan from "./CustomPlan"
import Plan from "./plan"

const Plans = ({id}) => {

    const silverPlan = {
        name : "Silver",
        price: "1040",
        content: [
            "professional cold caller",    
            "Quality assurance manager",
            "Account manager ",
            "CRM Setup",
            "Weekly/ Bi-weekly management meetings on demand",
        ],
        popular: false,
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
        ],
        popular: true,
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
            "Build your own / Customize your own package",
        ],
        popular: false,
    }

  return (
    <div id = {id} className='w-full xl:h-100vh pb-10 bg-orange-200/30 flex flex-col justify-evenly items-center'>
        <h1 className='tracking-wider min-h-24 flex justify-center items-center text-4xl sm:text-6xl font-semibold text-gray-700 mb-6 xl:mb-0'>Pricing <span className="text-orange-500/90 ml-5">Plans</span></h1>
        <div className="w-full md:px-5 flex md:grid grid-cols-2 xl:flex flex-col xl:flex-row justify-center items-center gap-6">
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
        <CustomPlan />
    </div>
    
  )
}

export default Plans