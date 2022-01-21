import React from 'react'

class Search extends React.Component {

    state= {
        search: '',
        type: 'all',
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleKey = (event) => {
        if(event.key === 'Enter'){
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleFilter = (event) => {
        console.log(event)
        this.setState(
            () => ({type: event.target.value}),
            ()=>{
                        this.props.searchMovies(this.state.search, this.state.type); //щоби точно знали що обновится ключ type:на інший зазначаємо другим параметром
                    }
        )
    }

    render(){
        return <div className="row">
                    <div className="col s12">

                            <input
                                className="validate"
                                type="search"
                                name="search"
                                value={this.state.search}
                                placeholder="пошук"
                                onChange={this.handleChange}
                                onKeyDown={this.handleKey}
                            />
                            <button className='btn' onClick={()=>this.props.searchMovies(this.state.search, this.state.type)}>Пошук</button>
                            <br/>
                            <div className="radio-movies">
                                <label>
                                    <input
                                        className="with-gap"
                                        name="choice"
                                        type="radio"
                                        value="all"
                                        checked={this.state.type === "all"}
                                        onChange={this.handleFilter}
                                    />
                                    <span>Всі</span>
                                </label>
                                <label>
                                    <input
                                        className="with-gap"
                                        type="radio"
                                        name="choice"
                                        value="movie"
                                        checked={this.state.type === "movie"}
                                        onChange={this.handleFilter}
                                        />
                                        <span>Тільки фільми</span>
                                </label>
                                <label>
                                    <input
                                        className="with-gap"
                                        type="radio"
                                        name="choice"
                                        value="series"
                                        checked={this.state.type === "series"}
                                        onChange={this.handleFilter}

                                    />
                                    <span>Тільки серіали</span>
                                </label>
                            </div>
                    </div>
                 </div>
        }
}

export{Search}