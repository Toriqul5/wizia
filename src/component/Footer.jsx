import React from "react";

function Footer(){
    return(
        <div className=" bg-[#07292F]  md:flex md:justify-between pl-10 pt-8 pb-10 mt-2 mb-2  pr-10 sm:gap-y-2">

           <div className="bg-transparent flex justify-center">
           <img className="bg-transparent h-5" src="Logo.png" alt="" />
           </div>

           <div className="bg-transparent flex justify-center">
           <p className="text-white bg-transparent text-xs">Copyright © 2023 Wizia. All rights reserved.</p>
           </div>
        </div>
    )
}

export default Footer