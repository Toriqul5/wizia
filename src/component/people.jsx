import React from "react";
import { Button } from "@heroui/button";

function People() {
    return (
        <section className="flex flex-col-reverse bg-[url(pic4.png)] bg-cover sm:flex-row gap-6 lg:gap-8 h-auto sm:h-[500px] justify-between items-center w-full p-4">
            {/* Text Section */}
            <div className="space-y-3 sm:space-y-6 sm:w-1/2 sm:ml-10 sm:mt-10 bg-transparent text-center sm:text-left">
                <h5 className="bg-transparent text-white text-lg">AI SDRs (aiDRs)</h5>
                <h2 className="font-bold bg-transparent leading-tight text-2xl text-white lg:text-3xl">
                    More leads, less people.
                </h2>
                <p className="text-white bg-transparent text-sm lg:text-base max-w-full sm:max-w-[420px] mx-auto sm:mx-0">
                    Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.
                </p>

                <div className="space-y-2 bg-transparent">
                    <Button variant='solid' color='primary' className="bg-[#0FF1F6] text-black" radius='full'>Sign up for the beta</Button>
                </div>
            </div>

            {/* Optional Image or Placeholder Section */}
            <div className="sm:w-1/2 w-full flex justify-center items-center">
            
            </div>
        </section>
    );
}

export default People;
