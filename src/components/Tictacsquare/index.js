import React from 'react';


function TicTacsquare(props){
  return(
    <button
    className='sqaure'
    onClick={props.onclick}>
      {props.value}
    </button>
  );
}

export default TicTacsquare; 