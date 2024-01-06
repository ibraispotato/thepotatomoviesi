        /* eslint-disable react-hooks/rules-of-hooks */
    import React, { useState, useEffect } from "react";
    import Wish from "../fav/wishlist"
    import WishList from "../../tvshows/favshow/favWIshlist"
    import './inside.css';
    import { Link } from "react-router-dom";
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
    import { useStateContexts } from "../../context/getcont"
    import Loader from "../loading/Loader"
        
        const insideMovies = () => {
        const {addWishListShow,addWishList} =useStateContexts()
        const [isLoading, setIsLoading] = useState(true);
        
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        setTimeout(() => {
            setIsLoading(false)
            }, 1000);
        return (
            <div>
                {isLoading ?
                    
                    < Loader />
                    :
                    <><div className="arrows">

                        <Link to={"/thepotatomovies"}>
                            <FontAwesomeIcon className="arrow" icon={faArrowLeft} />
                        </Link>
                        
                    </div>
                        {addWishList.length === 0 && addWishListShow.length === 0 ? <div className="theh1">
                        
                            <h1>There is No Movies/Shows ☺</h1>
                        </div> :
                        
                            <div className="fav">
                                {addWishList.length === 0 ? "" :
                                    <div className="upserss">
                                <div className="solidReder"></div>
                                            <h3 className="trendTexts">WishList Movies</h3>
                                        
                                    </div>
                                }
                                
                                <Wish />
                                {addWishList.length === 0 || addWishListShow.length === 0 ? "" :
                                    <div class="solidBlueess"></div>
                                }
                                {addWishListShow.length === 0 ? "" :
                                    <div className="upserss">
                            <div className="solidBlue"></div>
                            <h3 className="trendTexts">WishList Shows</h3>
                                    </div>
                                }
                                
                                <WishList />
                        
                            </div>
                        }
                    </>
                }
            </div>
            
        )
        }
        export default insideMovies
