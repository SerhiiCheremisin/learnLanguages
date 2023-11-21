import React from 'react'
import PageWithPhotoWrapper from '../../components/PageWithPhotoWrapper';
import { EmptyRoom } from '../../utils/styles/commonStyles';
import CommonPopover from '../../components/CommonPopover';
import { cityDictionary } from '../../services/dictionaries';

const CityPage = ():JSX.Element => {
  return (
    <PageWithPhotoWrapper>
      <EmptyRoom>
      <img className='img' src="/items/city.jpg" alt="city" />
      <CommonPopover left={0} top={0} word={cityDictionary.building}/>
      <CommonPopover left={395} top={560} word={cityDictionary.trafficlight}/>
      <CommonPopover left={670} top={695} word={cityDictionary.human}/>
      <CommonPopover left={560} top={660} word={cityDictionary.street}/>
      <CommonPopover left={1000} top={555} word={cityDictionary.road}/>
      <CommonPopover left={910} top={555} word={cityDictionary.car}/>
      </EmptyRoom>
    </PageWithPhotoWrapper>
  )
}

export default CityPage;