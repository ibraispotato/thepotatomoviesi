import React from 'react'
import { Link } from "react-router-dom";
import  "./head.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop } from '@fortawesome/free-solid-svg-icons'
function Head(){

    return (
      <div className='head' >
        <div className="up">
          <Link to={"/"}>
          <h1 className='sne'>Electronics</h1>
          </Link>
          <Link to={"/products/carts"}>
          <FontAwesomeIcon icon={faShop} className='icon'/>
          </Link>
          
        </div>
      </div>
    )
  
}
export default Head