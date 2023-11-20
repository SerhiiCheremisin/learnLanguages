import React from 'react';
import { LearningScreenWrapper, ContainerZero } from '../utils/styles/commonStyles';


const PageWithPhotoWrapper = ( {children}:any ): JSX.Element => {
  return (
    <LearningScreenWrapper>
     <ContainerZero>
     { children }  
    </ContainerZero>     
    </LearningScreenWrapper>
  )
}

export default PageWithPhotoWrapper;
