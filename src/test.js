import React from "react";
import axios from "axios";
import Test2 from "./test2";
import "./test.css";

class App extends React.Component {

    state={
        isLoadig: true,
        movies: []
    }

    getMovies = async () => {
        const { date: {date: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
        this.setState({ isLoading: false, movies })
    }

    componentDidMount(){
        this.getMovies()
    }

    render(){
        const { isLoading, movies } = this.state;
        return (
        <section class="container">
            {isLoading ? <div class="loader">
                            <span class="loader__text">
                                Loading...
                            </span>
                        </div> : 
                (
                    <div class="movies">
                        {movies.map(movie => <Test2 key={movie.id}
                        id={movie.id}
                        summary={movie.summary}
                        poster={movie.medium_cover_image} />)
                        }
                    </div>
                    
                )
            }
        </section>
        )
    }

}