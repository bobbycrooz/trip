// "use client";

// import "./style.scss";
// import { Button } from "./ui/button";
import { Button } from "@/components/ui/button";
import { Icons } from "./icons";
import Image from "next/image";

const flight_facilities = [
  {
    label: "Pool",
    icon: Icons.pool
  },
  {
    label: "Bar",
    icon: Icons.bar
  }
];

export default function Hotels ()
{
  return (

    <section className="w-full flights mt-5 bg-[#344054] p-3">

      <div className="flex items-center justify-between w-full section_head">

        <div className="flex items-center w-auto gap-2">
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.5 16.8748H22.125V5.7307L22.7353 5.60039C22.8818 5.57171 23.0212 5.51415 23.1453 5.43106C23.2693 5.34798 23.3756 5.24102 23.4579 5.11644C23.5402 4.99186 23.5969 4.85215 23.6246 4.70544C23.6524 4.55873 23.6506 4.40796 23.6195 4.26193C23.5884 4.1159 23.5286 3.97752 23.4434 3.85486C23.3583 3.7322 23.2496 3.62772 23.1236 3.5475C22.9977 3.46728 22.8571 3.41293 22.7099 3.38762C22.5628 3.36231 22.4121 3.36654 22.2666 3.40008L1.26656 7.90008C0.995421 7.95858 0.755451 8.11519 0.592735 8.33983C0.430019 8.56447 0.35603 8.84131 0.384977 9.11717C0.413924 9.39304 0.543766 9.64849 0.749567 9.83446C0.955369 10.0204 1.22262 10.1238 1.5 10.1248C1.5797 10.1249 1.65919 10.1167 1.73719 10.1004L1.87594 10.0704V16.8748H1.5C1.20163 16.8748 0.915483 16.9933 0.704505 17.2043C0.493526 17.4152 0.375 17.7014 0.375 17.9998C0.375 18.2981 0.493526 18.5843 0.704505 18.7953C0.915483 19.0062 1.20163 19.1248 1.5 19.1248H22.5C22.7984 19.1248 23.0845 19.0062 23.2955 18.7953C23.5065 18.5843 23.625 18.2981 23.625 17.9998C23.625 17.7014 23.5065 17.4152 23.2955 17.2043C23.0845 16.9933 22.7984 16.8748 22.5 16.8748ZM4.125 9.58758L19.875 6.21258V16.8748H18V11.2498C18 10.9514 17.8815 10.6652 17.6705 10.4543C17.4595 10.2433 17.1734 10.1248 16.875 10.1248H7.125C6.82663 10.1248 6.54048 10.2433 6.3295 10.4543C6.11853 10.6652 6 10.9514 6 11.2498V16.8748H4.125V9.58758ZM15.75 13.4998H8.25V12.3748H15.75V13.4998ZM8.25 15.7498H15.75V16.8748H8.25V15.7498Z" fill="white"/>
            </svg>

          </span>
          <h1 className="text-white">
                                    Hotels
          </h1>
        </div>

        <div className="btn">
          <Button  size={"lg"} className="font-semibold text-black bg-white">
                                    Add Hotel
          </Button>
        </div>
      </div>

      {/*  */}
      <div className="mt-8 space-y-4 rounded">

        {
          [1, 1].map((item, index) => (
            <div key={index} className="flex w-full h-auto relative pr-12 min-h-[265px] mt-8 bg-white rounded">

              <div className="h-full w-[332px] centered p-3">

                <Image src="/bg/hotel.png" alt="" className="" width={280} height={2200} objectFit="cover"/>
              </div>
              {/* ---- */}
              <div className="w-full bg-white main">

                <div className="w-full p-4 border-b flight_details border-border">
                  <div className="flex items-center justify-between gap-4">

                    {/*  */}
                    <div className="w-auto space-y-2">
                      <h1 className="text-xl font-semibold text-black">
                      Riviera Resort, Lekki
                      </h1>

                      <p className="font-medium text-text w-[80%]" >
                      18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way, Lekki Phase1
                      </p>

                      <div className="flex items-center gap-3">

                        <div className="flex items-center gap-1">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 4.21875C8.38811 4.21875 7.78997 4.4002 7.2812 4.74014C6.77244 5.08009 6.37591 5.56326 6.14175 6.12857C5.90759 6.69388 5.84632 7.31593 5.9657 7.91606C6.08507 8.51619 6.37972 9.06744 6.81239 9.50011C7.24506 9.93278 7.79631 10.2274 8.39644 10.3468C8.99657 10.4662 9.61862 10.4049 10.1839 10.1708C10.7492 9.93659 11.2324 9.54006 11.5724 9.03129C11.9123 8.52253 12.0938 7.92439 12.0938 7.3125C12.0928 6.49227 11.7666 5.7059 11.1866 5.12592C10.6066 4.54593 9.82023 4.21968 9 4.21875ZM9 8.71875C8.72187 8.71875 8.44999 8.63627 8.21873 8.48175C7.98747 8.32723 7.80723 8.10761 7.70079 7.85065C7.59436 7.59369 7.56651 7.31094 7.62077 7.03815C7.67503 6.76537 7.80896 6.5148 8.00563 6.31813C8.2023 6.12146 8.45287 5.98753 8.72565 5.93327C8.99844 5.87901 9.28119 5.90686 9.53815 6.01329C9.79511 6.11973 10.0147 6.29997 10.1693 6.53123C10.3238 6.76249 10.4062 7.03437 10.4062 7.3125C10.4062 7.68546 10.2581 8.04315 9.99437 8.30687C9.73065 8.57059 9.37296 8.71875 9 8.71875ZM9 0.84375C7.28495 0.845611 5.64068 1.52774 4.42796 2.74046C3.21524 3.95318 2.53311 5.59745 2.53125 7.3125C2.53125 12.7519 8.27156 16.8328 8.51625 17.0037C8.65805 17.1029 8.82693 17.1561 9 17.1561C9.17307 17.1561 9.34195 17.1029 9.48375 17.0037C10.571 16.2024 11.5657 15.2827 12.4495 14.2615C14.4246 11.9932 15.4688 9.58852 15.4688 7.3125C15.4669 5.59745 14.7848 3.95318 13.572 2.74046C12.3593 1.52774 10.715 0.845611 9 0.84375ZM11.2008 13.128C10.5304 13.8981 9.79398 14.6082 9 15.2501C8.20602 14.6082 7.46962 13.8981 6.79922 13.128C5.625 11.7682 4.21875 9.65461 4.21875 7.3125C4.21875 6.04443 4.72249 4.8283 5.61915 3.93165C6.5158 3.03499 7.73193 2.53125 9 2.53125C10.2681 2.53125 11.4842 3.03499 12.3809 3.93165C13.2775 4.8283 13.7812 6.04443 13.7812 7.3125C13.7812 9.65461 12.375 11.7682 11.2008 13.128Z" fill="#0D6EFD"/>
                          </svg>

                          <p className="font-medium text-primary">
                                                                  show in map
                          </p>
                        </div>

                        <div className="flex items-center gap-1">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.4884 8.0422L13.3173 10.8097L14.2672 14.93C14.3175 15.1454 14.3031 15.3708 14.226 15.5781C14.1488 15.7854 14.0123 15.9654 13.8334 16.0955C13.6545 16.2256 13.4413 16.3001 13.2203 16.3096C12.9993 16.3192 12.7804 16.2634 12.591 16.1492L8.9973 13.9695L5.41136 16.1492C5.22192 16.2634 5.00303 16.3192 4.78205 16.3096C4.56107 16.3001 4.34781 16.2256 4.16894 16.0955C3.99006 15.9654 3.85351 15.7854 3.77635 15.5781C3.69919 15.3708 3.68485 15.1454 3.73511 14.93L4.68363 10.8139L1.51183 8.0422C1.34407 7.89752 1.22276 7.70652 1.16312 7.49317C1.10348 7.27981 1.10815 7.0536 1.17656 6.84289C1.24497 6.63218 1.37407 6.44636 1.54766 6.30873C1.72126 6.1711 1.93162 6.08779 2.15238 6.06923L6.33316 5.70712L7.96511 1.81463C8.05034 1.61038 8.19409 1.43591 8.37826 1.3132C8.56243 1.19048 8.7788 1.125 9.00011 1.125C9.22143 1.125 9.43779 1.19048 9.62197 1.3132C9.80614 1.43591 9.94989 1.61038 10.0351 1.81463L11.672 5.70712L15.8514 6.06923C16.0721 6.08779 16.2825 6.1711 16.4561 6.30873C16.6297 6.44636 16.7588 6.63218 16.8272 6.84289C16.8956 7.0536 16.9003 7.27981 16.8406 7.49317C16.781 7.70652 16.6597 7.89752 16.4919 8.0422H16.4884Z" fill="#F4B93E"/>
                          </svg>

                          <p className="font-medium text-input-foreground">
                          8.5 (436)
                          </p>
                        </div>

                        <div className="flex items-center gap-1">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.625 5.0625H1.6875V3.375C1.6875 3.22582 1.62824 3.08274 1.52275 2.97725C1.41726 2.87176 1.27418 2.8125 1.125 2.8125C0.975816 2.8125 0.832742 2.87176 0.727252 2.97725C0.621763 3.08274 0.5625 3.22582 0.5625 3.375V14.625C0.5625 14.7742 0.621763 14.9173 0.727252 15.0227C0.832742 15.1282 0.975816 15.1875 1.125 15.1875C1.27418 15.1875 1.41726 15.1282 1.52275 15.0227C1.62824 14.9173 1.6875 14.7742 1.6875 14.625V12.375H16.3125V14.625C16.3125 14.7742 16.3718 14.9173 16.4773 15.0227C16.5827 15.1282 16.7258 15.1875 16.875 15.1875C17.0242 15.1875 17.1673 15.1282 17.2727 15.0227C17.3782 14.9173 17.4375 14.7742 17.4375 14.625V7.875C17.4375 7.12908 17.1412 6.41371 16.6137 5.88626C16.0863 5.35882 15.3709 5.0625 14.625 5.0625ZM1.6875 6.1875H6.75V11.25H1.6875V6.1875Z" fill="#344054"/>
                          </svg>

                          <p className="font-medium text-input-foreground">
                          King size room
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
                      Total Price: NGN 560,000
                      </p>

                      <p className="font-medium text-[#1D2433]">
                      1 room x 10 nights incl. taxes
                      </p>

                    </div>

                    {/*  */}

                  </div>
                </div>

                <div className="flex justify-between w-full p-4 border-b flight_details border-border">
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

                  <div  className="flex items-center gap-1">
                    <Icons.calenderBlack />
                    <p className="font-medium text-input-foreground">
                      {"Check In: 20-04-2024"}
                    </p>

                    <Icons.calenderBlack />
                    <p className="font-medium text-input-foreground">
                      {"Check In: 20-04-2024"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full p-4 flight_details border-border">

                  <div className="flex items-center gap-8">
                    <p className="font-medium text-primary">
                                                                  Hotel details
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

