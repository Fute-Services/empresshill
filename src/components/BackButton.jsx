import { Link } from "react-router-dom"
import { TbArrowBackUpDouble } from "react-icons/tb";
import {useNavigate} from 'react-router-dom'

export default function BackButton() {
    const navigate=useNavigate();
    return (<>
        <div className="absolute top-4 z-20 
        left-3 
         justify-center items-center flex">
            <button onClick={()=>navigate(-1)} className="border border-yellow-700/30 px-4 text-black/70 rounded-full 
            py-4 text-[19px] hover:text-[22px]
             justify-center font-normal cursor-pointer duration-500 ease-in-out 
             items-center flex  bg-gradient-to-b from-[rgb(152,152,149)] to-[rgb(244,244,235)]
             /* Hover Gradient */
               hover:bg-gradient-to-b hover:from-[rgb(243,240,230)] hover:to-[rgb(145,139,120)]
               /* The Glow Effect */
               hover:shadow-lg hover:shadow-yellow-500/50 
               /* Optional: Slight Lift */
               hover:-translate-y-0.5">
               <TbArrowBackUpDouble />
            </button>
        </div>
    </>)
}