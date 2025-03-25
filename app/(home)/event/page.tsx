import React from "react";
import { eventDummyData } from "./dummyData";
import { HtruncateText } from "@/lib/utils";

export default function Page() {
  const text =
    "Elevate & Connect: Monthly Virtual Networking Meet-Up For Our Great And Outstanding Events. Join Us For This Experience";
  return (
    <div className="w-full min-h-screen flex justify-center ">
      <div className="h-auto w-full lg:w-[60rem] mt-[4rem] mb-[4rem] flex flex-col gap-[1rem]">
        <h2 className="font-bold text-[1.4rem] pl-4">Events At Bug Hunters</h2>

        <div className="w-full h-auto flex gap-[2rem] flex-wrap justify-center lg:justify-start">
          {eventDummyData.map((event) => (
            <div
              key={event.id}
              className="max-w-[18rem] h-[24rem] flex flex-col "
            >
              <div className="w-full h-[10rem]">
                <img
                  src={event.img}
                  alt="img"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1  flex flex-col gap-[0.5rem] p-2">
                <button className="p-[0.2rem] rounded-md font-semibold bg-gray-700 w-fit">
                  {event.cta}
                </button>

                <p className="font-semibold">{HtruncateText(text, 106)}</p>

                <p className="text-sm">{event.date}</p>

                <p className="text text-sm">{event.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
