import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { store } from "../app/store";


const App = () => {
   const p = useSelector(state => state.saludate.gretting);
   const inputValue = useSelector(state => state.saludate.inputValue);

   // const [ inputValue, setInputValue ] = useState('');

   function handleInput(event) {
      store.dispatch({ type: 'text', inputValue: event.target.value })
   }

   return(
      <Fragment>
         <p>{p}</p>
         <input 
            type="text" 
            onChange={handleInput}
            value={inputValue}
         />
         <button onClick={() => {
            store.dispatch({type: inputValue})
         }}>
         Change
         </button>
      </Fragment>
   )
}

export { App }