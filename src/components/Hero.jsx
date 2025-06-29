import desktopImage from "../assets/Desktop_mac_for_students.jpg"


const Hero= ()=>{

    return(
            <section className="  overflow-hidden h-[70vh] " >
            <div className="relative  text-center h-44   ">
            <img className="bg-cover bg-center  mt-28 md:mt-36 w-full md: h-60 " style={{transform:'scale(2)'}} src={desktopImage} alt="Mac for Students"/> 
            
            <div className="absolute   w-full mt-10">
                <button className="text-black bg-white rounded-3xl px-6 py-2   ">Learn more</button>
                </div> 
            
                </div>
            
            
            </section>
    )
}

 export default Hero