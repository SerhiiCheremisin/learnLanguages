import React, { useEffect, useState } from 'react';
import { Setup, TrashCan, KitchenTable, Dishes } from '../../utils/styles/pagesStyles/kitchenStyles';
import CommonPopover from '../../components/CommonPopover';
import PageWithPhotoWrapper from '../../components/PageWithPhotoWrapper';
import { EmptyRoom } from '../../utils/styles/commonStyles';
import { kitchenDictionary } from '../../services/dictionaries';
import { apiDataFetcher } from '../../services/api';
import Loader from '../../components/Loader';

const KitchenPage = ():JSX.Element  => {

  const [dictionary, setDictionary] = useState<any>({}); 
  const [isLoading, setIsLoading] = useState<boolean>(true);
 
   useEffect(() => {
     apiDataFetcher('dictionaries')
     .then( data => {
       data[0].data.map( (el:any) => {
           if (el.kitchenDictionary) {
               setDictionary(el.kitchenDictionary)
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
       <img className='img' src="/items/kitchen.jpg" alt="room itself" />
      </EmptyRoom>
      <Setup>
      <CommonPopover left={50} top={50} word={dictionary.refrigerator}/>
      <CommonPopover left={310} top={290} word={dictionary.stove}/>
      <CommonPopover left={475} top={290} word={dictionary.oven}/>
      <img className='img' src="/items/kitchensetup.png" alt="setup" />
      </Setup>
      <TrashCan>
      <CommonPopover left={80} top={25} word={dictionary.garbage}/>
      <CommonPopover left={80} top={150} word={dictionary.trashCan}/>
      <img className='img' src="/items/trashcan.png" alt="trash" />
      </TrashCan>
      <KitchenTable>
      <CommonPopover left={160} top={95} word={dictionary.table}/>
      <CommonPopover left={460} top={170} word={dictionary.chair}/>
      <img className='img' src="/items/kitchentable.png" alt="kithen table" />
      </KitchenTable>
      <Dishes>
       <CommonPopover left={100} top={80} word={dictionary.dishes}/>
      <img className='img' src="/items/dishes.png" alt="dishes" />
      </Dishes>
    </PageWithPhotoWrapper>
  )
}

export default KitchenPage;
