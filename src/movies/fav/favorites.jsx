            /* eslint-disable react-hooks/rules-of-hooks */



            import { Link } from "react-router-dom";
            import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
            import { faStar } from '@fortawesome/free-solid-svg-icons'
            import { useStateContexts } from "../../context/getcont"
            
            import { faHeart } from '@fortawesome/free-solid-svg-icons'
            import "../movie.css"
            const favorites = () => {
            const {addFavorites,arr,removeFav} =useStateContexts()
            
            
            
        
                return (
                    <div>
                        
                    
                        <div className="fogWaT7t">
                        <div className="fog">
                        
                            <div className="arrows">
                            
                            {/* <h1>Latest Movies:</h1> */}
                            </div>
                    
                            
                        </div>
                        <div className="t7to">
                            {addFavorites.map((data, index) => (
                            <>
                                <div key={index} className="theT7t">
                                <Link to={`movie/${data.id}`}>
                                    <div className="imr">
                                    <img alt="" className="imm" src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} />
                                    </div>
                                </Link>
                                        {/* {console.log(ge||data.geners_ids)} */}
                                {/* {console.log(data.genre_ids)} */}
                                        
                                        <div className="upo">
                                            <div className="wishlist">
                                        <FontAwesomeIcon id={index}  className={`heart ${arr.includes(data.id) ? "clicked" : ""}`} onClick={() =>removeFav(data.id)} icon={faHeart} />
                                
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
                        
                        
                        
                            <div>
                        
                            </div>
                        
                            
                        
                        </div>
                    
                    </div>
                )
                
                
            }

            export default favorites
