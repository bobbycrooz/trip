// import Image from "next/image";
import "./style.scss";
import { Icons } from "@/components/icons";
import { Flex } from "@/components/ui/flex";

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
              <div key={index} className="flex items-center justify-start gap-4 p-3 px-5 font-medium rounded text-input-foreground hover:bg-input fill-input-foreground hover:fill-text hover:text-text">
                <div>
                  <item.icon className="fill-inherit"/>
                </div>
                <p className="text-sm capitalize nav_label">{item.label}</p>
              </div>
            ))
          }
        </nav>

        <div className="flex items-center justify-between w-full p-5 mt-12 rounded bg-input">
          <Flex gap={2}>
            <div className="bg-primary w-[50px] h-[50px] rounded centered">
              <p className="font-semibold text-white">GO</p>
            </div>
            <p className="text-sm capitalize text-input-foreground tracking-[-1px]">Personal Account</p>
          </Flex>

          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.031 15.9692C17.1008 16.0389 17.1561 16.1216 17.1938 16.2127C17.2316 16.3037 17.251 16.4013 17.251 16.4999C17.251 16.5984 17.2316 16.696 17.1938 16.7871C17.1561 16.8781 17.1008 16.9608 17.031 17.0305L12.531 21.5305C12.4614 21.6002 12.3787 21.6555 12.2876 21.6933C12.1966 21.731 12.099 21.7504 12.0004 21.7504C11.9019 21.7504 11.8043 21.731 11.7132 21.6933C11.6222 21.6555 11.5394 21.6002 11.4698 21.5305L6.96979 17.0305C6.82906 16.8898 6.75 16.6989 6.75 16.4999C6.75 16.3008 6.82906 16.11 6.96979 15.9692C7.11052 15.8285 7.30139 15.7494 7.50042 15.7494C7.69944 15.7494 7.89031 15.8285 8.03104 15.9692L12.0004 19.9395L15.9698 15.9692C16.0394 15.8995 16.1222 15.8442 16.2132 15.8064C16.3043 15.7687 16.4019 15.7493 16.5004 15.7493C16.599 15.7493 16.6966 15.7687 16.7876 15.8064C16.8787 15.8442 16.9614 15.8995 17.031 15.9692ZM8.03104 8.03048L12.0004 4.06017L15.9698 8.03048C16.1105 8.17121 16.3014 8.25027 16.5004 8.25027C16.6994 8.25027 16.8903 8.17121 17.031 8.03048C17.1718 7.88975 17.2508 7.69888 17.2508 7.49986C17.2508 7.30083 17.1718 7.10996 17.031 6.96923L12.531 2.46923C12.4614 2.3995 12.3787 2.34418 12.2876 2.30644C12.1966 2.26869 12.099 2.24927 12.0004 2.24927C11.9019 2.24927 11.8043 2.26869 11.7132 2.30644C11.6222 2.34418 11.5394 2.3995 11.4698 2.46923L6.96979 6.96923C6.82906 7.10996 6.75 7.30083 6.75 7.49986C6.75 7.69888 6.82906 7.88975 6.96979 8.03048C7.11052 8.17121 7.30139 8.25027 7.50042 8.25027C7.69944 8.25027 7.89031 8.17121 8.03104 8.03048Z" fill="#667185"/>
            </svg>

          </span>

        </div>

      </div>

    </div>
  );
}
