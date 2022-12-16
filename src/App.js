import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard.jsx";

// 58271cfa

const API_URL = 'https://www.omdbapi.com?apikey=58271cfa'

const App = () => {
    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className="app">
            <h1>BITFLIX</h1>

            <div className="search">
                <input placeholder="Buscar filmes" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <img src={SearchIcon} alt="Pesquisar" onClick={() => searchMovies(searchTerm)} />
            </div>

            {movies?.lenght > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => {
                            return <MovieCard movie={movie} />
                        })
                        }
                    </div>
                ) : (
                    <div className="empty">
                        <h2>Filme não encontrado</h2>
                    </div>
                )
            }

        </div>
    );
}

export default App;