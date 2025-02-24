import { profile, skill } from "../assets/res";

export interface Skill {
  name: string;
  icon: string;
  bgColor: string;
}

export interface Rating {
  category: string;
  rating: number; 
}

export interface User {
  firstName: string;
  lastName: string;
  title: string;
  rank: string;
  image: string;
   ratings: Rating[];
  skills: Skill[];
}

export const user: User = {
  firstName: "Feyisara ",
  lastName: "Ogunranti",
  title: "Consultant",
  rank: "Senior Developer",
  image: profile, 
  ratings: [
    { category: "Consultancy", rating: 4 },
    { category: "Teaching", rating: 3 },
    { category: "Project Management", rating: 5 },
  ],
  skills: [
    { name: "Auditing", icon: skill, bgColor: "#136783" },
    { name: "Leadership", icon: skill, bgColor: "#874465" },
    { name: "Team Management", icon: skill, bgColor: "#E6881B" },
    { name: "Problem Solving", icon: skill, bgColor: "#883039" },
   
  ],
};
