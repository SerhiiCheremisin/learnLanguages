import React from 'react';
import PageWithPhotoWrapper from '../../components/PageWithPhotoWrapper';
import { Bed, Lamp, Wardrobe, Mirror } from '../../utils/styles/pagesStyles/badroomStyles';
import { EmptyRoom } from '../../utils/styles/commonStyles';
import '../../App.css';
import CommonPopover from '../../components/CommonPopover';
import { bedroomDictionary } from '../../services/dictionaries';

const BedRoomPage = ():JSX.Element  => {
  return (
    <PageWithPhotoWrapper>
    <EmptyRoom>
    <img className='img' src="/items/emptyroom.jpg" alt="room itself" />
    </EmptyRoom> 
    <Lamp>
     <CommonPopover left={185} top={35} word={bedroomDictionary.lamp}/> 
     <img className='img' src="/items/lamp.png" alt="floor lamp" />
    </Lamp>
    <Wardrobe>
    <CommonPopover left={53} top={280} word={bedroomDictionary.wardrobe}/>
     <img className='img' src="/items/wardrobe.png" alt="wardrobe" />
    </Wardrobe>
    <Bed>
    <CommonPopover left={100} top={180} word={bedroomDictionary.bed}/> 
    <CommonPopover left={190} top={80} word={bedroomDictionary.pillow}/> 
     <img className='img' src="/items/bed.png" alt="bed" />
    </Bed>
    <Mirror>
    <CommonPopover left={250} top={180} word={bedroomDictionary.mirror}/> 
    <img className='img' src="/items/mirror.png" alt="woman wardrobe" />
    </Mirror>
  </PageWithPhotoWrapper>
  )
}

export default BedRoomPage;
