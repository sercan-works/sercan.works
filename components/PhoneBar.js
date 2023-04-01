import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import { FaDev, FaPeriscope, FaPhone, FaPhoneAlt } from "react-icons/fa";
import { PhoneIcon } from "@heroicons/react/solid";

const PhoneBar = () => {
  const [social, setSocial] = useState([]);

  // useEffect(async () => {
  //   await axios({
  //     url: `https://api.ambalajsu.com/suamb/social/`,
  //     method: 'GET'
  //   }).then((res) => setSocial(res.data))
  //     .catch((err) => console.log(err))
  // }, [  ])

  //console.log("social", social[0]?.facebook)




  return (



    <div className="lg:inline fixed -right-[15vh] top-20 z-50 cursor-pointer duration-300 w-[20vh] hover:right-0 hover:translate-x-1 transition-all ease-in-out ">


      <Popover placement="left-end">
        <PopoverHandler>
          <div className="flex flex-row items-center shadow-xl font-montserrat text-2xl text-gray-800 bg-[#E3D985] ring-gray-800 ring-1 rounded-l-full p-3">
          <FaDev/>
          <div className="ml-4">
          <a href="">Works</a>
          </div>
          
          </div>
          
        </PopoverHandler>
        <PopoverContent className="bg-gray-200 ring-2 ring-[#E3D985]">



        </PopoverContent>
      </Popover>


    </div>
  );
};

export default PhoneBar;
