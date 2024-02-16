const Navbar = () => {
  return (
    <nav className="flex sticky items-center justify-between bg-[#2E4659] text-white p-4">
      <div className="flex items-center">
        <select className="bg-[#2E4659] border-2 border-white text-white rounded p-2">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
      <div>
        <img src="./public/scrappyLogo.jpg" alt="Logo" className="h-8" />
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
