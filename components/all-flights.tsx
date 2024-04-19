// "use client";

import Image from "next/image";
// import "./style.scss";
// import { Button } from "./ui/button";
import { Button } from "@/components/ui/button";
import { Icons } from "./icons";

const flight_facilities = [
  {
    label: "Baggage: 20kg, Cabin Baggage: 8kg",
    icon: Icons.luggage
  },
  {
    label: "In flight entertainment",
    icon: Icons.tv
  }, {
    label: "In flight meal",
    icon: Icons.meal
  }, {
    label: "USB Port",
    icon: Icons.usb
  },

];

export default function Flights ()
{
  return (

    <section className="w-full flights mt-5 bg-[#F0F2F5] p-3">

      <div className="flex items-center justify-between w-full section_head">

        <div className="flex items-center w-auto gap-2">
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.375 20.25C21.375 20.5484 21.2565 20.8345 21.0455 21.0455C20.8345 21.2565 20.5484 21.375 20.25 21.375H6.75C6.45163 21.375 6.16548 21.2565 5.95451 21.0455C5.74353 20.8345 5.625 20.5484 5.625 20.25C5.625 19.9516 5.74353 19.6655 5.95451 19.4545C6.16548 19.2435 6.45163 19.125 6.75 19.125H20.25C20.5484 19.125 20.8345 19.2435 21.0455 19.4545C21.2565 19.6655 21.375 19.9516 21.375 20.25ZM23.625 12.75V15C23.625 15.2984 23.5065 15.5845 23.2955 15.7955C23.0845 16.0065 22.7984 16.125 22.5 16.125H5.72531C4.83719 16.1291 3.97174 15.8447 3.25925 15.3144C2.54676 14.7842 2.02576 14.0369 1.77469 13.185L0.455626 8.78906C0.371619 8.5092 0.354183 8.21358 0.40471 7.92578C0.455236 7.63798 0.572327 7.36597 0.74664 7.13146C0.920953 6.89695 1.14766 6.70642 1.40868 6.57509C1.6697 6.44375 1.9578 6.37523 2.25 6.375H3C3.29814 6.37502 3.58407 6.49337 3.795 6.70406L5.71875 8.625H7.15031L6.46875 6.5925C6.37482 6.31048 6.34928 6.01016 6.39426 5.71633C6.43923 5.42249 6.55342 5.14356 6.72741 4.90254C6.90139 4.66152 7.13019 4.46533 7.39493 4.33014C7.65966 4.19494 7.95275 4.12463 8.25 4.125H9C9.29813 4.12502 9.58407 4.24337 9.795 4.45406L13.9688 8.625H19.5C20.5936 8.62624 21.6421 9.06124 22.4154 9.83456C23.1888 10.6079 23.6238 11.6564 23.625 12.75ZM21.375 12.75C21.375 12.2527 21.1775 11.7758 20.8258 11.4242C20.4742 11.0725 19.9973 10.875 19.5 10.875H13.5C13.2019 10.875 12.9159 10.7566 12.705 10.5459L8.89031 6.73031L9.77813 9.39469C9.83442 9.56382 9.84973 9.7439 9.82277 9.92011C9.79582 10.0963 9.72739 10.2636 9.62311 10.4082C9.51882 10.5527 9.38168 10.6704 9.22298 10.7516C9.06428 10.8328 8.88857 10.8751 8.71031 10.875H5.25C5.10222 10.8751 4.95586 10.8461 4.8193 10.7897C4.68273 10.7332 4.55862 10.6504 4.45406 10.5459L2.85 8.94L3.92906 12.5391C4.04352 12.9262 4.28051 13.2657 4.60441 13.5066C4.92832 13.7475 5.32165 13.8768 5.72531 13.875H21.375V12.75Z" fill="#344054" />
            </svg>
          </span>
          <h1 className="text-black">
                                    Flights
          </h1>
        </div>

        <div className="btn">
          <Button variant={"ghost"} size={"lg"} className="font-medium">
                                    Add Flights
          </Button>
        </div>
      </div>

      {/*  */}
      <div className="mt-8 space-y-4 rounded">

        {
          [1, 1].map((item, index) => (
            <div key={index} className="flex w-full h-auto  min-h-[265px] relative pr-12 mt-8 bg-white rounded">
              <div className="w-full bg-white main">

                <div className="w-full p-6 border-b flight_details border-border">
                  <div className="flex items-center justify-between gap-4">

                    {/*  */}
                    <div className="flex items-center gap-1">
                      <Icons.bird />
                      <div className="space-y-2">

                        <h1 className="font-semibold text-[#1D2433] text-xl">American Airlines</h1>

                        <div className="flex items-center gap-2">
                          <p className="font-medium text-input-foreground">
                                                                                    AA-829
                          </p>
                          <Button size={"sm"} className="bg-[#0A369D]">
                                                                                    First Class
                          </Button>

                        </div>
                      </div>
                    </div>

                    {/*  */}
                    <div className="flex items-center justify-between gap-5 flight_duration">
                      <div className="space-y-1 text-right">
                        <h1 className="font-semibold text-[#1D2433] text-2xl">08:35</h1>
                        <p className="text-sm font-medium text-input-foreground">
                                                                              Sun, 20 Aug
                        </p>
                      </div>

                      <div className="image">
                        <Image src="/bg/flight-line.svg" alt="" width={300} height={70} />
                      </div>

                      <div className="space-y-1 text-left">
                        <h1 className="font-semibold text-[#1D2433] text-2xl">08:35</h1>
                        <p className="text-sm font-medium text-input-foreground">
                                                                              Sun, 20 Aug
                        </p>
                      </div>

                    </div>

                    {/*  */}
                    <div className="flex items-center flight_price">
                      <Icons.naira />
                      <h1 className="font-semibold text-[#1D2433] text-[28px]">123,450.00</h1>
                    </div>

                  </div>
                </div>

                <div className="w-full p-6 border-b flight_details border-border">
                  <div className="flex items-center gap-4">

                    <p className="font-medium text-input-foreground">
                                                                  Facilities:
                    </p>
                    {
                      flight_facilities.map((item, index) => (
                        <div key={index} className="flex items-center gap-1">
                          <item.icon />
                          <p className="font-medium text-input-foreground">
                            {item.label}
                          </p>
                        </div>
                      ))
                    }

                  </div>
                </div>

                <div className="flex items-center justify-between w-full p-6 flight_details border-border">

                  <div className="flex items-center gap-8">
                    <p className="font-medium text-primary">
                                                                  Flight details
                    </p>

                    <p className="font-medium text-primary">
                                                                  price details
                    </p>

                  </div>

                  <p className="font-medium text-primary">
                                                                  price details
                  </p>
                </div>

              </div>
              <div className="w-12 h-full  absolute right-0 bg-[#FBEAE9] centered rounded-r">
                <Icons.close/>

              </div>

            </div>
          ))
        }
      </div>

    </section>
  );
}

