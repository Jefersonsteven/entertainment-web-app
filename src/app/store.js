import { configureStore } from "@reduxjs/toolkit";
import { gretting } from "./utilities/gretting";

const store = configureStore({
  reducer: {
    // * reducers aquí
    saludate: gretting
  },
  // * otras opciones de configuración aquí
});


export { store };