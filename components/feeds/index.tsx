// "use client";

// import Image from "next/image";
import "./style.scss";
import { Icons } from "@/components/icons";
// import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hotels from "@/components/all-hotels";
import Flights from "@/components/all-flights";
import Activities from "@/components/all-activities";

export default function Feeds ()
{
  return (
    <div className="w-full col-span-7 p-5 pb-10 feed custom-scrollbar ">

      <section className="p-3 bg-white rounded">

        <div className="banner relative w-full bg-blue-200 rouned h-[140px]">
          <div className="absolute  bg-[#ffffff42] w-12 h-12 centered left-5 top-5 z-20">
            <Icons.arrow />
          </div>
          <Image src="/bg/banner.svg" alt="" fill objectFit="cover" className="rounded"/>
        </div>

        <div className="flex items-start justify-between w-full mt-5 ">

          <div className="left_content">
            <div className="w-auto space-y-3 trip-details">
              <div className="flex items-center w-[265px] p-2 h-auto bg-[#FEF4E6] gap-1 text-[#7A4504] text-sm font-medium">
                <Icons.calender /> <p className="date">21 March 2024</p> <Icons.arrowRight />  <p className="date">21 March 2024</p>
              </div>

              <h1 className="font-semibold text-2xl text-black tracking-[-2%]">Bahamas Family Trip</h1>

              <p className="text-[#676E7E] font-medium">
                New York, United States of America | Solo Trip
              </p>
            </div>

            <div className="flex items-center w-auto gap-1 mt-4 services">
              <div className={"activity_card p-3 rounded w-[250px] bg-[#000031]"}>
                <p className="font-semibold label">Activities</p>
                <p className="mt-2 text-xs content">Build, personalize, and optimize your itineraries with our trip planner.</p>

                <Button className="w-full mt-6">
                  Add Activities
                </Button>
              </div>

              <div className={"activity_card p-3 rounded w-[250px] bg-[#E7F0FF]"}>
                <p className="font-semibold text-black label">Hotels</p>
                <p className="mt-2 text-xs content text-[#1D2433]">Build, personalize, and optimize your itineraries with our trip planner.</p>

                <Button className="w-full mt-6">
                  Add Hotel
                </Button>
              </div>

              <div className={"activity_card p-3 rounded w-[250px] bg-primary"}>
                <p className="font-semibold label">Flight</p>
                <p className="mt-2 text-xs content">Build, personalize, and optimize your itineraries with our trip planner.</p>

                <Button className="w-full mt-6" variant={"ghost"}>
                  Add Flight
                </Button>
              </div>
            </div>
          </div>

          <div className="text-right right_content">
            <div className="flex items-center gap-1">
              <Button className="bg-[#E7F0FF] w-[160px]">
                <Icons.addUser />
              </Button>

              <Icons.dotsMenu />
            </div>

            <div className="flex justify-end w-full pr-6">
              <Image className="mt-6" src={"/bg/one.svg"} alt="settings" width={108} height={40} />
            </div>

          </div>

        </div>

        {/*  */}

        <main className="w-full mt-12">

          <div className="w-auto space-y-2">
            <h1 className="font-semibold text-black section_title">
              Trip itineraries
            </h1>

            <p className="text-sm font-medium text-[#647995]">
              Your trip itineraries are placed here
            </p>
          </div>

          {/* flights */}
          <Flights />

          {/* hotels */}
          <Hotels />

          {/* flights */}
          <Activities />

        </main>

      </section>

    </div>

  );
}
