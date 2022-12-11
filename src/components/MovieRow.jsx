import MovieItem from "./MovieItem";

const MovieRow = () => {
  return (
    <div className="movierow">
      <h2 className="movierowheader">
        <a href="/browse/m/genre/1191605">Acara TV Bingeworthy</a>
      </h2>
      <div className="movierowslide flex">
        <MovieItem src="/alice-in-borderland.jpg" alt="alice-in-borderland" />
        <MovieItem src="/stranger-things.jpg" alt="stranger-things" />
        <MovieItem src="/go-ahead.webp" alt="go-ahead" />
        <MovieItem src="/parasyte.webp" alt="parasyte" />
      </div>
    </div>
  );
};

export default MovieRow;
