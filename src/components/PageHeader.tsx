import { useLocation } from "react-router-dom";
import { book, usser, work } from "../assets/res";
import { user } from "../data/User";

const PageHeader: React.FC = () => {
  const location = useLocation();

  const renderContent = () => {
    switch (location.pathname) {
      case "/":
        return <h1 className="text-lg font-semibold">Welcome to Dashboard</h1>;
      case "/profile":
        return (
          <div className="flex flex-wrap justify-between items-center w-full px-4 gap-4">
            <div className="flex flex-wrap items-center gap-3 sm:gap-6">
              <div className="flex bg-[#C7C4D1] rounded-3xl p-3 gap-1 text-sm">
                <img src={work} alt="" />
                <p>WorkSpace</p>
              </div>
              <div className="flex bg-[#C7C4D1] rounded-3xl p-3 gap-1 text-sm">
                <img src={work} alt="" />
                <p>Training</p>
              </div>
              <div className="flex bg-[#C7C4D1] rounded-3xl p-3 gap-1 text-sm">
                <img src={work} alt="" />
                <p>Certification</p>
              </div>
            </div>

            <p className="text-xl sm:text-3xl font-bold text-center sm:text-left">Hello {user.firstName}</p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="flex bg-[#C7C4D1] rounded-3xl p-3 gap-1 text-sm">
                <img src={work} alt="" />
                <p>Share</p>
              </div>
              <div className="flex bg-[#C7C4D1] rounded-3xl p-3 gap-1 text-sm">
                <img src={work} alt="" />
                <p>Hire Professional</p>
              </div>
              <div className="flex bg-[#C7C4D1] rounded-3xl p-3 gap-1 text-sm relative">
                <img src={book} alt="Icon 1" className="w-6 h-6" />
                <span className="absolute top-0 right-0 text-red-600 text-[12px] sm:text-[15px] font-bold px-1.5 py-0.5 rounded-full">
                  16
                </span>
              </div>
              <div className="flex bg-[#C7C4D1] rounded-3xl p-3 gap-1 text-sm">
                <img src={usser} alt="Icon 2" className="w-6 h-6" />
              </div>
            </div>
          </div>
        );
      case "/activities":
        return <h1 className="text-lg font-semibold">Your Activities</h1>;
      case "/department":
        return <h1 className="text-lg font-semibold">Department</h1>;
      default:
        return <h1 className="text-lg font-semibold">Page</h1>;
    }
  };

  return (
    <div className="w-full h-auto sm:h-[12vh] bg-[#E7E6ED] flex items-center px-4 py-2">
      {renderContent()}
    </div>
  );
};

export default PageHeader;
