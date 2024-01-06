/* eslint-disable react-hooks/rules-of-hooks */


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Loader from "../loading/loader"
import {useStateContexts} from "../../context/getcont"
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

import { useStateContext } from '../../context/getcontext'
import FilterYears from "../../movies/filteryears/filterYears";

const movies = () => {
    const [movieApi, setMovieApi] = useState([])
    const [text, setText] = useState("")
  const [number, setNumber] = useState(1)
  const [Year, setYear] = useState()
  const [isLoading, setIsLoading] = useState(true);
  // const {addFav,arr,removeFav,addFavwishlist,removeWishList,arrS } =useStateContexts()
  const { addFavShow, arrShow, removeFavShow,addFavwishlistShow,removeWishListShow,arrSShow} = useStateContexts()

  const [gener, setGener] = useState(0)

  const { tvgeners } = useStateContext()
    const MovieApis = async () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
            }
          };
          
        try{
            
          await fetch(
            `https://api.themoviedb.org/3/discover/tv?first_air_date_year=${Year}&include_adult=false&include_video=false&language=en-US&page=${number}&sort_by=popularity.desc` 
            , options)
                .then(response => response.json())
                .then(response => { setMovieApi(response.results); setTimeout(() => {
                  setIsLoading(false)
                     }, 2000);
                    })
        }catch(err){
        console.log(err.messege)
            
        }
            
        }
        // console.log((e)=>e.target.value)
        useEffect(() => {
        MovieApis()
        }, [text,number,tvgeners,gener,Year])
  /////////////////////////////////////////////we fix evreything///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(Year)
  return (
    <div>
      {isLoading ?
        
        < Loader  />
        :
        <div className="fogWaT7t">
          <div className="fog">
            <div className="input">
              <input type="text" onChange={(e) => setText(e.target.value) } value={text} className="in" placeholder="Search" />
              <Link to={`/series/${text}`}>
              <button className="btners">Search</button>
              </Link>
            </div>
            <div className="arrows">
              <Link to={"/thepotatomovies"}>
                <FontAwesomeIcon className="arrow" icon={faArrowLeft} />
              </Link>
              {/* <h1>Latest Movies:</h1> */}
            </div>
            <div className="btns">
              <button className={`bobo ${gener === 0 ? "active" : ""}`} onClick={() => setGener(0)}>All</button>
              {tvgeners.map(data => (
                <div className="alotbtn">
                                <Link to={`/series/gener/${data.id}`}>
                  <button key={data.id} className={`bobo ${gener === data.id ? "active" : ""}`} onClick={() => setGener(data.id)}>{data.name}</button>
                  </Link>
                  
                    <div>
                  
                  </div>
                </div>
                
              ))}
             
                < FilterYears text={text} setNumber={setNumber} setYear={setYear} gener={gener} />
                
            </div>
          
            
          </div>
          <div className="t7t">
            {movieApi.map((data, index) => (
              <>
                <div key={index} className="theT7t">
                  <Link to={`show/${data.id}`}>
                    <div className="imr">
                      <img alt="" className="imm" src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} />
                    </div>
                  </Link>
                        
                  <div className="upo">
                                    <div className="wishlist">
                      <div className="heartsandbooks">
                                    
                      <FontAwesomeIcon   className={`heart ${arrShow.includes(data.id) ? "clicked" : ""}`} onClick={() =>arrShow.includes(data.id)?removeFavShow(data.id):addFavShow(data)} icon={faHeart} />
                      <FontAwesomeIcon  className={`book ${arrSShow.includes(data.id) ? "clicked" : ""}`} onClick={() => arrSShow.includes(data.id)?removeWishListShow(data.id):addFavwishlistShow(data)} icon={faBookmark} />
                    </div>
                                </div>
                                    <div className="sta">
                                          <FontAwesomeIcon className="stars" icon={faStar} />
                                    <p className="rarr">{(data.vote_average).toFixed(1)}/10</p>
                                    
                                </div>
                          
                                
                                </div>
                  <Link to={`show/${data.id}`}>
                    <div>
                  
                      <p className="mr">{data.title || data.original_name}</p>
                    </div>
                  </Link>
                </div>
                    
              </>
            ))}
                
          </div>
        
          <div className="nums">
            
            <button className="one" id="minus" onClick={()=>setNumber(prev => prev === 1 ? 1 : --prev)}>prev</button>
          
          
          <p className="oneer">{number}</p>
        
            <button className="one" id="plus"   onClick={() => setNumber(prev => ++prev)}>next</button>
            
        </div>
        </div>
      }
    </div>
  )
 
}

export default movies
