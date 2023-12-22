import React, { useState , useEffect } from 'react'
import PageWithPhotoWrapper from '../../components/PageWithPhotoWrapper';
import { EmptyRoom } from '../../utils/styles/commonStyles';
import CommonPopover from '../../components/CommonPopover';
import { classDictionary } from '../../services/dictionaries';
import Loader from '../../components/Loader';
import { apiDataFetcher } from '../../services/api';

const EducationPage = ():JSX.Element => {
 const [dictionary, setDictionary] = useState<any>({}); 
 const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    apiDataFetcher('dictionaries')
    .then( data => {
      data[0].data.map( (el:any) => {
          if (el.classDictionary) {
              setDictionary(el.classDictionary)
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
      <img className='img' src="/items/class.jpg" alt="education" />
      <CommonPopover left={1175} top={150} word={dictionary.letter}/>
      <CommonPopover left={1590} top={120} word={dictionary.clock}/>
      <CommonPopover left={1175} top={295} word={dictionary.photo}/>
      <CommonPopover left={810} top={230} word={dictionary.poster}/>
      <CommonPopover left={650} top={440} word={dictionary.desk}/>
      <CommonPopover left={1185} top={430} word={dictionary.bag}/>
      <CommonPopover left={815} top={577} word={dictionary.notebook}/>
      </EmptyRoom>
    </PageWithPhotoWrapper>
  )
}

export default EducationPage;