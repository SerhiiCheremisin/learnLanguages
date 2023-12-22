import React, { useEffect, useState } from 'react';
import PageWithPhotoWrapper from '../../components/PageWithPhotoWrapper';
import { EmptyRoom } from '../../utils/styles/commonStyles';
import CommonPopover from '../../components/CommonPopover';
import { commonWords, livingRoomDictionary } from '../../services/dictionaries';
import { CoffeeTable, Sofa, TV, Laptop, Carpet, Socket, Plant } from '../../utils/styles/pagesStyles/livingRoomStyles';
import { apiDataFetcher } from '../../services/api';
import Loader from '../../components/Loader';

const LivingRoomPage = ():JSX.Element  => {

  const [dictionary, setDictionary] = useState<any>({}); 
  const [isLoading, setIsLoading] = useState<boolean>(true);
 //left here using local dict on porpuse

  return (
    <PageWithPhotoWrapper>
     <EmptyRoom>
     <CommonPopover left={255} top={270} word={livingRoomDictionary.window}/>
     <img className='img' src="/items/livingroom.png" alt="room itself" />
     </EmptyRoom>
     <CoffeeTable>
      <CommonPopover left={200} top={230} word={livingRoomDictionary.table}/>
     <img className='img' src="/items/coffeeTable.png" alt="coffeeTable" />
     </CoffeeTable>
     <Laptop>
     <CommonPopover left={105} top={10} word={livingRoomDictionary.laptop}/>
     <img className='img' src="/items/laptop.png" alt="laptop" />
     </Laptop>
     <Sofa>
     <CommonPopover left={250} top={195} word={livingRoomDictionary.sofa}/>
     <img className='img' src="/items/sofa.png" alt="sofa" />
     </Sofa>
     <TV>
     <CommonPopover left={250} top={195} word={livingRoomDictionary.tv}/>
     <img className='img' src="/items/tv.png" alt="tv" />
     </TV>
     <Carpet>
     <CommonPopover left={250} top={100} word={livingRoomDictionary.carpet}/>
     <img className='img' src="/items/carpet.png" alt="carpet" />
     </Carpet>
     <Socket>
     <CommonPopover left={30} top={0} word={livingRoomDictionary.socket}/>
     <img className='img' src="/items/socket.png" alt="socket" />
     </Socket>
     <Plant>
     <CommonPopover left={90} top={240} word={livingRoomDictionary.plant}/>
     <img className='img' src="/items/plant.png" alt="plant" />
     </Plant>
  </PageWithPhotoWrapper>
  )
}

export default LivingRoomPage;