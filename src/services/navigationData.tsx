import { languageArrayType, navigationMenuType, ISecondNavigationMenu } from "./types";

import App from "../App";
import HomePage from "../pages/home/HomePage";
import CityPage from "../pages/city/CityPage";
import EducationPage from "../pages/education/EducationPage";
import NaturePage from "../pages/nature/NaturePage";

import KitchenPage from "../pages/home/KitchenPage";
import LivingRoomPage from "../pages/home/LivingRoomPage";
import BedRoomPage from "../pages/home/BedRoomPage";


export const navigationMenu : navigationMenuType[] = [
    { 
       category : "main",
       photo: "",
       path: "/",
       element: <App/>
    } ,
    { 
       category : "home",
       photo: "/categories/home.jpg",
       path: "/home",
       element: <HomePage/>
    },
    { 
       category : "city",
       photo: "/categories/city.jpg",
       path: "/city",
       element: <CityPage/>
    } ,
    { 
       category : "education",
       photo: "/categories/education.jpg",
       path: "/education",
       element: <EducationPage/>
    } ,
    { 
       category : "nature",
       photo: "/categories/nature.jpg",
       path: "/nature",
       element: <NaturePage/>
    } ,
   ]

export const navigationMenuSecondary : ISecondNavigationMenu[] = [
     { 
      parentCategory: "home",
      category : "kitchen",
      photo: "/categories/kitchen.jpg",
      path: "/home/kitchen",
      element: <KitchenPage/>
     },
     { 
      parentCategory: "home",
      category : "bedroom",
      photo: "/categories/bedroom.jpg",
      path: "/home/bedroom",
      element: <BedRoomPage/>
     },
     { 
      parentCategory: "home",
      category : "livingroom",
      photo: "/categories/livingroom.jpg",
      path: "/home/livingroom",
      element: <LivingRoomPage/>
     },
]