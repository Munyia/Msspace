import { less, logo } from "../assets/res";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 md:mx-14 flex-wrap">
      <img src={logo} alt="" className="w-20 md:w-auto" />
      <div className="hidden md:flex gap-6 text-lg">
        <p>Certification</p>
        <p>Mentorship</p>
        <p>Professional</p>
        <p>Learning</p>
      </div>
      <div className="flex items-center border rounded-full bg-[#E7E6ED] p-2 text-center gap-2">
        <p className="text-sm md:text-base">Mssspace</p>
        <img className="w-3 md:w-2 aspect-square" src={less} alt="" />
      </div>
    </div>
  );
};

export default Header;
