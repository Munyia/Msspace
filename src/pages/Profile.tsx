import { last, scope } from "../assets/res";
import { user } from "../data/User";
import { FaStar } from "react-icons/fa";

const selectedCategory = "Consultancy";
const ratingData = user.ratings.find((r) => r.category === selectedCategory);
const rating = ratingData ? ratingData.rating : 0;

const Profile = () => {
  return (
    <div className="bg-[#DFDDE5] scrollbar-hide gap-5 overflow-y-auto flex justify-between rounded-3xl ">
      <div className="py-10 w-[35%] flex flex-col items-center gap-3">
      <img src={user.image} alt="" className="mx-auto px-5" />

      <div className="flex flex-col text-center px-5 gap-2">
    <p className="text-3xl font-bold mx-auto">{user.firstName} {user.lastName}</p>
    <p className="text-lg mx-auto">Consultant</p>
  </div>

  <div className="w-full  bg-white rounded-lg p-4 ml-4 px-5 flex flex-col gap-2">
    <p className="text-lg font-semibold mx-auto">Rank</p>
    <div className="flex justify-center  items-center gap-2 ">
      <p className="text-[#B78B23] pr-3">Expert</p>
      <div className="flex justify-center items-center space-x-2">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`w-6 h-6 ${index + 1 === rating ? "text-[#B78B23]" : "text-gray-400"}`}
          />
        ))}
      </div>
    </div>
  </div>
        <div className="w-full h-[2px] bg-gray-400"></div>

        <div className="flex px-5 mx-auto mb-4  flex-col w-full">
          <div className="flex  mb-3 w-full justify-between">
            <p className="font-semibold w-[80%]">Experience</p>
            <button className="w-[20%] text-right">View</button>
          </div>
          <div>
          <div className="flex w-full justify-between">
          <p className="font-semibold w-[80%]">Food Safety Trainer </p>
            <p className="w-[20%] text-right">2 years</p>
          </div>
          <div className="flex w-[80%] flex-col   ">
            <p>Cway Nigeria</p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.{" "}
            </p>
          </div>

          </div>     
        </div>
        <div className="flex px-5 mx-auto  flex-col w-full">
          <div className="flex  mb-3 w-full justify-between">
            <p className="font-semibold w-[80%]">Experience</p>
            <button className="w-[20%] text-right">View</button>
          </div>
          <div>
          <div className="flex w-full justify-between">
          <p className="font-semibold w-[80%]">Food Safety Trainer </p>
            <p className="w-[20%] text-right">2 years</p>
          </div>
          <div className="flex w-[80%] flex-col   ">
            <p>Cway Nigeria</p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.{" "}
            </p>
          </div>

          </div>     
        </div>

      </div>

      <div className="flex  py-10  w-[65%]">
        <div className="bg-white  rounded-2xl">
          <div className="py-10 px-10 ">
            <p className="text-lg font-semibold pb-5">About me</p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the{" "}
            </p>
          </div>

          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className="px-10 py-5">
  <p className="font-semibold text-lg">Skills</p>
  <div className="flex gap-4 mt-4">
    {user.skills.map((skill, index) => (
      <div
        key={index}
        className="flex items-center flex-col p-3 w-1/4 text-sm py-5 rounded-lg shadow-md text-white"
        style={{ backgroundColor: skill.bgColor }}
      >
        <img src={skill.icon} alt={skill.name} className="w-6 h-6 mr-3" />
        <p>{skill.name}</p>
      </div>
    ))}
  </div>
</div>

   <div className="w-full h-[1px] bg-gray-300"></div>

          <div className="justify-between px-10 py-5 gap-4 w-full flex  ">
<div className=" flex flex-col w-1/2">
<div className="justify-between text-center items-center  py-4 flex ">
              <p className=" font-semibold text-lg">Scope of expertise</p>
              <p className="text-sm">View</p>
            </div>
            <div className="flex text-sm flex-col gap-3">
              <div className="bg-[#ECEAF2] py-3 gap-10 px-4 flex w-full rounded-3xl">
                <img src={scope}alt="" />
                <p>Food Safety</p>
              </div>
              <div className="bg-[#ECEAF2] py-3 gap-10 px-4 flex w-full rounded-3xl">
                <img src={scope}alt="" />
                <p>Risk Management and Assessment</p>
              </div>
              <div className="bg-[#ECEAF2] py-3 gap-10 px-4 flex w-full rounded-3xl">
                <img src={scope}alt="" />
                <p>Performance Management</p>
              </div>
            </div>
</div>
          
<div className=" flex flex-col w-1/2">
<div className="justify-between text-center items-center  py-4 flex ">
              <p className=" font-semibold text-lg">certification</p>
              <p className="text-sm">View</p>
            </div>
            <div className="flex text-base flex-col gap-3">
              <div className=" py-3 gap-2 px-4 flex w-full">
                <img src={last}alt="" />
                <div className="flex flex-col">
                <p className="font-semibold">Certificate of Completion </p>
                <p>Food Safety</p>
                </div>
              </div>
              <div className=" py-3  gap-2  px-4 flex w-full l">
                <img src={last}alt="" />
                <div className="flex flex-col">
                <p className="font-semibold">Certificate of Completion </p>
                <p>Food Safety</p>
                </div>
              </div>
              <div className=" py-3 gap-2  px-4 flex w-full ">
                <img src={last}alt="" />
                <div className="flex flex-col">
                <p className="font-semibold">Certificate of Completion </p>
                <p>Food Safety</p>
                </div>
              </div>
            </div>
</div>
          

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
