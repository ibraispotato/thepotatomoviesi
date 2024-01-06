/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'
import { useStateContext } from '../../context/getcontext'
import { useStateContexts } from '../../context/getcont'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'


import '../trneds.css';

uuidv4()

function FrontPage() {
  const {topTv} = useStateContext()
  const [Upcome, setUPCome] = useState([])
  const [showTwo,SetSHowTwo] = useState(false)
  

  const { addFavShow, arrShow, removeFavShow,addFavwishlistShow,removeWishListShow,arrSShow} = useStateContexts()
// console.log(addWishListShow)
  const [show,SetSHow] = useState(false)
 
  const [topTvs, setTopTvs] = useState([])
  const TopTvs = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
      }
    };
    try {
        await fetch(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${2}`, options)
      .then(response => response.json())
      .then(response => setTopTvs(response.results))
    } catch (err) {
      console.error(err.messege)
      }
    
  }
  useState(() => {
    TopTvs()
  }, [])
  const UpcomeShows = async () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
        }
      };
      
    try{
        
      await fetch(
        `https://api.themoviedb.org/3/discover/tv?first_air_date_year=${2024}&include_adult=false&include_video=false&language=en-US&page=${1}&sort_by=popularity.desc` 
        , options)
            .then(response => response.json())
            .then(response => { setUPCome(response.results);
                })
    }catch(err){
    console.log(err.messege)
        
    }
        
    }
    // console.log((e)=>e.target.value)
    useEffect(() => {
    UpcomeShows()
    }, [])
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [UpcomeTwo, setUPComeTwo] = useState([])
  // console.log(UpcomeTwo)
  const UpcomeShowsTwo = async () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
        }
      };
      
    try{
        
      await fetch(
        `https://api.themoviedb.org/3/discover/tv?first_air_date_year=${2024}&include_adult=false&include_video=false&language=en-US&page=${2}&sort_by=popularity.desc` 
        , options)
            .then(response => response.json())
            .then(response => { setUPComeTwo(response.results);
                })
    }catch(err){
    console.log(err.messege)
        
    }
        
    }
    // console.log((e)=>e.target.value)
    useEffect(() => {
      UpcomeShowsTwo()
    }, [])
  return (
 
  <div className="out">
  <div className="upser">
      
      <div className="solidReder"></div>
      <h3 className="trendTexts">Top Rated</h3>
  </div>
  <div className="outsidewrap">
  <div className="insideWrap">
    <div className="outsidewrapT">
      
      {topTv.map((data, index) => (
    
        <div className="indidewrap" key={index}>
          <Link to={`show/${data.id}`}>
      <div className="imoges">
      <div className="imoge">
          
            <p className="da">{parseInt(data.first_air_date)}</p>
        <img className="im" alt="" src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} />
        
      </div>
        
            </div>
            </Link>
            <div className="alltexts">
            <div className="heartsandbook">
            <FontAwesomeIcon id={index}  className={`heart ${arrShow.includes(data.id) ? "clicked" : ""}`} onClick={() =>arrShow.includes(data.id)?removeFavShow(data.id):addFavShow(data)} icon={faHeart} />
            <FontAwesomeIcon id={index} className={`book ${arrSShow.includes(data.id) ? "clicked" : ""}`} onClick={() => arrSShow.includes(data.id)?removeWishListShow(data.id):addFavwishlistShow(data)} icon={faBookmark} />
                    
            </div>
          <Link to={`show/${data.id}`}>
            
                    <div className="ras">
            <div className="ra">
                <FontAwesomeIcon className="stars" icon={faStar} />
                <p className="rarr">{(data.vote_average).toFixed(1)}/10</p>
              </div>
              </div>
            </Link>
          <Link to={`show/${data.id}`}>
            
              <p className="textso">{data.title || data.original_name}</p>
              </Link>
      </div>
      
    </div>
    
      ))}
      
    </div>
    {show ? 
      <div className="outsidewrapT">
        
      {topTvs.map((data, index) => (
    <div className="indidewrap" key={index}>
    <Link to={`show/${data.id}`}>
<div className="imoges">
<div className="imoge">
    
      <p className="da">{parseInt(data.first_air_date)}</p>
  <img className="im" alt="" src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} />
  
</div>
  
      </div>
      </Link>
      <div className="alltexts">
      <div className="heartsandbook">
              <FontAwesomeIcon id={index}  className={`heart ${arrShow.includes(data.id) ? "clicked" : ""}`} onClick={() =>arrShow.includes(data.id)?removeFavShow(data.id):addFavShow(data)} icon={faHeart} />

              <FontAwesomeIcon id={index} className={`book ${arrSShow.includes(data.id) ? "clicked" : ""}`} onClick={() => arrSShow.includes(data.id)?removeWishListShow(data.id):addFavwishlistShow(data)} icon={faBookmark} />

      </div>
    <Link to={`show/${data.id}`}>
      
              <div className="ras">
      <div className="ra">
          <FontAwesomeIcon className="stars" icon={faStar} />
          <p className="rarr">{(data.vote_average).toFixed(1)}/10</p>
        </div>
        </div>
      </Link>
    <Link to={`show/${data.id}`}>
      
        <p className="textso">{data.title || data.original_name}</p>
        </Link>
</div>

</div>

      ))}
      
    </div>
      : ""}
    
   
    <div className="readMoreBtn">
        <button className={`btner ${show? "red" : "green"}`} onClick={() => SetSHow(prev => !prev)}>{show? "Get Less" : "Get More"}</button>
          </div>
          <div className="solidBluees"></div>

          <div className="upsers">
          <div className="solidReder"></div>
          <h3 className="trendTexts">Upcoming Shows</h3>
      </div>
           <div className="outsidewrapT">
            {Upcome.map((data, index) => (
          
          <div className="indidewrap" key={index}>
          <Link to={`show/${data.id}`}>
      <div className="imoges">
      <div className="imoge">
          
            <p className="da">{parseInt(data.first_air_date)}</p>
        <img className="im" alt="" src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} />
        
      </div>
        
            </div>
            </Link>
            <div className="alltexts">
            <div className="heartsandbook">
            <FontAwesomeIcon id={index}  className={`heart ${arrShow.includes(data.id) ? "clicked" : ""}`} onClick={() =>arrShow.includes(data.id)?removeFavShow(data.id):addFavShow(data)} icon={faHeart} />

            <FontAwesomeIcon id={index} className={`book ${arrSShow.includes(data.id) ? "clicked" : ""}`} onClick={() => arrSShow.includes(data.id)?removeWishListShow(data.id):addFavwishlistShow(data)} icon={faBookmark} />

            </div>
          <Link to={`show/${data.id}`}>
            
                    <div className="ras">
            <div className="ra">
                <FontAwesomeIcon className="stars" icon={faStar} />
                <p className="rarr">{(data.vote_average).toFixed(1)}/10</p>
              </div>
              </div>
            </Link>
          <Link to={`show/${data.id}`}>
            
              <p className="textso">{data.title || data.original_name}</p>
              </Link>
      </div>
      
    </div>
    
            ))}
            
          </div>
          {showTwo ? 
          <div className="outsidewrapT">
            
          {UpcomeTwo.map((data, index) => (
            
              
            <div className="indidewrap" key={index}>
            <Link to={`show/${data.id}`}>
        <div className="imoges">
        <div className="imoge">
            
              <p className="da">{parseInt(data.first_air_date)}</p>
          <img className="im" alt="" src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} />
          
        </div>
          
              </div>
              </Link>
              <div className="alltexts">
              <div className="heartsandbook">
              <FontAwesomeIcon id={index}  className={`heart ${arrShow.includes(data.id) ? "clicked" : ""}`} onClick={() =>arrShow.includes(data.id)?removeFavShow(data.id):addFavShow(data)} icon={faHeart} />
              <FontAwesomeIcon id={index} className={`book ${arrSShow.includes(data.id) ? "clicked" : ""}`} onClick={() => arrSShow.includes(data.id)?removeWishListShow(data.id):addFavwishlistShow(data)} icon={faBookmark} />

              </div>
            <Link to={`show/${data.id}`}>
              
                      <div className="ras">
              <div className="ra">
                  <FontAwesomeIcon className="stars" icon={faStar} />
                  <p className="rarr">{(data.vote_average).toFixed(1)}/10</p>
                </div>
                </div>
              </Link>
            <Link to={`show/${data.id}`}>
              
                <p className="textso">{data.title || data.original_name}</p>
                </Link>
        </div>
        
      </div>
      
          ))}
          
        </div>
            : ""}
          <div className="readMoreBtn">
            <button className={`btner ${showTwo? "reds" : "greens"}`} onClick={() => SetSHowTwo(prev => !prev)}>{showTwo? "Get Less" : "Get More"}</button>
          </div>
      </div>
    <div className="solidReders"></div>
    <div>
    <div className='clickOne'>
        <div className='solidRederss'></div>
        <div className='clickTwo'>
        <Link to={"/series"}>
        <div id='mo' className='mo'>
                <button className='dis'>Shows</button>
            </div>
            </Link>
            <Link to={"/favorite"}>
            <div id='mo' className='mo'>
                <button className='dis'>Favorite</button>
                </div>
            </Link>
            <Link to={"/wishlist"}>
            <div id='mo' className='mo'>
                <button className='dis'>Wishlist</button>
                </div>
                </Link>
        </div>
    </div>
  </div>
</div>
</div>
    )

}

export default FrontPage