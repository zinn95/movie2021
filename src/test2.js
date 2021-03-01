import React from "react";
import propTypes from "prop-types";
import "./test2.css"

function Movie({ id, title, summary, poster }){
    return
    <div class="movie">
        <h2 class="movie__title">{title}</h2>
        <h4 class="movie__summary">{summary}</h4>
        <div class="movie__img">
            <img scr={poster} alt={title} title={title}></img>
        </div>
    </div>    
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
}

export default Test2;