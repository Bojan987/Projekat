import React from "react";

import {Flippycomponent} from './FlippyComponent.jsx'


export const SingleField = ({ toggleJuggKill, isDead }) => {

  return (
    <td>
      <Flippycomponent toggleJuggKill={toggleJuggKill} isDead={isDead} />
    </td>
 
  );
};
