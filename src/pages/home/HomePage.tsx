import React from 'react'
import { navigationMenuSecondary } from '../../services/navigationData'
import CardNavigation from '../../components/CardNavigation'

const HomePage = ():JSX.Element => {
  
  return (
   <CardNavigation mappingArray={navigationMenuSecondary}/>
  )
}

export default HomePage;