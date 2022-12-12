import MovieItem from "./MovieItem";

const MovieRow = ({ movies, setMovie }) => {
  return (
    <div className="movierow">
      <h2 className="movierowheader">
        <a href="/browse/m/genre/1191605">Acara TV Bingeworthy</a>
      </h2>
      <div className="movierowslide flex">
        {movies.map((movie) => (
          <MovieItem
            key={movie.id}
            src={movie.url}
            alt={movie.title}
            handleClick={() => setMovie(movie)}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
