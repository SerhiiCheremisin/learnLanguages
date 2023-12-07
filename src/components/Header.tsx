import React, { useEffect } from 'react';
import { HeaderStyled, HeaderBlockLinks , HeaderBlockLanguages } from '../utils/styles/commonStyles';
import { navigationMenu } from '../services/navigationData';
import { NavLink } from "react-router-dom";
import { navigationMenuType, categoriesTypes } from '../services/types';
import '../App.css';
import useGetLanguageState from '../hooks/useGetLanguageState';
import AvatarWithLanguage from './AvatarWithLanguage';
import { categories } from '../services/commonData';
import { setLearningLanguage, setMotherLanguage } from '../redux/reducers/languageReducer';
import useCommonDispatch from '../hooks/useCommonDispatch';
import ChoserLanguageModal from './Modals/ChoserLanguageModal';

const Header = ():JSX.Element => {
 const languages = useGetLanguageState();
 const dispatch = useCommonDispatch();
 
 useEffect( () => {
  const motherLang = localStorage.getItem("motherLanguage");
  const learningLang = localStorage.getItem("learningLanguage");
  if (motherLang !== null && learningLang !== null) {
    dispatch(setMotherLanguage(motherLang));
    dispatch(setLearningLanguage(learningLang));
    return
  }
   return
})

  return (
    <HeaderStyled>
      <HeaderBlockLanguages data-testid="choserMenu">
       <AvatarWithLanguage role={"mother" } language={languages.motherLanguage}/>
       <AvatarWithLanguage role={"learn"} language={languages.learningLanguage}/>
      </HeaderBlockLanguages>
      <HeaderBlockLinks data-testid="links">
      { navigationMenu.map( (path:navigationMenuType ) => {
       if (path.category === "main") {
        return null
       }
       return ( <NavLink key={path.path}
        to={path.path}
        className={({ isActive }) =>
           isActive ? "active" : "pending"
        }
      >
          { categories.map( (element: any) => {
         if (path.category === element.baseCategory) {
           return String(`${element[languages.motherLanguage]}`).toUpperCase();
         }
         return null
       }) }
      </NavLink> )
      }) }
      </HeaderBlockLinks>

    </HeaderStyled>
  )
}


export default Header;
