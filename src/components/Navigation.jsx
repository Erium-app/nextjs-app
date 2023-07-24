"use client"
import React, { useState } from "react";
import {AiOutlineHome, AiOutlineUser, AiOutlineMessage, AiOutlineCamera, AiOutlineSetting } from 'react-icons/ai'
// import { IonIcon } from '@ionic/react';
// import { homeOutline, personOutline, chatbubbleOutline, cameraOutline, settingsOutline } from 'ionicons/icons';
const Navigation = () => {
//   const Menus = [
//     { name: "Home", icon: homeOutline, dis: "translate-x-0" },
//     { name: "Profile", icon: personOutline, dis: "translate-x-16" },
//     { name: "Message", icon: chatbubbleOutline, dis: "translate-x-32" },
//     { name: "Photos", icon: cameraOutline, dis: "translate-x-48" },
//     { name: "Settings", icon: settingsOutline, dis: "translate-x-64" },
//   ];
  const Menus = [
    { name: "Home", icon: <AiOutlineHome/>, dis: "translate-x-0" },
    { name: "Profile", icon: <AiOutlineUser/>, dis: "translate-x-16" },
    { name: "Message", icon: <AiOutlineMessage/>, dis: "translate-x-32" },
    { name: "Photos", icon: <AiOutlineCamera/>, dis: "translate-x-48" },
    { name: "Settings", icon: <AiOutlineSetting/>, dis: "translate-x-64" },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className="bg-white max-h-[4.4rem] px-6 rounded-t-xl">
      <ul className="flex relative">
        <span
          className={`bg-rose-600 duration-500 ${Menus[active].dis} border-4 border-[#D6DCDB] h-16 w-16 absolute
         -top-5 rounded-full`}
        >
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1"
          ></span>
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
          ></span>
        </span>
        {Menus.map((menu, i) => (
          <li key={i} className="w-16">
            <a
              className="flex flex-col text-center pt-6"
              onClick={() => setActive(i)}
            >
              <span
                className={`text-xl z-20 flex justify-center items-center cursor-pointer duration-500 ${
                  i === active && "-mt-[1.35rem] text-white"
                }`}
              >
                {/* <ion-icon name={menu.icon}></ion-icon> */}
                {/* <IonIcon icon={menu.icon}></IonIcon> */}
                {menu.icon}
              </span>
              <span
                className={` ${
                  active === i
                    ? "translate-y-4 text-sm mt-2 duration-700 opacity-100"
                    : "opacity-0 translate-y-10"
                } `}
              >
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;