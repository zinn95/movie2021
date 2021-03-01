import React from "react";
import propTypes from "prop-types";
import "./Movie.css";

function Movie({ id, title, year, summary, poster, genres}){
    return <div className="movie">
        <div>
            <img className="movie__data" src={poster} alt={title} title={title}></img>
            <h3 className="movie__title" style={{backgroundColor: "white"}}>{title}</h3>
            <h3 className="movie__year">{year}</h3>
            <ul className="genres">
                {genres.map((genre, index) => <li key={index} className="genres__genre">
                    
                    {genre}
                </li>)}

            </ul>
            <p className="movie__summary">{summary.slice(0, 140)}...</p>
            
        
        </div>
        
    </div>
    
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    year: propTypes.number.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie;
