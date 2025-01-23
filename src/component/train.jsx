import React from "react";

function Train(){
    return(
        <section className="  bg-transparent ">
            <div className="container mx-auto px-4 py-8 bg-[url('/picture1.png')] bg-cover bg-no-repeat bg-transparent rounded-b-xl">
                <div className="grid grid-flow-row gap-y-5 items-center bg-transparent justify-center">
                <h2 className="text-white font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl bg-transparent">Train your aiDR on your...</h2>
                <h3 className="text-white font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl bg-transparent">prefered email st|</h3>
                <p className="text-white font-bold sm:text-xl md:text-xl lg:text-1xl xl:text-2xl bg-transparent  pt-6 py-10 ">You’re in control. Train your aiDR <br /> on elements of your Marketing strategy.</p>
                </div>

                <div className="md:flex items-center bg-transparent justify-center gap-y-8 gap-6">
                    <div className="flex  bg-transparent gap-3">
                        <img className="w-4 bg-transparent text-white  mt-2 h-4" src="check.svg" alt="" />
                        <p className="text-white bg-transparent font-bold text-[13px] lg:text-xl">Quick to ramp</p>
                    </div>

                    <div className="text-white flex bg-transparent gap-3">
                    <img className="w-4 text-white bg-transparent mt-2 h-4" src="check.svg" alt="" />
                    <p className="text-white bg-transparent font-bold text-[13px] lg:text-xl">Easy to optimize</p>
                    </div>
                </div>

                <div className=" md:flex items-center  bg-transparent justify-center gap-3  pl- lg:pl-10">
                    <div className="flex bg-transparent gap-3">
                        <img className="w-4 text-white bg-transparent mt-2 h-4" src="check.svg" alt="" />
                        <p className="text-white bg-transparent font-bold text-[13px] lg:text-xl">Quick to scale up</p>
                    </div>

                    <div className="text-white bg-transparent flex gap-3">
                    <img className="w-4 text-white bg-transparent mt-2 h-4" src="check.svg" alt="" />
                    <p className="text-white  bg-transparent font-bold  text-[13px] lg:text-xl">Works with all your existing tools</p>
                    </div>
                </div>






            </div>
           
                       
              


        </section>
    )
}
export default Train;
