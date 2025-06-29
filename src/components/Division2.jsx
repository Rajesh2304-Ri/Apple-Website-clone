import image1 from "../assets/div2Image1.jpg"
import image2 from "../assets/div2Image2.jpg"


const SecondDivision = () => {

    return (
        <section className="relative  md:flex  " >
            <div className="space-y-3 text-center bg-cover bg-center h-[75vh]  w-full md:max-w-full m-2 z-10 " style={{ backgroundImage: `url(${image1})` }} >
                <h1 className="text-5xl font-bold text-white pt-9 ">MacBook Pro</h1>
                <p className="text-[20px] font-normal   text-white ">
                    A work of smart

                </p>
                <div >
                    <button className="bg-[#0071E3] text-white px-4 py-2 rounded-full mr-3 hover:bg-blue-400 ">Learn more</button>
                    <button className='text-[#0071E3] border border-[#0071E3] px-5 py-2 rounded-full  hover:bg-[#0071E3]  hover:text-white'> Buy</button>
                </div>
                <div className="absolute top-[430px] left-[35%] md:left-[15%]  ">
                    <span className="text-base bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-transparent bg-clip-text " > Built for Apple Intelligence </span>
                </div>
            </div>


            <div className="  space-y-2 text-center bg-cover bg-center h-[70vh]  w-full   md:max-w-full m-2 md:h-[500px]  " style={{ backgroundImage: `url(${image2})` }} >
                <h1 className="text-5xl font-bold pt-8">iPhone</h1>
                <p className="text-[20px] font-normal">
                    Meet the iPhone 16 family.
                </p>

                <div className="">
                    <button className="bg-[#0071E3] text-white px-4 py-2 rounded-full mr-3 hover:bg-blue-400 ">Learn more</button>
                    <button className='text-[#0071E3] border border-[#0071E3] px-5 py-2 rounded-full  hover:bg-[#0071E3]  hover:text-white'> Shop iPhone</button>
                </div>

                <div >
                    <span className="text-base bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-transparent bg-clip-text  " > Built for Apple Intelligence </span>
                </div>

            </div>




        </section>
    )
}

export default SecondDivision