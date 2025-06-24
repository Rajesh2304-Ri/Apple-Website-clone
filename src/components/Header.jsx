import headerImage from "../assets/hero_bts_2025__kjxalx8t7ia2_large.jpg"
const Header= ()=>{

    return(
           <header >
            <div className="bg-cover bg-center  mt-2 flex flex-col justify-center items-center" style={{
                backgroundImage:`url(${headerImage})`,
                height:590,    }}>

            <div className="text-white w-full flex flex-col items-center ">
                 <h1 className="text-4xl leading-none font-bold bg-[#007AFF] p-4 px-4  w-60 relative " style={{borderRadius:40} }>Buy Mac or iPad for college
                     <img className="w-32 h-24  absolute -top-6 -right-10 z-10" src="https://www.apple.com/v/home/cf/images/heroes/bts-2025/hero_sticker_mba__b0ht7774wpaq_large_2x.png" alt="laptop" />
                <img  className="w-20 h-24 absolute top-14 -right-10" src="https://www.apple.com/v/home/cf/images/heroes/bts-2025/hero_sticker_ipadair__bk6ffplndvte_large_2x.png" alt=""/>
                 </h1>
                <div className="text-xl font-semibold bg-[#007AFF] mt-2 p-1 w-60 rounded-full">with education savings</div>
                <div className="text-3xl font-bold bg-[#007AFF]  mt-5 p-4 w-60   " style={{borderRadius:40, borderBottomRightRadius:0}}>Choose AirPods or any eligible Accessory</div>
                 <button className="bg-transparent border border-[#007AFF]  text-xl text-[#007AFF]  mt-10 px-4 py-2 rounded-3xl" >Shop</button>
                
                
            </div>
            </div>
          
           </header>
    )
}

 export default Header