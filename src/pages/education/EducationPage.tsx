import React from 'react'
import PageWithPhotoWrapper from '../../components/PageWithPhotoWrapper';
import { EmptyRoom } from '../../utils/styles/commonStyles';
import CommonPopover from '../../components/CommonPopover';
import { classDictionary } from '../../services/dictionaries';

const EducationPage = ():JSX.Element => {
  return (
    <PageWithPhotoWrapper>
      <EmptyRoom>
      <img className='img' src="/items/class.jpg" alt="education" />
      <CommonPopover left={1175} top={150} word={classDictionary.letter}/>
      <CommonPopover left={1590} top={120} word={classDictionary.clock}/>
      <CommonPopover left={1175} top={295} word={classDictionary.photo}/>
      <CommonPopover left={810} top={230} word={classDictionary.poster}/>
      <CommonPopover left={650} top={440} word={classDictionary.desk}/>
      <CommonPopover left={1185} top={430} word={classDictionary.bag}/>
      <CommonPopover left={815} top={577} word={classDictionary.notebook}/>
      </EmptyRoom>
    </PageWithPhotoWrapper>
  )
}

export default EducationPage;