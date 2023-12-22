import React, { useEffect, useState } from 'react';
import PageWithPhotoWrapper from '../../components/PageWithPhotoWrapper';
import { Bed, Lamp, Wardrobe, Mirror } from '../../utils/styles/pagesStyles/badroomStyles';
import { EmptyRoom } from '../../utils/styles/commonStyles';
import '../../App.css';
import CommonPopover from '../../components/CommonPopover';
import { bedroomDictionary } from '../../services/dictionaries';
import { apiDataFetcher } from '../../services/api';
import Loader from '../../components/Loader';

const BedRoomPage = ():JSX.Element  => {
  const [dictionary, setDictionary] = useState<any>({}); 
  const [isLoading, setIsLoading] = useState<boolean>(true);
 
   useEffect(() => {
     apiDataFetcher('dictionaries')
     .then( data => {
       data[0].data.map( (el:any) => {
           if (el.bedroomDictionary) {
               setDictionary(el.bedroomDictionary)
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
    <img className='img' src="/items/emptyroom.jpg" alt="room itself" />
    </EmptyRoom> 
    <Lamp>
     <CommonPopover left={185} top={35} word={dictionary.lamp}/> 
     <img className='img' src="/items/lamp.png" alt="floor lamp" />
    </Lamp>
    <Wardrobe>
    <CommonPopover left={53} top={280} word={dictionary.wardrobe}/>
     <img className='img' src="/items/wardrobe.png" alt="wardrobe" />
    </Wardrobe>
    <Bed>
    <CommonPopover left={100} top={180} word={dictionary.bed}/> 
    <CommonPopover left={190} top={80} word={dictionary.pillow}/> 
     <img className='img' src="/items/bed.png" alt="bed" />
    </Bed>
    <Mirror>
    <CommonPopover left={250} top={180} word={dictionary.mirror}/> 
    <img className='img' src="/items/mirror.png" alt="woman wardrobe" />
    </Mirror>
  </PageWithPhotoWrapper>
  )
}

export default BedRoomPage;
