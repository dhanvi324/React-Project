import { NavLink } from "react-router-dom";

function Header() {
  const linkClass =
    "px-3 py-2 rounded hover:bg-gray-700 transition-colors";

  const activeClass = ({ isActive }) =>
    isActive
      ? `${linkClass} bg-gray-900`
      : linkClass;

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        
        {/* ✅ Logo Left */}
        <div className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-xl font-bold"></h1>
        </div>

        {/* ✅ Navigation Right */}
        <nav className="flex gap-4">
          <NavLink to="/home" className={activeClass}>
            Home
          </NavLink>

          <NavLink to="/AddUser" className={activeClass}>
            Add User
          </NavLink>

          <NavLink to="/UserList" className={activeClass}>
            User List
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;