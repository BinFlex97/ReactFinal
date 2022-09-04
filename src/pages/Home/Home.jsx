import React from 'react'
import Banner from './Component/Banner'
import MovieList from './Component/MovieList'
import TheaterSystem from './Component/TheaterSystem'



const Home = () => {
  return (
    <div>
      <Banner/>
      <MovieList/>
      <TheaterSystem/>
    </div>
  )
}

export default Home