import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";

const store = configureStore({
  reducer: {
    // * reducers aquí
    app: rootReducer
  },
  // * otras opciones de configuración aquí
});


export { store };