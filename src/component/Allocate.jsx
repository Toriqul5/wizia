import React from "react";

function Allocate() {
  const AllocateList = [
    {
      title: "32%",
      a: "Improvement in Open Rates",
    },
    {
      title: "75%",
      a: "Improvement in Ramp Time",
    },
    {
      title: "35%",
      a: "Improvement in Meetings Booked",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8 bg-[url('/picture5.png')] bg-cover bg-no-repeat bg-transparent rounded-b-xl">
      <div className="bg-transparent p-6 ">
        <div className="text-start mb-8 bg-transparent">
          <h3 className="text-white text-lg md:text-xl lg:text-2xl font-semibold bg-transparent">
            Allocate effort where your reps make an impact.
          </h3>
          <h5 className="text-[#0FF1F6] font-bold italic text-sm md:text-lg lg:text-xl mt-2 bg-transparent">
            Let us handle the rest.
          </h5>
          <p className="text-white text-xs md:text-sm mt-4 bg-transparent">
            Keep your reps “in the air” — out in the field and <br />
            on the phone where they can build relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start bg-transparent">
          {AllocateList.map((item, i) => (
            <div key={i} className="bg-transparent text-left p-2">
              <h4 className="text-[#0FF1F6] text-lg md:text-xl lg:text-2xl font-bold bg-transparent">
                {item.title}
              </h4>
              <p className="text-white text-[10px] md:text-sm mt-2 w-28 bg-transparent">{item.a}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Allocate;
