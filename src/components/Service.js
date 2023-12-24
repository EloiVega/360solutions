import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Service = ({mainText, icon, description}) => {
  return (
    <div className={`w-11/12 md:w-full lg:w-1/4 min-h-80 py-5 rounded-3xl flex flex-col justify-start items-center bg-white shadow-xl`}>
        <div className="flex justify-center items-center w-full h-1/4 text-4xl">
            <FontAwesomeIcon className = "p-5 bg-slate-800 rounded-3xl text-orange-200 mb-3" icon = {icon}/>
        </div>
        <div className="w-11/12 h-3/4">
            <h1 className="font-semibold text-xl text-orange-500 tracking-wide mb-3">{mainText}</h1>
            <p className="font-medium">{description}</p>
        </div>
    </div>
  )
}

export default Service