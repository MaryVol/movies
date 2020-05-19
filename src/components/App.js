import React, { Component } from 'react';
import Header from './header/Header';
import MainContent from './mainContent/MainContent';
import MoviePage from './mainContent/MoviePage';
import Movie from './mainContent/Movie';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            movies: [
            {
                value: "Kill Bill: Vol2",
                id: 0,
                title: "Kill Bill: Vol2",
                release_date: "2004",
                poster_path: "https://i.pinimg.com/originals/64/82/ef/6482ef51ce0b437986ec477e0d46f30c.jpg",
                overview: "film description",
                runtime: "154",
                rating: "4.2",
                genre: "Action & Adventure",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium minima quas neque quos eius placeat dignissimos voluptatum sequi modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequatur? Dolorum et nam quod aperiam, numquam consequatur excepturi debitis reiciendis."
            },
            {
                value: "Kill Bill: Vol1",
                id: 1,
                title: "Kill Bill: Vol1",
                release_date: "2003",
                poster_path: "https://www.film.ru/sites/default/files/movies/posters/tumblr_n4k5nvk6c01tzuuzio1_1280.jpg",
                overview: "film description",
                runtime: "160",
                rating: "4.0",
                genre: "Action & Adventure",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium minima quas neque quos eius placeat dignissimos voluptatum sequi modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequatur? Dolorum et nam quod aperiam, numquam consequatur excepturi debitis reiciendis."
            }
        ]
    }
}

    render(){
        return(
        <div>
            <Header />
            <MainContent />
            <MoviePage img={this.state.movies[0].poster_path} mtitle={this.state.movies[0].title} rate={this.state.movies[0].rating} date={this.state.movies[0].release_date} time={this.state.movies[0].runtime} opis={this.state.movies[0].description} val={this.state.movies[0].value} onChange={value => this.setState({ value })}/>
            <MoviePage img={this.state.movies[1].poster_path} mtitle={this.state.movies[1].title} rate={this.state.movies[1].rating} date={this.state.movies[1].release_date} time={this.state.movies[1].runtime} opis={this.state.movies[1].description} val={this.state.movies[1].value} onChange={value => this.setState({ value })}/>
        </div>
        );
    }
}

export default App;