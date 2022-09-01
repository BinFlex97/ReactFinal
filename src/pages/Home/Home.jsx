import React from 'react'
import Banner from './Component/Banner'
import MovieListSlides from './Component/MovieListSlides'
import TheaterSystem from './Component/TheaterSystem'



const Home = () => {
  return (
    <div>
      <Banner/>
      <MovieListSlides/>
      <TheaterSystem/>
    </div>
  )
}

export default Home