  /* eslint-disable react-hooks/rules-of-hooks */

  import React, { useState, useEffect } from "react";
  import { useParams } from 'react-router-dom';
  import Loader from "./loading/loader"
  import { faStar } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import './trneds.css';
  import {useStateContexts} from "../context/getcont"
  import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom";
        import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
  const insideSHow = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { id } = useParams()
    const [GetMAPiByIds, setGetMAPiByIds] = useState([])

    const { addFavShow, arrShow, removeFavShow,addFavwishlistShow,removeWishListShow,arrSShow} = useStateContexts()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [insideTv, setInsideTv] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const IndideTvs = async () => {
      const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
          }
        };
        try {
            await fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, options)
            .then(response => response.json())
            .then(response => { setInsideTv(response); setTimeout(() => {
              setIsLoading(false)
                }, 2000);
                })
        }catch (err) {
          console.log(err.messege)
        }
      
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useState(() => {
      IndideTvs()
    }, [isLoading])
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    const GetMovie = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
        }
      };
      
      try {
          await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`,options)
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
        // eslint-disable-next-line no-mixed-operators
        return  item.type.includes("Trailer") & item.name.includes((item.name.includes(insideTv.original_name || insideTv.title)? insideTv.original_name || insideTv.title:"Trailer"))
      })
      const all = filter.slice(0,1)
      const finish = all.map(res=>res.key)
    // console.log(GetMAPiByIds)
    // console.log()
    
      
    return (
      <div className="container">
        {isLoading ?
          < Loader />
          :
        <><img className="frontimgs" id="frontimg" src={`https://image.tmdb.org/t/p/original/${insideTv.backdrop_path}`} alt="" /><div className="hero">
            <div className="smals">
            <div className="arrowse">
          <Link to={"/thepotatomovies"}>
            <FontAwesomeIcon className="arrow" icon={faArrowLeft} />
          </Link>

        </div>
              <div className="smal">
                <img className="smallimg" src={`https://image.tmdb.org/t/p/w500/${insideTv.poster_path}`} alt="" />
                <div className="rarings">
                <div className="upe">
                                      <div className="wishlist">
                      <div className="heartsandbooks">
                        <FontAwesomeIcon   className={`heart ${arrShow.includes(insideTv.id) ? "clicked" : ""}`} onClick={() =>arrShow.includes(insideTv.id)?removeFavShow(insideTv.id):addFavShow(insideTv)} icon={faHeart} />
                        <FontAwesomeIcon  className={`book ${arrSShow.includes(insideTv.id) ? "clicked" : ""}`} onClick={() => arrSShow.includes(insideTv.id)?removeWishListShow(insideTv.id):addFavwishlistShow(insideTv)} icon={faBookmark} />
                      </div>
                                  </div>
                                      <div className="sta">
                                            <FontAwesomeIcon className="stars" icon={faStar} />
                                      <p className="rarr">{(insideTv.vote_average).toFixed(1)}/10</p>
                                      
                                  </div>
                            
                                  
                                  </div>
                  
                </div>
              </div>
              <div className="someofTitle">
                <h1 className="tagline">{insideTv.tagline}</h1>
              </div>
            </div>
            <div className="solidBlues"></div>
            <div className="alotOfTexts">
              <div className="thetitles">
                <h1 className="title">{insideTv.original_name || insideTv.title}</h1>
              </div>
              <div className="genrs">
                <p>{insideTv.genres?.[0].name}</p>
                <p>{insideTv.genres.length===1 ?"":<p>&</p>}</p>
                <p>{insideTv.genres.length===1 ?"":insideTv.genres?.[1].name}</p>
                <div className="dates">
                  <p className="dot">•</p>
                  <p>{parseInt(insideTv.release_date) || parseInt(insideTv.last_air_date)}</p>
                </div>
              </div>
              <div className="overview">
                <p className="overs">{insideTv.overview}</p>
              </div>
              <iframe src={`https://www.youtube.com/embed/${finish}`}title="title" className="iframs" allow="fullscreen;"/>

            </div>
          </div></>
        
  }
      </div>
    
    )
  }

  export default insideSHow
