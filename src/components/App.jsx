import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { text } from "../app/action";


const App = () => {
   const p = useSelector(({app}) => app.gretting);
   const inputValue = useSelector((state) => state.app.inputValue);
   const dispatch = useDispatch();

   function handleInput(event) {
      dispatch(text(event));
   }

   function handleSubmit(event) {
      dispatch({ type: inputValue });
      event.preventDefault();
      console.log(inputValue);
   }

   return(
      <Fragment>
         <p>{p}</p>
         <form action="" onSubmit={handleSubmit}>
            <input
               type="text"
               onChange={handleInput}
               value={inputValue}
            />
            <button>
               Change
            </button>
            <p>{inputValue}</p>
         </form>
      </Fragment>
   )
}

export { App }