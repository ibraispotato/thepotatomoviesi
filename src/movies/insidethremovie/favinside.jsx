        /* eslint-disable react-hooks/rules-of-hooks */
        import React, { useState, useEffect } from "react";
        import Fav from "../fav/favorites"
        import FavShow from "../../tvshows/favshow/favshow"
        import './inside.css';
        import { Link } from "react-router-dom";
        import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
        import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
        import { useStateContexts } from "../../context/getcont"
        import Loader from "../../movies/loading/Loader"
        const insideMovies = () => {
        const {addFavorites,addFavoritesShow} =useStateContexts()
        const [isLoading, setIsLoading] = useState(true);
        
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        setTimeout(() => {
            setIsLoading(false)
            }, 1000);
        return (
            <div className="">
                {isLoading ?
                    
                    < Loader />
                    :
                    <><div className="arrows">
                        <Link to={"/thepotatomovies"}>
                            <FontAwesomeIcon className="arrow" icon={faArrowLeft} />
                        </Link>
                        
                    </div>
                        {addFavorites.length === 0 && addFavoritesShow.length === 0 ? <div className="theh1">
                        
                            <h1>There is No Movies/Shows ☺</h1>
                        </div> :
                            <div className="fav">
                                
                                {addFavorites.length === 0 ? "" :
                                    <div className="upserss">
                                <div className="solidReder"></div>
                                            <h3 className="trendTexts">Favorite Movies</h3>
                                        
                                    </div>
                                }
                                
                                <Fav />
                                {addFavorites.length === 0 || addFavoritesShow.length === 0 ? "" :
                                    <div class="solidBlueess"></div>
                                }
                                {addFavoritesShow.length === 0 ? "" :
                                    <div className="upserss">
                            <div className="solidBlue"></div>
                            <h3 className="trendTexts">Favorite Shows</h3>
                                    </div>
                                }
                                
                                <FavShow />
                        
                            </div>
                        }
                    </>
                }
            </div>
            
        )
        }

        export default insideMovies
