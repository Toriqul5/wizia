import React from "react";
function Partner() {
    return (
        <section className="p-4 mt-1 mb-6 bg-[#07292F]">

            {/* Header Section */}
            <div className="flex items-center justify-center text-[#0FF1F6] bg-transparent">
                <h5 className="bg-transparent text-center text-lg sm:text-xl">Our Trusted Partners</h5>
            </div>

            {/* Partners Section */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-7 text-[#96ACAF] bg-transparent">
                <p className="font-semibold bg-transparent text-sm sm:text-base">BackHub</p>
                <p className="font-semibold bg-transparent text-sm sm:text-base">CableLabs</p>

                {/* DBC Section */}
                <div className="flex items-center gap-2 text-[#96ACAF] bg-transparent">
                    <img className="w-4 h-4 bg-transparent" src="pic1.png" alt="DBC Logo" />
                    <h1 className="font-bold bg-transparent text-sm sm:text-base">DBC</h1>
                </div>

                {/* EasyEuro Section */}
                <div className="flex items-center gap-2 text-[#96ACAF] bg-transparent">
                    <img className="w-4 h-4 bg-transparent" src="pic2.png" alt="EasyEuro Logo" />
                    <h1 className="bg-transparent text-sm sm:text-base">EasyEuro</h1>
                </div>

                {/* AMD Section */}
                <div className="flex items-center gap-2 text-[#96ACAF] bg-transparent">
                    <h1 className="font-bold bg-transparent text-sm sm:text-base">AMD</h1>
                    <img className="w-5 h-5 bg-transparent" src="pic3.png" alt="AMD Logo" />
                </div>
            </div>
        </section>
    );
}
export default Partner;
