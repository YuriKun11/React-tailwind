import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  ChevronLast,
  ChevronFirst,
  Home,
  BarChart2,
  Users,
  Package,
  ShoppingCart,
  CreditCard,
  Settings,
  HelpCircle,
  MoreVertical,
} from "lucide-react";

const SidebarContext = React.createContext();

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState(window.location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuRef = useRef(null);
  const moreButtonRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !moreButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemClick = (path) => {
    setActiveItem(path);
    navigate(path);
  };

  const handleMoreClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <aside className={`h-screen transition-all ${expanded ? "w-72" : "w-4.5rem"}`}>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://media.discordapp.net/attachments/1044532871534223360/1310191399672479835/Untitled-1-removebg-preview.png?ex=67445253&is=674300d3&hm=52458eb3dd59a36e7d53035b0a8fe88ee389e7bc65bcd2b2926fceb23e31fd08&=&format=webp&quality=lossless"
            className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 space-y-1">
            <SidebarItem
              to="/dashboard"
              icon={<Home size={20} />}
              text="Dashboard"
              active={activeItem === "/dashboard"}
              onClick={handleItemClick}
            />
            <SidebarItem
              to="/statistics"
              icon={<BarChart2 size={20} />}
              text="Statistics"
              active={activeItem === "/statistics"}
              onClick={handleItemClick}
            />
            <SidebarItem
              to="/users"
              icon={<Users size={20} />}
              text="Users"
              active={activeItem === "/users"}
              onClick={handleItemClick}
            />
            <SidebarItem
              to="/inventory"
              icon={<Package size={20} />}
              text="Inventory"
              active={activeItem === "/inventory"}
              onClick={handleItemClick}
            />
            <SidebarItem
              to="/orders"
              icon={<ShoppingCart size={20} />}
              text="Orders"
              active={activeItem === "/orders"}
              onClick={handleItemClick}
            />
            <SidebarItem
              to="/billings"
              icon={<CreditCard size={20} />}
              text="Billings"
              active={activeItem === "/billings"}
              onClick={handleItemClick}
            />
            <SidebarItem
              to="/settings"
              icon={<Settings size={20} />}
              text="Settings"
              active={activeItem === "/settings"}
              onClick={handleItemClick}
            />
            <SidebarItem
              to="/help"
              icon={<HelpCircle size={20} />}
              text="Help"
              active={activeItem === "/help"}
              onClick={handleItemClick}
            />
          </ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3 items-center justify-between">
          <img
            src="https://ui-avatars.com/api/?name=YR&background=c7d2fe&color=3730a3&bold=true"
            alt="YR"
            className="w-10 h-10 rounded-md"
          />

          <div className={`flex items-center overflow-hidden transition-all ${expanded ? "w-72 ml-3" : "w-0"}`}>
            <div className="leading-4">
              <h4 className="font-semibold">YuriKun11</h4>
              <span className="text-xs text-gray-600">yurikun11@gmail.com</span>
            </div>
            <button
              ref={moreButtonRef}
              onClick={handleMoreClick}
              className="p-1.5 rounded-lg hover:bg-gray-100 ml-3"
            >
              <MoreVertical size={20} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            ref={menuRef}
            className={`absolute bottom-16 left-32 w-48 bg-white shadow-lg rounded-md p-3 z-10`}
          >
            <ul>
              <li
                onClick={handleOpenModal}
                className="py-2 px-4 text-sm text-indigo-600 hover:bg-gray-100 cursor-pointer"
              >
                Profile
              </li>
              <li className="py-2 px-4 text-sm text-indigo-600 hover:bg-gray-100 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        )}

        {/* Modal */}
        {isModalOpen && (
          <div
            ref={modalRef}
            className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-20"
          >
            <div className="bg-white p-6 rounded-md shadow-lg w-80">
              <h3 className="text-xl font-semibold mb-4">User Information</h3>
              <p className="text-left"><strong>Name:</strong> YuriKun11</p>
              <p className="text-left"><strong>Email:</strong> yurikun11@gmail.com</p>
              <button
                onClick={handleCloseModal}
                className="mt-4 p-2 bg-indigo-600 text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </nav>
    </aside>
  );
}

export function SidebarItem({ to, icon, text, active, onClick, alert }) {
  const { expanded } = React.useContext(SidebarContext);

  return (
    <li
      className={`relative flex items-center py-2 px-3 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}
      onClick={() => onClick(to)}
    >
      <NavLink to={to} className="flex items-center w-full">
        <div className="flex-shrink-0">{icon}</div>

        <span
          className={`overflow-hidden transition-all ml-3 ${expanded ? "w-auto" : "w-0"}`}
          style={{ textAlign: "left" }}
        >
          {text}
        </span>
      </NavLink>

      {alert && (
        <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`} />
      )}

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}
