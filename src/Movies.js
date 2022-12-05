import React from 'react'
//import { Link} from 'react-router-dom'

 var movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

const Movie = () => {
    movies.map((movie, index) => {
        return(
        <>
        <h1> Movies List</h1>
        <div key={index}>
            {movie.title}
        </div>
        
        
        </>
       
) 
})}

export default Movie;
