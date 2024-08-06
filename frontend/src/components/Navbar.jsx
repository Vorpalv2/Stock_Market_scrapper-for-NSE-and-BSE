import { useState } from "react";

const Navbar = () => {
  const [options, setOptions] = useState("");

  return (
    <nav className="flex h-[8%] items-center justify-between bg-[#2E4659] text-white p-4">
      <div className="flex items-center">
        <select
          className="bg-[#2E4659] border-2 border-white text-white rounded p-2"
          onChange={(e) => {
            console.log(e.target.value);
            setOptions(e.target.value);
          }}
        >
          <option value={options}>Light</option>
          <option value={options}>Dark</option>
        </select>
      </div>
      <div>
        <img src="/scrappyLogo.jpg" alt="Logo" className="h-8" />
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          Register
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
