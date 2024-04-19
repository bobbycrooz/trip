// "use client";

// import "./style.scss";
// import { Button } from "./ui/button";
import { Button } from "@/components/ui/button";
import { Icons } from "./icons";
import Image from "next/image";

export default function Activities ()
{
  return (

    <section className="w-full p-3 mt-5 flights bg-primary">

      <div className="flex items-center justify-between w-full section_head">

        <div className="flex items-center w-auto gap-2">
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.3018 18.9806C22.0417 19.1268 21.7342 19.1637 21.4469 19.0832C21.1597 19.0027 20.9161 18.8113 20.7699 18.5513L14.3443 7.125H13.1256V7.5C13.1256 7.79837 13.007 8.08452 12.796 8.2955C12.5851 8.50647 12.2989 8.625 12.0006 8.625C11.7022 8.625 11.416 8.50647 11.2051 8.2955C10.9941 8.08452 10.8756 7.79837 10.8756 7.5V7.125H9.6568L3.23118 18.5513C3.15961 18.6816 3.06292 18.7964 2.9467 18.8891C2.83048 18.9818 2.69704 19.0506 2.55408 19.0914C2.41113 19.1322 2.2615 19.1443 2.11385 19.127C1.96619 19.1096 1.82344 19.0632 1.69384 18.9903C1.56424 18.9175 1.45037 18.8197 1.35881 18.7025C1.26724 18.5854 1.1998 18.4513 1.16038 18.308C1.12096 18.1646 1.11035 18.0149 1.12915 17.8674C1.14795 17.7199 1.1958 17.5776 1.26993 17.4487L7.0768 7.125H2.25055C1.95218 7.125 1.66604 7.00647 1.45506 6.7955C1.24408 6.58452 1.12555 6.29837 1.12555 6C1.12555 5.70163 1.24408 5.41548 1.45506 5.2045C1.66604 4.99353 1.95218 4.875 2.25055 4.875H21.7506C22.0489 4.875 22.3351 4.99353 22.546 5.2045C22.757 5.41548 22.8756 5.70163 22.8756 6C22.8756 6.29837 22.757 6.58452 22.546 6.7955C22.3351 7.00647 22.0489 7.125 21.7506 7.125H16.9243L22.7312 17.4487C22.8774 17.7088 22.9143 18.0163 22.8337 18.3036C22.7532 18.5909 22.5619 18.8344 22.3018 18.9806ZM12.0006 10.125C11.7022 10.125 11.416 10.2435 11.2051 10.4545C10.9941 10.6655 10.8756 10.9516 10.8756 11.25V12.75C10.8756 13.0484 10.9941 13.3345 11.2051 13.5455C11.416 13.7565 11.7022 13.875 12.0006 13.875C12.2989 13.875 12.5851 13.7565 12.796 13.5455C13.007 13.3345 13.1256 13.0484 13.1256 12.75V11.25C13.1256 10.9516 13.007 10.6655 12.796 10.4545C12.5851 10.2435 12.2989 10.125 12.0006 10.125ZM12.0006 15.375C11.7022 15.375 11.416 15.4935 11.2051 15.7045C10.9941 15.9155 10.8756 16.2016 10.8756 16.5V18C10.8756 18.2984 10.9941 18.5845 11.2051 18.7955C11.416 19.0065 11.7022 19.125 12.0006 19.125C12.2989 19.125 12.5851 19.0065 12.796 18.7955C13.007 18.5845 13.1256 18.2984 13.1256 18V16.5C13.1256 16.2016 13.007 15.9155 12.796 15.7045C12.5851 15.4935 12.2989 15.375 12.0006 15.375Z" fill="#F9FAFB"/>
            </svg>

          </span>
          <h1 className="text-white">
          Activities
          </h1>
        </div>

        <div className="btn">
          <Button variant={"ghost"} size={"lg"} className="font-semibold">
        Add Activities
          </Button>
        </div>
      </div>

      {/*  */}
      <div className="mt-8 space-y-4 rounded">

        {
          [1, 1].map((item, index) => (
            <div key={index} className="flex w-full h-auto  min-h-[265px] relative pr-12 mt-8 bg-white rounded">

              <div className="h-full w-[332px] centered p-3">

                <Image src="/bg/museum.png" alt="" className="" width={280} height={2200} objectFit="cover"/>
              </div>
              {/* ---- */}
              <div className="w-full bg-white main">

                <div className="w-full p-4 border-b flight_details border-border">
                  <div className="flex items-center justify-between gap-4">

                    {/*  */}
                    <div className="w-auto space-y-2">
                      <h1 className="text-xl font-semibold text-black">
                      The Museum of Modern Art
                      </h1>

                      <p className="font-medium text-text w-[80%]" >
                      Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The modern restaurant
                      </p>

                      <div className="flex items-center gap-3">

                        <div className="flex items-center gap-1">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 4.21875C8.38811 4.21875 7.78997 4.4002 7.2812 4.74014C6.77244 5.08009 6.37591 5.56326 6.14175 6.12857C5.90759 6.69388 5.84632 7.31593 5.9657 7.91606C6.08507 8.51619 6.37972 9.06744 6.81239 9.50011C7.24506 9.93278 7.79631 10.2274 8.39644 10.3468C8.99657 10.4662 9.61862 10.4049 10.1839 10.1708C10.7492 9.93659 11.2324 9.54006 11.5724 9.03129C11.9123 8.52253 12.0938 7.92439 12.0938 7.3125C12.0928 6.49227 11.7666 5.7059 11.1866 5.12592C10.6066 4.54593 9.82023 4.21968 9 4.21875ZM9 8.71875C8.72187 8.71875 8.44999 8.63627 8.21873 8.48175C7.98747 8.32723 7.80723 8.10761 7.70079 7.85065C7.59436 7.59369 7.56651 7.31094 7.62077 7.03815C7.67503 6.76537 7.80896 6.5148 8.00563 6.31813C8.2023 6.12146 8.45287 5.98753 8.72565 5.93327C8.99844 5.87901 9.28119 5.90686 9.53815 6.01329C9.79511 6.11973 10.0147 6.29997 10.1693 6.53123C10.3238 6.76249 10.4062 7.03437 10.4062 7.3125C10.4062 7.68546 10.2581 8.04315 9.99437 8.30687C9.73065 8.57059 9.37296 8.71875 9 8.71875ZM9 0.84375C7.28495 0.845611 5.64068 1.52774 4.42796 2.74046C3.21524 3.95318 2.53311 5.59745 2.53125 7.3125C2.53125 12.7519 8.27156 16.8328 8.51625 17.0037C8.65805 17.1029 8.82693 17.1561 9 17.1561C9.17307 17.1561 9.34195 17.1029 9.48375 17.0037C10.571 16.2024 11.5657 15.2827 12.4495 14.2615C14.4246 11.9932 15.4688 9.58852 15.4688 7.3125C15.4669 5.59745 14.7848 3.95318 13.572 2.74046C12.3593 1.52774 10.715 0.845611 9 0.84375ZM11.2008 13.128C10.5304 13.8981 9.79398 14.6082 9 15.2501C8.20602 14.6082 7.46962 13.8981 6.79922 13.128C5.625 11.7682 4.21875 9.65461 4.21875 7.3125C4.21875 6.04443 4.72249 4.8283 5.61915 3.93165C6.5158 3.03499 7.73193 2.53125 9 2.53125C10.2681 2.53125 11.4842 3.03499 12.3809 3.93165C13.2775 4.8283 13.7812 6.04443 13.7812 7.3125C13.7812 9.65461 12.375 11.7682 11.2008 13.128Z" fill="#0D6EFD"/>
                          </svg>

                          <p className="font-medium text-primary">
                          Directions
                          </p>
                        </div>

                        <div className="flex items-center gap-1">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.4884 8.0422L13.3173 10.8097L14.2672 14.93C14.3175 15.1454 14.3031 15.3708 14.226 15.5781C14.1488 15.7854 14.0123 15.9654 13.8334 16.0955C13.6545 16.2256 13.4413 16.3001 13.2203 16.3096C12.9993 16.3192 12.7804 16.2634 12.591 16.1492L8.9973 13.9695L5.41136 16.1492C5.22192 16.2634 5.00303 16.3192 4.78205 16.3096C4.56107 16.3001 4.34781 16.2256 4.16894 16.0955C3.99006 15.9654 3.85351 15.7854 3.77635 15.5781C3.69919 15.3708 3.68485 15.1454 3.73511 14.93L4.68363 10.8139L1.51183 8.0422C1.34407 7.89752 1.22276 7.70652 1.16312 7.49317C1.10348 7.27981 1.10815 7.0536 1.17656 6.84289C1.24497 6.63218 1.37407 6.44636 1.54766 6.30873C1.72126 6.1711 1.93162 6.08779 2.15238 6.06923L6.33316 5.70712L7.96511 1.81463C8.05034 1.61038 8.19409 1.43591 8.37826 1.3132C8.56243 1.19048 8.7788 1.125 9.00011 1.125C9.22143 1.125 9.43779 1.19048 9.62197 1.3132C9.80614 1.43591 9.94989 1.61038 10.0351 1.81463L11.672 5.70712L15.8514 6.06923C16.0721 6.08779 16.2825 6.1711 16.4561 6.30873C16.6297 6.44636 16.7588 6.63218 16.8272 6.84289C16.8956 7.0536 16.9003 7.27981 16.8406 7.49317C16.781 7.70652 16.6597 7.89752 16.4919 8.0422H16.4884Z" fill="#F4B93E"/>
                          </svg>

                          <p className="font-medium text-input-foreground">
                          4.5 (436)
                          </p>
                        </div>

                        <div className="flex items-center gap-1">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 1.40625C7.4981 1.40625 6.02993 1.85162 4.78114 2.68603C3.53236 3.52044 2.55905 4.70642 1.98429 6.094C1.40954 7.48157 1.25916 9.00842 1.55217 10.4815C1.84517 11.9545 2.56841 13.3076 3.63041 14.3696C4.69242 15.4316 6.04549 16.1548 7.51854 16.4478C8.99158 16.7408 10.5184 16.5905 11.906 16.0157C13.2936 15.441 14.4796 14.4676 15.314 13.2189C16.1484 11.9701 16.5938 10.5019 16.5938 9C16.5915 6.9867 15.7907 5.0565 14.3671 3.63287C12.9435 2.20925 11.0133 1.40848 9 1.40625ZM9 14.9062C7.83186 14.9062 6.68994 14.5599 5.71867 13.9109C4.74739 13.2619 3.99037 12.3394 3.54334 11.2602C3.09631 10.181 2.97935 8.99345 3.20724 7.84775C3.43513 6.70205 3.99765 5.64965 4.82365 4.82365C5.64966 3.99765 6.70205 3.43513 7.84775 3.20724C8.99345 2.97934 10.181 3.09631 11.2602 3.54334C12.3395 3.99037 13.2619 4.74739 13.9109 5.71866C14.5599 6.68994 14.9063 7.83185 14.9063 9C14.9046 10.5659 14.2818 12.0672 13.1745 13.1745C12.0672 14.2818 10.5659 14.9046 9 14.9062ZM13.7813 9C13.7813 9.22378 13.6924 9.43839 13.5341 9.59662C13.3759 9.75486 13.1613 9.84375 12.9375 9.84375H9C8.77623 9.84375 8.56162 9.75486 8.40338 9.59662C8.24515 9.43839 8.15625 9.22378 8.15625 9V5.0625C8.15625 4.83872 8.24515 4.62411 8.40338 4.46588C8.56162 4.30764 8.77623 4.21875 9 4.21875C9.22378 4.21875 9.43839 4.30764 9.59662 4.46588C9.75486 4.62411 9.84375 4.83872 9.84375 5.0625V8.15625H12.9375C13.1613 8.15625 13.3759 8.24514 13.5341 8.40338C13.6924 8.56161 13.7813 8.77622 13.7813 9Z" fill="#344054"/>
                          </svg>

                          <p className="font-medium text-input-foreground">
                          1 Hour
                          </p>
                        </div>

                      </div>
                    </div>

                    {/*  */}
                    <div className="w-auto text-right">
                      <div className="flex items-center justify-end flight_price">
                        <Icons.naira />
                        <h1 className="font-semibold text-[#1D2433] text-[28px]">123,450.00</h1>
                      </div>

                      <p className="font-medium text-[#1D2433]">
                      10:30 AM{" "}on{" "}Mar 19

                      </p>

                    </div>

                    {/*  */}

                  </div>
                </div>

                <div className="flex justify-between w-full p-2 px-4 border-b flight_details border-border">
                  <div className="flex items-center gap-2">

                    <p className="font-medium text-input-foreground">
                    Whats Included:
                    </p>
                    <p className="font-medium text-input-foreground">
                    Admission to the Empire State Building
                    </p>

                  </div>

                  <div  className="flex items-center gap-3">
                    <Button size={"sm"} className="bg-[#0A369D]">
                                                                                    Day 1
                    </Button>

                    <div className="flex flex-col h-[50px] justify-between">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 1.5625C8.33122 1.5625 6.69992 2.05735 5.31238 2.98448C3.92484 3.9116 2.84338 5.22936 2.20477 6.77111C1.56616 8.31286 1.39907 10.0094 1.72463 11.6461C2.05019 13.2828 2.85379 14.7862 4.03379 15.9662C5.2138 17.1462 6.71721 17.9498 8.35393 18.2754C9.99064 18.6009 11.6871 18.4338 13.2289 17.7952C14.7706 17.1566 16.0884 16.0752 17.0155 14.6876C17.9427 13.3001 18.4375 11.6688 18.4375 10C18.435 7.763 17.5453 5.61833 15.9635 4.03653C14.3817 2.45473 12.237 1.56498 10 1.5625ZM10 16.5625C8.70206 16.5625 7.43327 16.1776 6.35407 15.4565C5.27488 14.7354 4.43374 13.7105 3.93704 12.5114C3.44034 11.3122 3.31038 9.99272 3.5636 8.71972C3.81682 7.44672 4.44183 6.27739 5.35962 5.35961C6.2774 4.44183 7.44672 3.81681 8.71972 3.5636C9.99272 3.31038 11.3122 3.44034 12.5114 3.93704C13.7105 4.43374 14.7354 5.27487 15.4565 6.35407C16.1776 7.43327 16.5625 8.70206 16.5625 10C16.5606 11.7399 15.8686 13.408 14.6383 14.6383C13.408 15.8686 11.7399 16.5606 10 16.5625ZM13.7883 10.5867C13.9644 10.7628 14.0633 11.0017 14.0633 11.2508C14.0633 11.4999 13.9644 11.7387 13.7883 11.9148C13.6122 12.091 13.3733 12.1899 13.1242 12.1899C12.8752 12.1899 12.6363 12.091 12.4602 11.9148L10 9.45312L7.53828 11.9133C7.36216 12.0894 7.12329 12.1883 6.87422 12.1883C6.62515 12.1883 6.38628 12.0894 6.21016 11.9133C6.03404 11.7372 5.9351 11.4983 5.9351 11.2492C5.9351 11.0001 6.03404 10.7613 6.21016 10.5852L9.33516 7.46016C9.42226 7.37276 9.52575 7.30341 9.6397 7.25609C9.75366 7.20877 9.87583 7.18442 9.99922 7.18442C10.1226 7.18442 10.2448 7.20877 10.3587 7.25609C10.4727 7.30341 10.5762 7.37276 10.6633 7.46016L13.7883 10.5867Z" fill="#98A2B3"/>
                      </svg>

                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 1.5625C8.33122 1.5625 6.69992 2.05735 5.31238 2.98448C3.92484 3.9116 2.84338 5.22936 2.20477 6.77111C1.56616 8.31286 1.39907 10.0094 1.72463 11.6461C2.05019 13.2828 2.85379 14.7862 4.03379 15.9662C5.2138 17.1462 6.71721 17.9498 8.35393 18.2754C9.99064 18.6009 11.6871 18.4338 13.2289 17.7952C14.7706 17.1566 16.0884 16.0752 17.0155 14.6876C17.9427 13.3001 18.4375 11.6688 18.4375 10C18.435 7.763 17.5453 5.61833 15.9635 4.03653C14.3817 2.45473 12.237 1.56498 10 1.5625ZM10 16.5625C8.70206 16.5625 7.43327 16.1776 6.35407 15.4565C5.27488 14.7354 4.43374 13.7105 3.93704 12.5114C3.44034 11.3122 3.31038 9.99272 3.5636 8.71972C3.81682 7.44672 4.44183 6.27739 5.35962 5.35961C6.2774 4.44183 7.44672 3.81681 8.71972 3.5636C9.99272 3.31038 11.3122 3.44034 12.5114 3.93704C13.7105 4.43374 14.7354 5.27487 15.4565 6.35407C16.1776 7.43327 16.5625 8.70206 16.5625 10C16.5606 11.7399 15.8686 13.408 14.6383 14.6383C13.408 15.8686 11.7399 16.5606 10 16.5625ZM13.7883 8.08672C13.8757 8.17382 13.945 8.27731 13.9923 8.39126C14.0397 8.50522 14.064 8.62739 14.064 8.75078C14.064 8.87417 14.0397 8.99634 13.9923 9.1103C13.945 9.22425 13.8757 9.32775 13.7883 9.41484L10.6633 12.5398C10.5762 12.6272 10.4727 12.6966 10.3587 12.7439C10.2448 12.7912 10.1226 12.8156 9.99922 12.8156C9.87583 12.8156 9.75366 12.7912 9.6397 12.7439C9.52575 12.6966 9.42226 12.6272 9.33516 12.5398L6.21016 9.41484C6.03404 9.23872 5.9351 8.99985 5.9351 8.75078C5.9351 8.50171 6.03404 8.26284 6.21016 8.08672C6.38628 7.9106 6.62515 7.81166 6.87422 7.81166C7.12329 7.81165 7.36216 7.9106 7.53828 8.08672L10 10.5469L12.4617 8.08438C12.5489 7.99736 12.6525 7.9284 12.7664 7.88142C12.8803 7.83444 13.0023 7.81037 13.1255 7.81059C13.2487 7.81081 13.3706 7.83531 13.4844 7.88269C13.5981 7.93007 13.7014 7.9994 13.7883 8.08672Z" fill="#98A2B3"/>
                      </svg>

                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full p-4 flight_details border-border">

                  <div className="flex items-center gap-8">
                    <p className="font-medium text-primary">
                    Activity details
                    </p>

                    <p className="font-medium text-primary">
                                                                  Price details
                    </p>

                  </div>

                  <p className="font-medium text-primary">
                                                                  Edit details
                  </p>
                </div>

              </div>
              {/* ---- */}
              <div className="w-12 h-full absolute right-0  bg-[#FBEAE9] centered rounded-r">
                <Icons.close/>

              </div>

            </div>
          ))
        }
      </div>

    </section>
  );
}

