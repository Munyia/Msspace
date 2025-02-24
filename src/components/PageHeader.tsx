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
          <div className="flex justify-between items-center w-full px-4">
            {/* Left Section */}
            <div className="flex items-center gap-6">
              <div className="flex bg-[#C7C4D1] rounded-3xl p-3  gap-1 text-sm">
                <img src={work} alt="" />
                <p>WorkSpace </p>
              </div>
              <div className="flex bg-[#C7C4D1] rounded-3xl p-3  gap-1 text-sm">
                <img src={work} alt="" />
                <p>Training </p>
              </div>
              <div className="flex bg-[#C7C4D1] rounded-3xl p-3  gap-1 text-sm">
                <img src={work} alt="" />
                <p>Certification </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6">
  <p className="text-3xl font-bold">Hello {user.firstName}</p>
</div>

            <div className="flex items-center gap-4">
              <div className="flex bg-[#C7C4D1] rounded-3xl p-3  gap-1 text-sm">
                <img src={work} alt="" />
                <p>Share </p>
              </div>
              <div className="flex bg-[#C7C4D1] rounded-3xl p-3  gap-1 text-sm">
                <img src={work} alt="" />
                <p>Hire Professional </p>
              </div>
              <div className="flex bg-[#C7C4D1] rounded-3xl p-3 gap-1 text-sm relative">
  <img src={book} alt="Icon 1" className="w-6 h-6" />
  <span className="absolute top-0 right-0  text-red-600 text-[15px] font-bold px-1.5 py-0.5 rounded-full">
    16
  </span>
</div>

              <div className="flex bg-[#C7C4D1] rounded-3xl p-3  gap-1 text-sm">
                <img src={usser} alt="Icon 2" className="w-6 h-6" />
              </div>
            </div>
          </div>
        );
      case "/activities":
        return (
          <div>
            <h1 className="text-lg font-semibold">Your Activities</h1>
          </div>
        );
      case "/department":
        return (
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">Department</h1>
          </div>
        );
      default:
        return <h1 className="text-lg font-semibold">Page</h1>;
    }
  };

  return (
    <div className="w-full h-[12vh] bg-[#E7E6ED] flex items-center px-4 ">
      {renderContent()}
    </div>
  );
};

export default PageHeader;
