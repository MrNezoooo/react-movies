import React from 'react'
import {Movies} from '../components/Movies'
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {

    state = {
        movies: [],
        loading: true,  //при першій загрузні стан
    }

    componentDidMount() {  //компонент змонтувався
        // fetch('http://www.omdbapi.com/?i=tt3896198&apikey=6354aa01&s=matrix')
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=matrix') //використовуємо захист щоб не використали наш ключ
            .then(response => response.json())
            .then(data => this.setState( {movies: data.Search, loading: false} )) //каже що треба покласти в наші фільми в
    }

    searchMovies = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=6354aa01&s=${str}${type !== 'all' ? `&type=${type}` : '' }`)
            .then(response => response.json())
            .then(data => this.setState( {movies: data.Search, loading: false} )) //коли данні повністю загружені міняєм loading на false
    }


    render(){
        return <main className='container content'>

                    <Search searchMovies={this.searchMovies} />

                    {/*{this.state.movies.length ? (<Movies movies={this.state.movies}/>) : (<Preloader />) }*/}
                    {this.state.loading ? (<Preloader />) : (<Movies movies={this.state.movies}/>) }
               </main>
    }
}
export {Main}