
import { TbMenuDeep } from "react-icons/tb";
import { HiChevronRight } from "react-icons/hi";

const Nav=()=>{

    return(
        <div className="mt-1 flex flex-col justify-center md:flex-row ">
                                <p className="text-sm font-normal text-gray-700 flex justify-center text-center ">Get up to 12 months of No Cost EMI◊ plus up to ₹8000.00 instant cashback‡ on selected products with eligible cards.</p>
                                <a href="#" className="text-blue-500 text-sm flex justify-center items-center ">Shop <span className=" mt-1"><HiChevronRight></HiChevronRight></span></a>
                        </div>
    )
}

export default  Nav