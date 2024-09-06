import { FaMapMarkerAlt } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <div
      className="flex justify-between h-20 items-center px-5
     text-black bg-white border border-black rounded-lg"
    >
      <img src={Logo} alt="" className="h-10" />
      <div className="flex items-center gap-1 bg-gray-100   p-2">
        <IoSearchOutline className="text-lg" />

        <input
          type="text"
          placeholder="search for mobile"
          className=" w-[200px]  outline-none bg-gray-100 "
        />
      </div>
      <div className="flex gap-5  items-center">
        <div className="flex items-center">
          <FaMapMarkerAlt />
          <select className="  outline-none">
            <option value={"Pune"}>Pune</option>
            <option value={"Delhi"}>Delhi</option>
            <option value={"Patna"}>Patna</option>
            <option value={"Mumbai"}>Mumbai</option>
          </select>
        </div>
        <button className="bg-[#41c8b7] text-white p-1 px-3 rounded-md">
          Login
        </button>
      </div>
    </div>
  );
};

export default NavBar;
