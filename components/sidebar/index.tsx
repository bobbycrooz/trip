// import Image from "next/image";
import "./style.scss";
import { Icons } from "@/components/icons";
// import { Button } from "@/components/ui/button";

const side_list = [
  {
    label: "activity",
    icon: Icons.activity
  },
  {
    label: "hotel",
    icon: Icons.hotel
  }, {
    label: "flight",
    icon: Icons.flight
  }, {
    label: "study",
    icon: Icons.study
  }, {
    label: "visa",
    icon: Icons.visa
  },
  {
    label: "Immigration",
    icon: Icons.imigratioon
  },
  {
    label: "medical",
    icon: Icons.medical
  },
  {
    label: "Vacation Packages",
    icon: Icons.vacation
  },
];

export default function Sidebar ()
{
  return (
    <div className="w-full h-auto col-span-2 p-5 sidebar">

      <div className="w-full h-auto p-2 bg-white rounded sidebar-card">

        <nav className="w-full space-y-1 ">
          {
            side_list.map((item, index) => (
              <div key={index} className="flex items-center justify-start gap-4 p-3 px-5 rounded text-input-foreground hover:bg-input fill-input-foreground hover:fill-text hover:text-text">
                <div>
                  <item.icon className="fill-inherit"/>
                </div>
                <p className="text-sm capitalize nav_label ">{item.label}</p>
              </div>
            ))
          }
        </nav>

      </div>

    </div>
  );
}
