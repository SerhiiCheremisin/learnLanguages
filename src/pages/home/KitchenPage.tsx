import React from 'react';
import { Setup, TrashCan, KitchenTable, Dishes } from '../../utils/styles/pagesStyles/kitchenStyles';
import CommonPopover from '../../components/CommonPopover';
import PageWithPhotoWrapper from '../../components/PageWithPhotoWrapper';
import { EmptyRoom } from '../../utils/styles/commonStyles';
import { kitchenDictionary } from '../../services/dictionaries';

const KitchenPage = ():JSX.Element  => {
  return (
    <PageWithPhotoWrapper>
      <EmptyRoom>
       <img className='img' src="/items/kitchen.jpg" alt="room itself" />
      </EmptyRoom>
      <Setup>
      <CommonPopover left={50} top={50} word={kitchenDictionary.refrigerator}/>
      <CommonPopover left={310} top={290} word={kitchenDictionary.stove}/>
      <CommonPopover left={475} top={290} word={kitchenDictionary.oven}/>
      <img className='img' src="/items/kitchensetup.png" alt="setup" />
      </Setup>
      <TrashCan>
      <CommonPopover left={80} top={25} word={kitchenDictionary.garbage}/>
      <CommonPopover left={80} top={150} word={kitchenDictionary.trashCan}/>
      <img className='img' src="/items/trashcan.png" alt="trash" />
      </TrashCan>
      <KitchenTable>
      <CommonPopover left={160} top={95} word={kitchenDictionary.table}/>
      <CommonPopover left={460} top={170} word={kitchenDictionary.chair}/>
      <img className='img' src="/items/kitchentable.png" alt="kithen table" />
      </KitchenTable>
      <Dishes>
       <CommonPopover left={100} top={80} word={kitchenDictionary.dishes}/>
      <img className='img' src="/items/dishes.png" alt="dishes" />
      </Dishes>
    </PageWithPhotoWrapper>
  )
}

export default KitchenPage;
