import { useNavigate } from "react-router-dom";
import { less, use, user } from "../assets/res";

interface MenuItem {
  label: string;
  icon: string;
  activeIcon: string;
  path: string;
}

interface SidebarProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeMenu, setActiveMenu }) => {
  const navigate = useNavigate();

  const handleMenuClick = (menu: MenuItem) => {
    setActiveMenu(menu.label);
    setTimeout(() => navigate(menu.path), 10);
  };

  const menuItems: MenuItem[] = [
    { label: "Dashboard", icon: use, activeIcon: user, path: "/" },
    { label: "Profile", icon: use, activeIcon: user, path: "/profile" },
    { label: "Activities", icon: use, activeIcon: user, path: "/activities" },
    { label: "Department", icon: use, activeIcon: user, path: "/department" },
  ];

  return (
    <aside className="w-[150px] md:w-[350px] overflow-y-auto bg-[#E7E6ED] flex-shrink-0 h-[90vh] fixed left-0 top-[calc(10vh+80px)] transition-all duration-300 scrollbar-hide">
      <div className="bg-[#DDE4EF] mx-10 rounded-3xl h-full p-3 flex flex-col justify-between">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => handleMenuClick(item)}
                className={`flex items-center w-full px-3 py-2 md:px-5 rounded-2xl hover:bg-fade transition-all ${
                  activeMenu === item.label
                    ? "bg-[#1C2458] text-white"
                    : "text-[#1C2458]"
                }`}
              >
                <img
                  src={activeMenu === item.label ? item.activeIcon : item.icon}
                  alt={`${item.label} icon`}
                  className="w-5 h-5 mr-2"
                />
                <span className="hidden md:inline">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl h-full mx-5 p-2 md:p-4">
        <div className="flex mb-5 justify-between">
          <p>Departments</p>
          <p>View all</p>
        </div>
        <div className="flex flex-col gap-3">
          {["Finance", "Audit", "Gap Analysis"].map((dept) => (
            <div key={dept} className="justify-between bg-white rounded-3xl p-4 flex">
              <p>{dept}</p>
              <img
                className="bg-[#DDE4EF] p-2 rounded-full aspect-square"
                src={less}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
