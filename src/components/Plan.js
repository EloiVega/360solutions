import styles from './plan.module.css'

const Plan = ({plan}) => {
  return (
    <div className={`w-11/12 md:w-full lg:w-1/4 h-136 p-5 rounded-3xl flex flex-col justify-start items-center bg-white shadow-xl border border-solid border-orange-500 ${plan.popular && "bg-gray-700 text-orange-400"}`}>
        <div className='w-full h-1/6 flex justify-center items-center'>
          <h2 className={`font-bold text-4xl ${plan.popular && "tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-orange-500/80 to-amber-400"} ${plan.name.toLowerCase() === "diamond" && ` ${styles.diamond} tracking-wide text-transparent bg-clip-text`}`}>{plan.name}</h2>
        </div>
        <div className={`w-5/6 text-3xl font-semibold border-solid border-b-2 border-gray-700 rounded-md p-1  ${plan.popular && "border-orange-400 text-white bg-gray-700 text-orange-500/90"}`}>
          <span className={`text-orange-500/90`}>${plan.price} </span>
          /month
        </div>
        <div className = {`text-left w-10/12`}>
          { plan.content && 
            plan.content.map((item,index) => (
              <div key = {`${plan.name}_item${index}`} className = {`text-md py-3 ${index != plan.content.length-1 && "border-b"} border-gray-700  ${plan.popular && "text-white border-white"}`}>
                {item}
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Plan