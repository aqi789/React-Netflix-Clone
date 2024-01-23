import React, { useEffect } from 'react'
import {API_KEY, imageUrl} from '../../Constants/Constants'
import axios from '../../Axios'
import './Banner.css'
import { useState } from 'react'

function Banner() {
  const [movie, setMovie] = useState(null)
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data.results[0])
      setMovie(response.data.results[0])
    })
  }, [])
  if (!movie) {
    return null; 
  }
  return (
    <>
    <div className='banner'
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path: ""})`}}>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade-bottom">
          
        </div>
    </div>
    </>
  )
}

export default Banner