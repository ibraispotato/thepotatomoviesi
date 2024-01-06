import React from 'react'
import { PacmanLoader } from "react-spinners";
import Movies from '../mainmovie/movies';
const Loader = () => {
  return (
    <div>
              <div className="load">
          < loader />
            <PacmanLoader
        color='yellow'
        className="lolo"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
       
              />
               
              {/* < Movies /> */}
          </div>
          
    </div>
  )
}

export default Loader
