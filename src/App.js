import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  
  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies)
//  const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
//  console.log(movies.data.data.movies)
    this.setState({ movies, isLoading: false })
//  this.setState({movies:movies})
  }

  componentDidMount(){
    this.getMovies()
    //    setTimeout(() => {this.setState({ isLoading: false })}, 3000)

  }

  render() {
    const { isLoading, movies } = this.state;
    return (
    <section className="container">
    {isLoading ?
    <div className="loader">
      <span className="loader__text">Loading...</span> 
    </div> : 
     <div className="movies">
       {movies.map(movie => <Movie key={movie.id} id={movie.id} title={movie.title} year={movie.year} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />)} 
     </div> 
    }
    </section> )
  }
}




export default App;


/* <class component> 연습, setState 연습, componentXmount 연습

class App extends React.Component {

  constructor(props){
    super(props);
    console.log("hello");
  }

  state={
    count: 0,
    bount: 2
  };


add = () => {
  console.log("add")
  this.setState(current => ({ count: current.count + 1}))
//  this.setState({ count: this.state.count + 1});

}

minus = () => {
  console.log("minus")
  this.setState(current => ({ count: current.count - 1}));
//   this.setState({ count: this.state.count - 1});
}
reset = () => {
  console.log("reset");
  this.setState(current => ({count: 0}))
}

componentDidMount(){
  console.log("component rendered")
}
componentDidUpdate(){
  console.log("i just did update")
}
componentWillUnmount(){
  console.log("good bye!")
}

 render(){
   console.log("I'm rendering")
   return (
   <div>
     <h1>the number is: {this.state.count}</h1>
     <button onClick={this.add}>Add</button>
     <button onClick={this.minus}>minus</button>
     <button onClick={this.reset}>reset</button>
     <h2>this bount number is: {this.state.bount}</h2>
  </div>
    )
 }
}

*/


/* <function component> 연습

function Food( {name, rating} ){
  return <div>
    <h1>I Like this food: {name}</h1>
    <h2>rating: {rating}dd</h2>
  </div>
}

const foodItems = [
  {id: 1, name: "kimchi", ra: "1"},
  {id: 2, name: "bap", ra: "2"},
  {id: 3, name: "ramen", ra: "3"}
]

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
}

function renderFood(item){
  return <Food key={item.id} name={item.name} rating={item.ra} />
}

function App(){
  return (
    <div>
    {foodItems.map(renderFood)}
  </div>
  )
}

*/