/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState, useEffect } from "react";
import { GetApiById } from "../../api/getApiByid"
import { useParams } from 'react-router-dom';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useStateContexts} from "../../context/getcont"
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './inside.css';
import Loader from "../loading/Loader"
import { Link } from "react-router-dom";
        import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const insideMovies = () => {
  const { id } = useParams()
  const [GetAPiByIds, setGetAPiByIds] = useState([])
  const [GetMAPiByIds, setGetMAPiByIds] = useState([])
  const {addFav,arr,removeFav,addFavwishlist,removeWishList,arrS } =useStateContexts()

  const [isLoading, setIsLoading] = useState(true);
  // const res = GetAPiByIds.genres.map(res => res)
// console.log(GetMAPiByIds)
    const GetAPiByIdser = async () => {
      const key = "01a50d90a609598da2b24813512d62da"
      try {
          await fetch(`${GetApiById}/${id}?api_key=${key}`)
        .then(response => response.json())
        .then(response => { setGetAPiByIds(response); setTimeout(() => {
          setIsLoading(false)
             }, 2000);
        })
        
            
        
        
      }catch (err) {
        console.log(err.messege)
      }
     
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    GetAPiByIdser()
  }, [isLoading])
  ////////////////////////////////////////////////////////////////////////
const GetMovie = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
    }
  };
  
  try {
      await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,options)
    .then(response => response.json())
    .then(response => { setGetMAPiByIds(response.results); 
    })
    
        
    
    
  }catch (err) {
    console.log(err.messege)
  }
 
}
// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
  GetMovie()
}, [isLoading])
  const aname = GetMAPiByIds?.map(res =>res)
  // const names = name.map(res=>res)
  // console.log(GetAPiByIds.original_title || GetAPiByIds.title)
  const filter = aname?.filter((item) => {
    return  item.type.includes("Trailer") & item.name.includes((item.name.includes(GetAPiByIds.title)?GetAPiByIds.title :"Trailer" )) && item.official===true
  })
  const all = filter.slice(0,1)
  const finish = all.map(res=>res.key)
  console.log(filter)
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    
    <div className="container">
      {isLoading ? <Loader /> :
        <><><img className="frontimgs" id="frontimg" src={`https://image.tmdb.org/t/p/original/${GetAPiByIds.backdrop_path}`} alt="" /><div className="hero">
          <div className="smals">
          <div className="arrowse">
          <Link to={"/thepotatomovies"}>
            <FontAwesomeIcon className="arrow" icon={faArrowLeft} />
          </Link>

        </div>
            <div className="smal">
              <img className="smallimg" src={`https://image.tmdb.org/t/p/w500/${GetAPiByIds.poster_path}`} alt="" />
              <div className="rarings">
                <div className="upe">
                  <div className="wishlist">
                    <div className="heartsandbooks">
                      <FontAwesomeIcon className={`heart ${arr.includes(GetAPiByIds.id) ? "clicked" : ""}`} onClick={() => arr.includes(GetAPiByIds.id) ? removeFav(GetAPiByIds.id) : addFav(GetAPiByIds)} icon={faHeart} />
                      <FontAwesomeIcon className={`book ${arrS.includes(GetAPiByIds.id) ? "clicked" : ""}`} onClick={() => arrS.includes(GetAPiByIds.id) ? removeWishList(GetAPiByIds.id) : addFavwishlist(GetAPiByIds)} icon={faBookmark} />
                    </div>
                  </div>
                  <div className="sta">
                    <FontAwesomeIcon className="stars" icon={faStar} />
                    <p className="rarr">{(GetAPiByIds.vote_average).toFixed(1)}/10</p>

                  </div>


                </div>

              </div>
            </div>
            <div className="someofTitle">
              <h1 className="tagline">{GetAPiByIds.tagline}</h1>



            </div>
          </div>
          <div className="solidReds"></div>
          <div className="alotOfTexts">
            <div className="thetitles">
              <h1 className="title">{GetAPiByIds.original_title || GetAPiByIds.title}</h1>
            </div>
            <div className="genrs">
              <p>{GetAPiByIds.genres?.[0].name}</p>
              <p>{GetAPiByIds.genres.length === 1 ? "" : <p>&</p>}</p>
              <p>{GetAPiByIds.genres.length === 1 ? "" : GetAPiByIds.genres?.[1].name}</p>


              <div className="dates">
                <p className="dot">•</p>
                <p>{parseInt(GetAPiByIds.release_date)}</p>
                <p className="dot">•</p>
                {/* <a href={`https://www.youtube.com/watch?v=${finish}`}>click</a> */}
                {/* <button onClick={`https://www.youtube.com/watch?v=${finish}`}>click</button> */}

              </div>
            </div>
            <div className="overview">

              <p className="overs">{GetAPiByIds.overview}</p>

            </div>
            <iframe src={`https://www.youtube.com/embed/${finish}`} title="title" className="iframs" allow="fullscreen;" />
          </div>
        </div></></>

    }
    </div>
    
  )
}

export default insideMovies
