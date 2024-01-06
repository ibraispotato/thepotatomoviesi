import React from 'react'
import { Link } from "react-router-dom";
import './clicks.css';

const clickes = () => {
return (
    <div className='clickOne'>
        <div className='solidRederss'></div>
        <div className='clickTwo'>
        <Link to={"/movies"}>
        <div id='mo' className='mo'>
                <button className='dis'>Movies</button>
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
)
}

export default clickes
