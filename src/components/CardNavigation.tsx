import React from 'react'
import { CardHolder, CenteredBox } from '../utils/styles/commonStyles'
import { ISecondNavigationMenu, } from '../services/types'
import useGetLanguageState from '../hooks/useGetLanguageState'
import { useNavigate } from 'react-router'
import { Card, CardHeader, CardMedia } from '@mui/material'
import { categories } from '../services/commonData'


type CardNavigationProps = {
   mappingArray: object[]
}

const CardNavigation = ( {mappingArray} : CardNavigationProps ) => {

const languages = useGetLanguageState();
const navigate = useNavigate();

const cardHandler = (path:ISecondNavigationMenu):void => {
  navigate(`${path.path}`)
}

  return (
    <CenteredBox>
    <CardHolder>
    { mappingArray.map( (path: any) => {
      if (path.category === "main") {
        return null
      }
      return (
        <Card onClick={() => cardHandler(path)} sx={{ width: "350px", cursor: "pointer", transition: ".5s ease", "&:hover": {filter: "sepia(70%)"} }} key={path.path}>
          { categories.map( (element: any) => {
            if (path.category === element.baseCategory) {
              return <CardHeader key={element.baseCategory} title={element[languages.motherLanguage].toUpperCase()}/>
            }
            return null
          }) }
         <CardMedia
           component="img"
           height="200"
           image={path.photo}
           alt={`photo for ${path.category} category`}
         />  
          </Card>
      )
    }) }
    </CardHolder>
  </CenteredBox>
  )
}

export default CardNavigation;
