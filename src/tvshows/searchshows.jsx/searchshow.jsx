        /* eslint-disable react-hooks/rules-of-hooks */


        import React, { useState, useEffect } from "react";
        import { Link } from "react-router-dom";
        import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
        import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
        import { faStar } from '@fortawesome/free-solid-svg-icons'
        import Loader from "../loading/loader"
        import { useParams } from "react-router-dom";
        import { useStateContext } from '../../context/getcontext'
        import {useStateContexts} from "../../context/getcont"
    import { faHeart } from '@fortawesome/free-solid-svg-icons'
    import { faBookmark } from '@fortawesome/free-solid-svg-icons'
        const movies = () => {
        const { generes,search } = useParams()
            const [movieApi, setMovieApi] = useState([])
            const [text, setText] = useState("")
        const [number, setNumber] = useState(1)
        const [isLoading, setIsLoading] = useState(true);
        const [gener, setGener] = useState()
        const { addFavShow, arrShow, removeFavShow,addFavwishlistShow,removeWishListShow,arrSShow} = useStateContexts()
            
        const { geners,tvgeners } = useStateContext()
            const MovieApis = async () => {
                const options = {
                    method: 'GET',
                    headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
                    }
                };
                
                try{
                    
                await fetch(`https://api.themoviedb.org/3/search/tv?query=${search}&include_adult=false&language=en-US&page=${number}` , options)
                        .then(response => response.json())
                    .then(response => { setMovieApi(response.results); setTimeout(() => {
                    setIsLoading(false)
                        }, 500);
                })
                        
                }catch(err){
                console.log(err.messege)
                    
                }
                    
                }
                // console.log((e)=>e.target.value)
                useEffect(() => {
                MovieApis()
                }, [text,number,gener,geners,isLoading,gener,search])
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        return (
            <div>
            {isLoading ? 
                
                < Loader />
        :
                <div className="fogWaT7t">
                <div className="fog">
                    <div className="input">
                    <input type="text" onChange={(e) => setText(e.target.value)} value={search&&text} className="in" placeholder="Search" />
                    <Link to={`/series/${text}`}>
                <button className="btners" onClick={() => setNumber(1)}>Search</button>
                </Link>
                
                            </div>
                    <div className="arrows">
                    <Link to={"/thepotatomovies"}>
                        <FontAwesomeIcon className="arrow" icon={faArrowLeft} />
                    </Link>
                    {/* <h1>Latest Movies:</h1> */}
                    </div>
                    <div className="btns">
                    <Link to={`/series`}>
                    <button className={`bobo ${gener !== undefined ? "active" : ""}`} onClick={() => setGener(0)}>All</button>
                    </Link>
                        {tvgeners.map(data => (
                            <Link to={`/series/gener/${data.id}`}>

                        <div className="alotbtn">
                        <button key={data.id} className={`bobo ${generes == data.id ? "active" : ""}`} onClick={(e) => setGener(data.id)}>{data.name}</button>
                        <div>
                        
                        </div>
                        </div>
                        </Link>
                        
                    ))}
                    
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
                
                
                
                    <div>
                    <div className="nums">
                    
                        <button className="one" id="minus" onClick={()=>setNumber(prev => prev === 1 ? 1 : --prev)}>prev</button>
                    <p className="oneer">{number}</p>
                        <button className="one" id="plus"   onClick={() => setNumber(prev => ++prev)}>next</button>
                    </div>
                    </div>
                    
                </div>
            }
            </div>
        )
        
        }

        export default movies
