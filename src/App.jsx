import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import MovieCard from "./components/MovieCard";
const API_URL=" http://www.omdbapi.com/?i=tt3896198&apikey=7f0b1986";


const movie1 = {
  "Title": "Italian Spiderman",
  "Year": "2007",
  "imdbID": "tt2705436",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYWNiMmNlNmQtZTI2MS00MzAxLTgxM2QtNDY3ZGQxNDMwZDgzXkEyXkFqcGc@._V1_SX300.jpg"
}

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);

    setMovies (data.Search)
    setSearchTerm("")
  }

  useEffect(() => {
    searchMovies("Spiderman");
  },[]);
  
  return (
    <div className="flex flex-col w-full min-h-screen items-center gap-2 md:flex-col bg-neutral-900 text-white">
      <h1 className="text-3xl bg-gradient-to-r from-yellow-400 to-neutral-900 bg-clip-text mb-6 text-transparent font-bold mt-5">Film Zone</h1>

      <div className=" bg-neutral-950 border-none  text-white rounded-4xl shadow-lg shadow-neutral-700/20 px-5 py-1.5">
        <input
          type="search"
          placeholder="Chercher un film"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="focus:outline-none mr-2"
          
        />
        <button 
        className="cursor-pointer"
        onClick={() => searchMovies(searchTerm)}
        >
          <FaSearch color="gold"/>
        </button>
      </div>



      {/* Catalogue de films */}
      <h1 className="text-2xl mt-2 mb-5 font-bold">Catalogue de films</h1>

      {
        movies?.length > 0 
        ? (
          <div className="gap-5 md:grid md:grid-cols-4 lg:grid lg:grid-cols-6 sm:grid-cols-2">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
        ))}
         </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-neutral-400">Aucun film trouvé</h2>
          </div>
        )
      }


    
      



    </div>
  );
}