import React from 'react'
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

const useGetLanguageState = () => {
  
    const chosenLanguages = useSelector( (state:RootState) => state.languageReducer)
  
    return (
        chosenLanguages
  )
}

export default useGetLanguageState;
