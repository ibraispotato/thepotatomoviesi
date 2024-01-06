import React from "react";
import './App.css';
import { useState } from "react";
import TrendApi from "./movies/mainpageofmovies/trendApi.jsx";
import FrontPage from "./movies/frontpage/frontPage.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GetContext } from "./context/getcontext"


import InsideMovies from "./movies/insidethremovie/insideMovies.jsx";
import Movie from "./movies/mainmovie/movies.jsx"
import Shows from "./tvshows/mainShows/shows.jsx"
import TrendShow from "./tvshows/trendShow"
import {GetCont} from "./context/getcont.jsx"

import InsideShow from "./tvshows/insidetv"
import RollMovies from "./movies/filtergeners/rollMovies.jsx"
import FilterGeners from "./movies/filtergeners/filtersgeners.jsx"
import FavMovies from "./movies/insidethremovie/favinside.jsx"
import WishList from "./movies/insidethremovie/insidewishlist.jsx"
import Search from "./movies/search/search.jsx"
import RollShows from "./tvshows/filtergeners/rollshows.jsx"
import FilterGenersShows from "./tvshows/filtergeners/filtergenersshow.jsx"
import SearchShows from "./tvshows/searchshows.jsx/searchshow.jsx"
function App() {
  const [show, setShow] = useState(false)

 
  return (
    <div>
      <Router>
      <GetContext>
      <GetCont>
            <Routes>
              <Route path="/thepotatomovies" element={show ? <TrendShow setShow={setShow} /> : <TrendApi setShow={setShow} />} />
              <Route path="thepotatomovies/movie/:id" element={<InsideMovies />} />
              <Route path="/movies" element={<Movie />} />
              <Route path="/movies/gener/:generes" element={<RollMovies />} />
              <Route path="/movies/gener/:generes/movie/:id" element={<InsideMovies />} />
              <Route path="/series/gener/:generes/show/:id" element={<InsideShow />} />
              <Route path="movies/movie/:id" element={<InsideMovies />} />
              <Route path="movies/page/:page/movie/:id" element={<InsideMovies />} />
              <Route path="movies/page/gener/:generes/:page/movie/:id" element={<InsideMovies />} />
              <Route path="movies/:search/movie/:id" element={<InsideMovies />} />
              <Route path="series/page/gener/:gen/:page/show/:id" element={<InsideShow />} />
              <Route path="series/:search/show/:id" element={<InsideShow />} />
              <Route path="movies/:search" element={<Search />} />
              <Route path="/movies/page/gener/:generes/:pages" element={<FilterGeners />} />
              <Route path="/favorite" element={<FavMovies />} />
              <Route path="favorite/movie/:id" element={<InsideMovies />} />
              <Route path="wishlist/movie/:id" element={<InsideMovies />} />
              <Route path="/series" element={<Shows />} />
              <Route path="/series/gener/:gen" element={<RollShows />} />
              <Route path="shows/page/gener/:generes/:page/show/:id" element={<InsideShow />} />
              <Route path="thepotatomovies/show/:id" element={<InsideShow />} />
              <Route path="series/show/:id" element={<InsideShow />} />
              <Route path="series/:search" element={<SearchShows />} />
              <Route path="wishlist" element={<WishList />} />
              <Route path="favorite/show/:id" element={<InsideShow />}/>
              <Route path="wishlist/show/:id" element={<InsideShow />}/>
              <Route path="/shows/page/gener/:gen/:pages" element={<FilterGenersShows />} />
            </Routes>
            </GetCont>
            </GetContext>
          
      
      </Router>
    </div>
    
  );
}

export default App;
