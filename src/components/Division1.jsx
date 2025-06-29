import bgImage from "../assets/deskImage.jpg"
import tabImage from "../assets/tablerDesk.jpg"
import tabImage1 from "../assets/tabletTab.jpg"
import tabImage2 from "../assets/mobileTab.jpg"

const firstDivision= ()=>{

    return(
            <section className="relative  md:flex  " >
            <div className="space-y-3 text-center bg-cover bg-center h-[70vh]  w-full md:max-w-full m-2 " style={{backgroundImage:`url(${bgImage})`}} >
                        <h1 className="text-5xl font-bold pt-2 ">iOS 18</h1>
                        <p className="text-[20px] font-normal pb-4">
                           Personalise your iPhone with<br/>
                            10 new Indian languages 
                        </p>
                    <span className="text-blue-600 text-lg pb-4 hover:opacity-80 hover:underline">Learn More</span>
                       
                     </div>

                  <div className="  space-y-3 text-center bg-cover bg-center h-[70vh]  w-full   md:max-w-full m-2  " style={{backgroundImage:`url(${tabImage})`}} >
                              <h1 className="text-5xl font-bold pt-8">iPad Air</h1>
                              <p className="text-[20px] font-normal">
                                 Now supercharged by the M3 chip.    
                              </p>
                  
                              <div className="">
                                  <button className="bg-[#0071E3] text-white px-4 py-2 rounded-full mr-3 hover:bg-blue-400 ">Learn more</button>
                                  <button className='text-[#0071E3] border border-[#0071E3] px-5 py-2 rounded-full  hover:bg-[#0071E3]  hover:text-white'> Buy</button>
                              </div>
                          
                           </div>
                  
                           <div className="absolute left-44 bottom-7 md:left-[70%]">
                                <span className="text-base bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-transparent bg-clip-text " > Built for Apple Intelligence </span>
                              </div> 

                               
            </section>
    )
}

 export default firstDivision