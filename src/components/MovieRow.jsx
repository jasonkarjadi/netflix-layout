import MovieItem from "./MovieItem";

const MovieRow = () => {
  return (
    <div className="movierow">
      <h2 className="movierowheader">Acara TV Bingeworthy</h2>
      <div>
        <MovieItem src="/alice-in-borderland.jpg" alt="alice-in-borderland" />
        <MovieItem src="/stranger-things.jpg" alt="stranger-things" />
        <MovieItem src="/go-ahead.webp" alt="go-ahead" />
        <MovieItem src="/parasyte.webp" alt="parasyte" />
      </div>
    </div>
  );
};

export default MovieRow;
