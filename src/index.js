import "./index.scss"

import React, { StrictMode, Fragment } from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./app/store";

import { Nav } from "./components/Nav/Nav";
import { Login } from "./routes/Login/Login";
import { Error } from "./routes/Error/Error";
import { Home } from "./routes/Home/Home";
import { Movies } from "./routes/Movies/Movies";
import { TvSeries } from "./routes/TvSeries/TvSeries";
import { BookmarkedMovies } from "./routes/BookmarkedMovies/BookmarkedMovies";
import { SearchBar } from "./components/SearchBar/SearchBar";
 

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <Login />,
  //   errorElement: <Error />
  // },
  {
    path: "/",
    element: (
      <Fragment>
        <Nav />
        <SearchBar />
        <Home />
      </Fragment>
    ),
  },
  {
    path: "/movies",
    element: (
      <Fragment>
        <Nav />
        <SearchBar />
        <Movies />
      </Fragment>
    ),
  },
  {
    path: "/tvseries",
    element: (
      <Fragment>
        <Nav />
        <SearchBar />
        <TvSeries />
      </Fragment>
    ),
  },
  {
    path: "/bookmarkedmovies",
    element: (
      <Fragment>
        <Nav />
        <SearchBar />
        <BookmarkedMovies />
      </Fragment>
    ),
  },
]);



const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  <StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);