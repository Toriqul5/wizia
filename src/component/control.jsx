import React from "react";

function Control() {
    const OfferList = [
        {
            title: "You’re in Control",
            description: "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work..",
            icon: "card1.png",
        },
        {
            title: "Infinitely Scalable",
            description: "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly",
            icon: "card2.png",
        },
        {
            title: "Incredibly Flexible",
            description: "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time..",
            icon: "card3.png",
        },
    ];

    return (
        <section className="space-y-12">
            {/* Offer Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6 mt-4 py-24">
                {OfferList.map((item, i) => (
                    <div
                        key={i}
                        className="flex flex-col bg-transparent items-center p-6 bg-[#07292F] rounded-lg shadow-lg h-full w-full max-w-[300px] mx-auto"
                    >
                        <div className="flex items-center bg-transparent justify-center w-12 h-12 bg-gray-800 rounded-full mb-4">
                            <img className="w-6 h-6 bg-transparent" src={item.icon} alt={item.title} />
                        </div>
                        <h4 className="text-white bg-transparent font-bold text-lg text-center">{item.title}</h4>
                        <p className="text-white bg-transparent text-sm text-center mt-2">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Control;