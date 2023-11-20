import React, { useEffect, useState } from 'react';
import { languagesArray } from '../services/commonData';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';
import { languageArrayType } from '../services/types';
import useCommonDispatch from '../hooks/useCommonDispatch';
import { setMotherLanguage, setLearningLanguage } from '../redux/reducers/languageReducer';
import useGetLanguageState from '../hooks/useGetLanguageState';
import { setLanguageToLocalStorage } from '../services/languageHandler';

type AvatarWithLanguageProps = {
    language : string,
    role: "mother" | "learn"
}

const AvatarWithLanguage = ( {language, role} : AvatarWithLanguageProps ):JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentLanguage, setCurrentLanguage] = useState<languageArrayType | null> (null);
  const open = Boolean(anchorEl);
  const dispatch = useCommonDispatch();
  const stateLanguages = useGetLanguageState();

  useEffect( () => {
    if (stateLanguages.motherLanguage === stateLanguages.learningLanguage) {
      dispatch(setLearningLanguage(""));
      setLanguageToLocalStorage("", "learn");
    }
    languagesArray.map( (element: languageArrayType) => {
    if (element.languge === language) {
      setCurrentLanguage(element);
    }
   })
  },[stateLanguages])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (element:languageArrayType) => {
    setAnchorEl(null);
   if (role === "mother") {
    if (element.languge === stateLanguages.learningLanguage) {
      dispatch(setMotherLanguage(element.languge));
      setLanguageToLocalStorage(element.languge, "mother");
      dispatch(setLearningLanguage(""));
      setLanguageToLocalStorage("", "learn");
      return;
    }
     dispatch(setMotherLanguage(element.languge));
     setLanguageToLocalStorage(element.languge, "mother");
     return;
   }
   else {
    if (element.languge === stateLanguages.motherLanguage) {
      dispatch(setMotherLanguage(""));
      setLanguageToLocalStorage("", "mother");
      dispatch(setLearningLanguage(element.languge));
      setLanguageToLocalStorage(element.languge, "learn");
    } 
    dispatch(setLearningLanguage(element.languge));
    setLanguageToLocalStorage(element.languge, "learn");
    return;
   }
  };
  const filter = languagesArray.filter( (el: languageArrayType) => el.languge !== language);


  return (
    <Box sx={{display: 'flex'}}>
       <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        { role === 'mother' ? `${currentLanguage?.titleInit}` : `${currentLanguage?.titleSecondary}` }
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      { filter.map( (item: languageArrayType) =>  {
        return <MenuItem key={item.languge} onClick={() => handleClose(item)}>{item.languge}</MenuItem>
      } ) }
      </Menu>  
      { languagesArray.map( (element:languageArrayType) => {
             if (element.languge === language) {
              return  <Avatar key={element.titleFull} alt={element.titleFull} src={element.img} />
             }
             return null
        }) } 
    </Box>
  )
}

export default AvatarWithLanguage;
