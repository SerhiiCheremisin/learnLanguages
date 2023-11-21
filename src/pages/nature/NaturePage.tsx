import React from 'react'
import PageWithPhotoWrapper from '../../components/PageWithPhotoWrapper';
import { EmptyRoom } from '../../utils/styles/commonStyles';
import CommonPopover from '../../components/CommonPopover';
import { natureDictionary } from '../../services/dictionaries';
const NaturePage = ():JSX.Element => {
  return (
    <PageWithPhotoWrapper>
      <EmptyRoom>
       <CommonPopover left={200} top={10} word={natureDictionary.sky}/>
       <CommonPopover left={1000} top={10} word={natureDictionary.cloud}/>
       <CommonPopover left={670} top={125} word={natureDictionary.mountain}/>
       <CommonPopover left={600} top={260} word={natureDictionary.tree}/>
       <CommonPopover left={800} top={430} word={natureDictionary.grass}/>
       <CommonPopover left={900} top={530} word={natureDictionary.water}/>
       <CommonPopover left={1250} top={700} word={natureDictionary.rock}/>
       <img className='img' src="/items/nature.jpg" alt="nature" />
      </EmptyRoom>
    </PageWithPhotoWrapper>
  )
}

export default NaturePage;