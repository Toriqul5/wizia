import React from "react";

function Dolor() {
    return (
        <section className="flex flex-col justify-between py-16 px-4">

       

       <div className="md:flex justify-between pt-8 hidden">
            <img src="Navigation.png" alt="Left Arrow" className="cursor-pointer" />
            <img src="Group1.png" alt="Right Arrow" className="cursor-pointer" />
        </div>

        <div>
                {/* Content Section */}
                <div className="text-center bg-transparent">
                <img src="picture3.png" alt="Quote Icon" className="mx-auto mb-4 bg-transparent" />
                <p className="text-white text-sm sm:text-base lg:text-lg font-medium max-w-[800px] mx-auto bg-transparent">
                    Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc <br />
                    vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
                <p className="text-[#0FF1F6] text-sm sm:text-base font-semibold mt-4 bg-transparent">
                    John Doe
                </p>
                <p className="text-white text-xs sm:text-sm font-medium bg-transparent">
                    Chief Strategy Officer @ Company
                </p>
            </div>

            {/* Dots Navigation */}
            <div className="flex items-center justify-center mt-6 bg-transparent">
                <img src="Bullets.png" alt="Navigation Dots" className="w-16 sm:w-20 bg-transparent" />
            </div>
        </div>

        </section>
    );
}

export default Dolor;
