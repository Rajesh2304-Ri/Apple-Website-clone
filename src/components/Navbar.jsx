import { FaApple, FaSearch } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const appleProducts = [
        {
                productName: "Store",
                href: "#",
        },
        {
                productName: "Mac",
                href: "#",
        },
        {
                productName: "iPad",
                href: "#",
        },
        {
                productName: "Watch",
                href: "#",
        },
        {
                productName: "AirPods",
                href: "#",
        },
        {
                productName: "Tv&Home",
                href: "#",
        },
        {
                productName: "Entertainment",
                href: "#",
        },
        {
                productName: "Accessories",
                href: "#",
        },
        {
                productName: "store",
                href: "#",
        },
        {
                productName: "Support",
                href: "#",
        },

]


const Navbar = () => {

        return (
                <nav className=" overflow-hidden flex flex-col justify-center items-center font-medium relative">
                        
                                <ul className=" space-x-11 text-xs  p-4  flex justify-center  items-center text-gray-500   " >
                                        <li className="sticky left-3"><a href="#" className=" text-lg text-black  http://localhost:5173/ "><FaApple /></a></li>
                                        {
                                                appleProducts.map((item, index) => (
                                                        <li key={index}><a href={item.href} className="  hover:text-black hidden  lg:block" >{item.productName}</a></li>

                                                ))
                                        }

                                        <li className="sticky right-10  "><a href="#" className="text-black text-lg"><CiSearch /></a></li>
                                        <li className="sticky right-1"><a href="#" className="text-black text-lg  "><IoBagOutline /></a></li>

                                </ul>

                        

                        
                </nav>
        )
}

export default Navbar