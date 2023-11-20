import React, { useEffect } from 'react';
import './App.css';
import useGetLanguageState from './hooks/useGetLanguageState';
import ChoserLanguageModal from './components/Modals/ChoserLanguageModal';
import { navigationMenu } from './services/navigationData';
import useCommonDispatch from './hooks/useCommonDispatch';
import { setMotherLanguage, setLearningLanguage } from './redux/reducers/languageReducer';

import CardNavigation from './components/CardNavigation';

const App = ():JSX.Element => {

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
}, [])

if (languages.learningLanguage === "" || languages.motherLanguage === "") {
   return(
    <ChoserLanguageModal/>
   )
}
  return (
    <CardNavigation mappingArray={navigationMenu}/>
  );
}

export default App;
