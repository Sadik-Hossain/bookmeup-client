import { useContext } from "react";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaUserLock, FaHotel } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { AuthContext } from "../../context/AuthContext";
import "./Dashboard.css";

const SideItem = ({ x, icon, name }) => {
  return (
    <div className="block active:bg-green-400 text-white hover:bg-slate-200  hover:text-black p-3">
      <div className="flex justify-between ">
        <div className="border border-gray-500 shadow-sm shadow-gray-500 rounded-xl p-1 text-2xl">
          {/* <FaUserLock /> */}
          {icon}
        </div>
        {x && <p>{name}</p>}
      </div>
    </div>
  );
};
const item = [
  { name: "all user", icon: <FaUserLock /> },
  { name: "payments", icon: <GiMoneyStack /> },
  { name: "hotels", icon: <FaHotel /> },
  { name: "bookings", icon: <BsFillJournalBookmarkFill /> },
];
const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const [x, setX] = useState(true);
  const handleClick = () => {
    setX(!x);
  };

  return (
    <div className="relative  ">
      <div
        className={` bg-gray-800 inset-0 overflow-y-auto absolute  leading-loose ${
          x ? "w-40" : "w-14"
        }`}
      >
        {user && (
          <div className=" text-white   p-3">
            <div className="flex justify-between  ">
              <p className="bg-black text-white border border-dashed border-white rounded-[50%] px-1.5 text-md uppercase ">
                {user?.username.slice(0, 2)}
              </p>
            </div>
            {x && <p>{user?.email}</p>}
            <hr className="mt-2" />
          </div>
        )}
        {item.map((e, i) => (
          <SideItem x={x} icon={e.icon} name={e.name} key={i} />
        ))}
      </div>

      <div className={`${x ? "ml-44" : "ml-16"} transition-all ease-linear`}>
        <button onClick={handleClick}>
          <BiArrowBack className=" text-black text-3xl" />
        </button>

        <h1 className="text-3xl text-center ">this is dashboard</h1>
        <div className="min-h-screen"></div>
      </div>
    </div>
  );
};

export default Dashboard;
