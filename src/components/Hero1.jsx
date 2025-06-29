import image from "../assets/hero_macbook_.jpg"


const Macbook= ()=>{

    return(
       <section className="relative z-10 mt-4" >
        <div className="space-y-3 text-center bg-cover bg-center h-[70vh]  w-full md:max-w-full " style={{backgroundImage:`url(${image})`}} >
            <h1 className="text-5xl font-bold pt-8">MacBook Air</h1>
            <p className="text-[20px] font-semibold">
                Sky blue colour<br/>
                Sky high performence with M4.
            </p>

            <div className="">
                <button className="bg-[#0071E3] text-white px-4 py-2 rounded-full mr-3 hover:bg-blue-400">Learn more</button>
                <button className='text-[#0071E3] border border-[#0071E3] px-5 py-2 rounded-full  hover:bg-[#0071E3]  hover:text-white'> Buy</button>
            </div>
        
         </div>

         <div className="absolute left-44 bottom-7 md:left-[42%]">
              <span className="text-xl bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-transparent bg-clip-text " > Built for Apple Intelligence </span>
            </div>

       </section>
    )
}

 export default Macbook