import Image from "next/image";
import "./style.scss";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

const nav_list = [
  {
    label: "home",
    icon: Icons.home
  },
  {
    label: "Dashboard",
    icon: Icons.dashboard
  }, {
    label: "wallet",
    icon: Icons.wallet
  }, {
    label: "plan a trip",
    icon: Icons.plan
  }, {
    label: "Commission for life",
    icon: Icons.give
  }
];

const nav_list_two = [
  {
    label: "notification",
    icon: Icons.notification
  },
  {
    label: "cart",
    icon: Icons.cart
  }, {
    label: "create",
    icon: Icons.create
  }];

export default function Navbar ()
{
  return (
    <div className="w-full p-2 px-4 flex items-center justify-between navbar h-[114px] bg-white">
      <div className="flex items-center gap-3 logo-seaarch">
        <div className="logo">
          <Image src={"./icons/logo.svg"} alt="logo" width={58} height={58}/>
        </div>

        <div className="relative search w-[400px] h-[56px]  ">
          <Icons.search className="absolute left-0 mx-3 -translate-y-1/2 top-1/2 "/>
          <input type="search" placeholder="Search" name="" id="" className="pl-12 rounded-sm bg-input full text-input-foreground placeholder:text-input-foreground"/>
        </div>
      </div>

      <div className="flex items-center space-x-6 action-bar">

        <nav className="flex items-center gap-4">
          {
            nav_list.map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-1 text-center  nav_item tracking-[-1px] text-input-foreground hover:text-black">
                <div>
                  <item.icon className="fill-input-foreground"/>
                </div>
                <p className="text-sm capitalize nav_label ">{item.label}</p>
              </div>
            ))
          }
        </nav>

        <div className="border h-[38px] w-[1px]"></div>

        <nav className="flex items-center gap-4">
          <Button>
                  subscribe
          </Button>
          {
            nav_list_two.map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-1 text-center  nav_item tracking-[-1px] text-input-foreground hover:text-black">
                <div>
                  <item.icon className="fill-input-foreground"/>

                </div>
                <p className="text-sm capitalize nav_label ">{item.label}</p>
              </div>
            ))
          }

          <div className="logo">
            <Image src={"./icons/profile.svg"} alt="logo" width={59} height={52}/>
          </div>
        </nav>
      </div>
    </div>
  );
}
