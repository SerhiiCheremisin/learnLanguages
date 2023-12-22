import React, { useEffect, useState } from 'react'
import PageWithPhotoWrapper from '../../components/PageWithPhotoWrapper';
import { EmptyRoom } from '../../utils/styles/commonStyles';
import CommonPopover from '../../components/CommonPopover';
import { natureDictionary } from '../../services/dictionaries';
import { apiDataFetcher } from '../../services/api';
import Loader from '../../components/Loader';

const NaturePage = ():JSX.Element => {
 const [dictionary, setDictionary] = useState<any>({}); 
 const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    apiDataFetcher('dictionaries')
    .then( data => {
      data[0].data.map( (el:any) => {
          if (el.natureDictionary) {
              setDictionary(el.natureDictionary)
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
       <CommonPopover left={200} top={10} word={dictionary.sky}/>
       <CommonPopover left={1000} top={10} word={dictionary.cloud}/>
       <CommonPopover left={670} top={125} word={dictionary.mountain}/>
       <CommonPopover left={600} top={260} word={dictionary.tree}/>
       <CommonPopover left={800} top={430} word={dictionary.grass}/>
       <CommonPopover left={900} top={530} word={dictionary.water}/>
       <CommonPopover left={1250} top={700} word={dictionary.rock}/>
       <img className='img' src="/items/nature.jpg" alt="nature" />
      </EmptyRoom>
    </PageWithPhotoWrapper>
  )
}

export default NaturePage;