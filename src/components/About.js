import aboutImage from '../ui/images/aboutus.jpg'

const About = () => {
  return (
    <div id="#about" className='w-full h-80vh flex justify-center'>
        <div className="w-10/12 h-full flex border-black border-solid justify-evenly items-center">
          <div className="w-5/12 h-3/4 flex justify-center items-center border border-orange-300/30 border-4 shadow-xl">
            <img src={aboutImage} alt="" className="w-full h-full" />
          </div>
          <div className="w-5/12 h-3/4 text-left flex flex-col justify-center items-center">
            <h1 className='text-5xl font-bold tracking-wider'>About Us</h1>
            <div id="aboutusdes" className='mt-10 flex flex-col justify-center gap-10 text-2xl'>
              <p>
              We provide virtual assistants that are trained to handle prospects according to your business needs. That includes and is not limited to Real Estate & Solar lead generation, acquisitions, lead closing, generating sales & general assistance
              </p>
              <p>
              we focus on your ROI and how to actually be a supporting function to your overall operations by giving you outsourced callers with indistinguishable accents
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About