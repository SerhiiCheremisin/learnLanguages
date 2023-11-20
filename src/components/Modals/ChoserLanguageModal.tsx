import React from 'react';

import { ModalStyled } from '../../utils/styles/commonStyles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import { languagesArray } from '../../services/commonData';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import useCommonDispatch from '../../hooks/useCommonDispatch';
import useGetLanguageState from '../../hooks/useGetLanguageState';
import { setMotherLanguage, setLearningLanguage } from '../../redux/reducers/languageReducer';
import { setLanguageToLocalStorage } from '../../services/languageHandler';

const ChoserLanguageModal = ():JSX.Element  => {

  const languages = useGetLanguageState();
  const dispatch = useCommonDispatch();

const languageHandler = (lang:string, type: "mother" | "learn" ):void => {
   if (type === "mother") {
    setLanguageToLocalStorage(lang, type);
    dispatch(setMotherLanguage(lang));
    return
   }
   dispatch(setLearningLanguage(lang));
   setLanguageToLocalStorage(lang, type);
   return
}

if (languages.motherLanguage === "") {
  return (
    <ModalStyled>
        <List>
    { languagesArray.map( ( element ) => {
      return (
          <ListItem onClick={() => languageHandler(element.languge, "mother")} disablePadding key={element.languge}>
            <ListItemButton>
            <ListItemIcon>
            <Avatar alt="contry flag" src={element.img} />
            </ListItemIcon>
            <ListItemText primary={element.titleInit} />
          </ListItemButton>
           </ListItem>
      )
    } )}
  </List>
    </ModalStyled>
  )
}

  return (
    <ModalStyled sx={{flexDirection: "column"}}>
      { languagesArray.map( (element) => {
        if (element.languge === languages.motherLanguage) {
          return ( 
           <h2 key={element.languge}>{element.titleSecondary}</h2>
          )
        }
      }) }
        <List>
    { languagesArray.map( ( element ) => {
       if (element.languge !== languages.motherLanguage) {
        return (
          <ListItem onClick={() => languageHandler(element.languge, "learn")} disablePadding key={element.languge}>
            <ListItemButton>
            <ListItemIcon>
            <Avatar alt="contry flag" src={element.img} />
            </ListItemIcon>
            <ListItemText primary={element.titleFull} />
          </ListItemButton>
           </ListItem>
      )
       }
    } )}
  </List>
    </ModalStyled>
  )
}

export default ChoserLanguageModal;
