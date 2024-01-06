    /* eslint-disable react-hooks/rules-of-hooks */


    import React, { useState, useEffect } from "react";
    import { Link } from "react-router-dom";
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useStateContexts } from "../../context/getcont"
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
    // import "../movie.css"
const favorites = () => {
    const { addFavwishlistShow,removeWishListShow,arrSShow,addWishListShow} = useStateContexts()

        return (
            <div>
                
            
                    
                <div className="fogWaT7t">
                <div className="fog">
                
                    
            
                    
                </div>
                <div className="t7to">
                    {addWishListShow.map((data, index) => (
                    <>
                        <div key={index} className="theT7t">
                        <Link to={`show/${data.id}`}>
                            <div className="imr">
                            <img alt="" className="imm" src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} />
                            </div>
                        </Link>
                                {/* {console.log(ge||data.geners_ids)} */}
                        {/* {console.log(data.genre_ids)} */}
                                
                                <div className="upo">
                                    <div className="wishlist">
                                    <FontAwesomeIcon id={index} className={`book ${arrSShow.includes(data.id) ? "clicked" : ""}`} onClick={() => arrSShow.includes(data.id)?removeWishListShow(data.id):addFavwishlistShow(data)} icon={faBookmark} />

                        
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
                
                    </div>
                
                    
                  
                </div>
            
            </div>
        )
        
        
    }

    export default favorites
