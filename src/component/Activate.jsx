import React from "react";

function Activate() {
    return (
        <section>
            <div className="text-center p-6  ">
                {/* Heading Section */}
                <p className="text-[#0FF1F6] font-bold text-lg">GET STARTED</p>
                <h3 className="text-2xl font-extrabold text-white my-4">
                    Embrace the new era of outbound.
                </h3>

                {/* Description Section */}
                <p className="text-white  mb-6">
                    Wizia lets you train, activate, and optimize aiDRs. <br />
                    Take your outbound to new levels of performance and efficiency.
                </p>

                <div className="flex justify-center">
                    <button className="bg-[#0FF1F6]  py-2 px-4 rounded-full flex items-center justify-center">
                        Sign Up for the Beta
                        <img className="ml-2 w-4 h-4 bg-transparent " src="small.png" alt="Beta Signup" />
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Activate;
