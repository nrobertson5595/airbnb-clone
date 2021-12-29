import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  const SelectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "Selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.Selection.startDate);
    setEndDate(ranges.Selection.endDate);
  };

  const changeBackground = () => {
    if (window.scrollY > 50 && window.scrollY < 500) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <header
      className={
        navbar
          ? "sticky top-0 z-50 grid grid-cols-3 bg-transparent shadow-md py-5 px-5 md:px-10"
          : "sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10"
      }
    >
      {/* // left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="http://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* // Middle  */}
      <div className="flex items-center  md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          placeholder="start your search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* // Right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[SelectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div>
            <h2 className="text-2xl">Number of Guest</h2>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
