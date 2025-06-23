export default function MovieCard( {movie} ){

    return (
        <figure className="h-[220px] w-[170px] rounded-sm overflow-hidden group border border-neutral-600 hover:border-neutral-700 shadow-lg hover:shadow-xl transition-all duration-300 relative my-3">


        {/* code pour le badge de l'année */}
          <div className="absolute top-2 left-2 z-10">
            <span className="text-yellow-300/80 text-sm border border-yellow-300/20 rounded-full px-2 py-0.5 bg-yellow-400/10 font-medium">{movie.Year}</span>
          </div>


          {/* code de l'image */}
          <div className="relative h-full w-full overflow-hidden">
            <img
             src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} 
             alt={movie.Title}
             className="object-cover h-full w-full group-hover:scale-105 opacity-100 group-hover:opacity-100 transition-transform duration-500 "
             />
          </div>

          {/* code pour degrader le tout */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/30 to-transparent"></div>

          {/* code pour la description */}
          <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-1.5 z-10 bg-neutral-950/30">
            <span className="text-neutral-400 font-medium text-sm">{movie.Type.toUpperCase()}</span>
            <h3 className="text-xl font-bold text-neutral-100 group-hover:text-yellow-300 transition-colors duration-300">{movie.Title} </h3>
          </figcaption>


        </figure>
    )
}