import {Movie} from './Movie'

function Movies(props) {

    const {
        movies = []
    } = props;

    return <div className="movies">
       {/*{props.movies.map(movie => (*/}
       {/*     <Movie key={movie.id} {...movie}/>  /* {...movie} всі ключі скопом відправляємо в нис title={title}...* */}
       {/*     )) }  */}

        {movies.length ? props.movies.map(movie => (
            <Movie key={movie.id} {...movie}/>
        )) : <h4>Нічого не знайдено...</h4>
        }
            </div>
}
export {Movies}