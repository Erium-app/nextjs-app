"use client"
import React, { useState } from "react";
import Link from "next/link";
import {MdSpaceDashboard, MdWifi, MdOutlineVpnLock, MdSettings, MdFolderZip} from'react-icons/md';
import { FaEthereum } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";
import { BsFillPeopleFill, BsFillQuestionCircleFill } from "react-icons/bs";

const Navbar = () => {
    const Menus = [
        { name: "Dashboard", icon: <MdSpaceDashboard/>, href: "/profile/dashboard" },
        { name: "Wi-Fi", icon: <MdWifi/>, href: "/profile/wi-fi"  },
        { name: "VPN", icon: <MdOutlineVpnLock/>, href: "/profile/vpn"  },
        { name: "Packages", icon: <MdFolderZip/>, href: "/profile/package"  },
        { name: "Stacker", icon: <FaEthereum/>, href: "/profile/stacker"  },
        { name: "Repository", icon: <GoRepoForked/>, href: "/profile/repository"  },
        { name: "System", icon: <MdSettings/>, href: "/profile/system"  },
        { name: "Community", icon: <BsFillPeopleFill/>, href: "/profile/comunity"  },
        { name: "Support", icon: <BsFillQuestionCircleFill/>, href: "/profile/support"  },
      ];
      const [active, setActive] = useState(0);
  return (
    <div className=' h-[100vh] w-[15%] bg-white flex flex-col justify-start py-2 shadow-2xl shadow-gray-800 items-center'>
      <span className='w-52 h-12 p-2 text-2xl font-extrabold text-[#030214] text-center align-middle '>EriumNode</span>

      <div className='w-52 flex flex-col justify-between px-2 text-[#030214] mt-12 items-center'>
      {Menus.map((menu, i) => (
        <Link href={menu.href} className="w-full h-16" key={i}>
          <div className={`h-12 transition ease-in-out delay-400 flex justify-center items-center hover:-translate-x-1 hover:-translate-y-1 w-full mb-4 hover:shadow-tab rounded-lg ${
            i === active && " bg-[#030214] -translate-x-2 -translate-y-2 shadow-tab text-white"
          }`} onClick={() => setActive(i)}>
            {menu.icon}
            <span className=" w-3/5 text-center align-middle">{menu.name}</span>
          </div>
        </Link>
        ))}
        </div>
    </div>
  )
}

export default Navbar