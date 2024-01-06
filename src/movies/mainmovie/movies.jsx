/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Loader from "../loading/Loader"
import {useStateContexts} from "../../context/getcont"
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import FilterYears from "../filteryears/filterYears";

import "../movie.css"
const movies = () => {

  const {addFav,arr,removeFav,addFavwishlist,removeWishList,arrS } =useStateContexts()

    const [movieApi, setMovieApi] = useState([])
  const [text, setText] = useState("")
  
  const [number, setNumber] = useState(1)
  const [Year, setYear] = useState()
  const [isLoading, setIsLoading] = useState(true);
  const [gener, setGener] = useState(0)
  // const [generTwo, setGenerTwo] = useState(0||gener)

  
    const [geners,setGeners] = useState([])
    const Geners = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
        }
      };
      try {
        await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
        .then(response => response.json())
        .then(response => setGeners(response.genres))
        
      } catch (err) {
        console.log(err.messege)
      }
      
  }
  // console.log(geners)
    useEffect(() => {
      Geners()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // console.log(text)
    const MovieApis = async () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
            }
          };
          
        try{
            
          await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${number}&primary_release_year=${Year}&sort_by=popularity.desc` , options)
                .then(response => response.json())
            .then(response => { setMovieApi(response.results); setTimeout(() => {
              setIsLoading(false)
                 }, 1000);
          })
                
        }catch(err){
        console.log(err.messege)
            
        }
            
        }
        // console.log((e)=>e.target.value)
        useEffect(() => {
          MovieApis()
          
        }, [number,gener,geners,isLoading,gener,Year])
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // console.log(gener)
 
  
  return (
    <div>
       {isLoading ? 
        
          < Loader />
  :
        <div className="fogWaT7t">
          <div className="fog">
            <div className="input">
              <input type="text" onChange={(e) => setText(e.target.value)} value={text} className="in" placeholder="Search......" />
              <Link to={`/movies/${text}`}>
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
            <Link to={"/movies"}>
              <button className={`bobo ${gener === 0 ? "active" : ""}`} onClick={() => setGener()}>All</button>
              </Link>
                {geners.map(data => (
                    

                  <div className="alotbtn">

                      
                                              <Link to={`/movies/gener/${data.id}`}>
                  <button key={data.id} className={`bobo ${gener === data.id ? "active" : ""}`} onClick={(e) => setGener(data.id)}>{data.name}</button>
                  </Link>
                      <div>
                  
                  </div>
                  </div>
                  
                
              ))}
              
                < FilterYears text={text} setNumber={setNumber}  setYear={setYear} gener={gener} />
                
            </div>
          
            
          </div>
          <div className="t7t">
            {movieApi.map((data, index) => (
              <>
                <div key={index} className="theT7t">
                  <Link to={`movie/${data.id}`}>
                    <div className="imr">
                      <img alt="" className="imm" src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} />
                    </div>
                  </Link>
                        
                  <div className="upo">
                                    <div className="wishlist">
                                    <div className="heartsandbooks">
                      <FontAwesomeIcon   className={`heart ${arr.includes(data.id) ? "clicked" : ""}`} onClick={() =>arr.includes(data.id)?removeFav(data.id):addFav(data)} icon={faHeart} />
                      <FontAwesomeIcon  className={`book ${arrS.includes(data.id) ? "clicked" : ""}`} onClick={() => arrS.includes(data.id)?removeWishList(data.id):addFavwishlist(data)} icon={faBookmark} />
                    </div>
                                </div>
                                    <div className="sta">
                                          <FontAwesomeIcon className="stars" icon={faStar} />
                                    <p className="rarr">{(data.vote_average).toFixed(1)}/10</p>
                                    
                                </div>
                          
                                
                                </div>
                  
                  <Link to={`movie/${data.id}`}>
                    <div>
                  
                      <p className="mr">{data.title || data.original_name}</p>
                    </div>
                  </Link>
                </div>
                    
              </>
            ))}
                
          </div>
        
          
            {/* < Clicks setNumber={setNumber} gener={gener} number={number} text={text} /> */}
            <div>
            <div className="nums">
            
                <button className="one" id="minus" onClick={()=>setNumber(prev => prev === 1 ? 1 : --prev)}>prev</button>
              
              
              <p className="oneer">{number}</p>
            
                <button className="one" id="plus"   onClick={() => setNumber(prev => ++prev)}>next</button>
                
            </div>
            </div>
         
             
            {/* {<ClicksTwo numberTwo={numberTwo} text={text} setNumberTwo={setNumberTwo} />} */}
        </div>
      }
    </div>
  )
 
}

export default movies
