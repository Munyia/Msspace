import { less, logo } from "../assets/res"


const Header = () => {
  return (
    <div className="flex mx-14 py-4 justify-between">
      <img src={logo}alt="" />
      <div className="flex gap-6 text-lg justify-between">
        <p>Certification</p>
        <p>Mentorship</p>
        <p>Professional</p>
        <p>Learning</p>
      </div>
      <div className="flex items-center border rounded-full bg-[#E7E6ED] p-2 text-center gap-2 justify-between">
        <p>Mssspace</p>
        <img className="w-2 aspect-square" src={less} alt="" />
      </div>
    </div>
  )
}

export default Header