import React, { useEffect, useState } from 'react'
import PageWithPhotoWrapper from '../../components/PageWithPhotoWrapper';
import { EmptyRoom } from '../../utils/styles/commonStyles';
import CommonPopover from '../../components/CommonPopover';
import { cityDictionary } from '../../services/dictionaries';
import { apiDataFetcher } from '../../services/api';
import Loader from '../../components/Loader';

const CityPage = ():JSX.Element => {
 const [dictionary, setDictionary] = useState<any>({}); 
 const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    apiDataFetcher('dictionaries')
    .then( data => {
      data[0].data.map( (el:any) => {
          if (el.cityDictionary) {
              setDictionary(el.cityDictionary)
              setIsLoading(false);
              return
          }
      })
    })
  }, [])
 
if (isLoading) {
  return(
    <Loader/>
  )
}
  return (
    <PageWithPhotoWrapper>
      <EmptyRoom>
      <img className='img' src="/items/city.jpg" alt="city" />
      <CommonPopover left={0} top={0} word={dictionary.building}/>
      <CommonPopover left={395} top={560} word={dictionary.trafficlight}/>
      <CommonPopover left={670} top={695} word={dictionary.human}/>
      <CommonPopover left={560} top={660} word={dictionary.street}/>
      <CommonPopover left={1000} top={555} word={dictionary.road}/>
      <CommonPopover left={910} top={555} word={dictionary.car}/>
      </EmptyRoom>
    </PageWithPhotoWrapper>
  )
}

export default CityPage;