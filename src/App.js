import './App.css';
//import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
//import { Movie } from './Movies';
import Navbar from './Navbar';
import React, {useState, useEffect} from "react"




function App() {

  const [movies, setMovies] = useState([])
  const [value, setValue] = useState('')

  const onChange = (event) => {setValue(event.target.value)}
  const onSearch = (searchTerm) => {console.log(searchTerm)}

  useEffect(() => {
    const fetchData = async () => {
      const resulted = await fetch('http://localhost:8080/movies') 
      const result = await resulted.json()

      setMovies(result)
    }
    fetchData()
}, [])
  
  return (
    <>
    <div className="search"> 
      <input className= "input-bar" type={value} placeholder="Search" onChange={(event) => {
                    setValue(event.target.value);
                }}/>
      <button className='button' onClick={(() => onSearch(value))}>Go</button>
      <div className="dropdown">
        {movies.filter((movie) => {
          const searchTerm = value.toLowerCase();
          const title = movie.title.toLowerCase()

          return searchTerm && title.startsWith(searchTerm)
          
        })}
      </div>
    </div>


    <div className="fetch_container">
      <h2>Movies:</h2>
      {movies.map(movie =>
        <div key={movie.id} className="movie_container">
          <h3>{movie.id}:{movie.title}</h3>
        </div>)}

    </div>
   
    </>
      )

  }
export default App;
