import React from "react";

import {Flippycomponent} from './FlippyComponent.jsx'
import { useMediaQuery } from 'react-responsive'

export const SingleField = ({ toggleJuggKill, isDead }) => {

  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-device-width: 1224px)'
  // })
  // const isBigScreen = useMediaQuery({ query: '(min-device-width: 1224px)' })
  
  // const isTabletOrMobileDevice = useMediaQuery({query: '(max-width: 1224px)'})
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  
  // const isMobile=useMediaQuery({ query: '(max-device-width: 800px)'})
  return (
    <td>
    <Flippycomponent toggleJuggKill={toggleJuggKill} isDead={isDead} />
    </td>
 
  );
};
