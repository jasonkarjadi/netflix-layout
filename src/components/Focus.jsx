import axios from "axios";

const Focus = ({ movie, fetchMovies, handleClick }) => {
  const deleteMovie = async () => {
    await axios.delete(`http://localhost:2000/movies/${movie.id}`);
    fetchMovies();
  };

  return (
    <div className="moviefocus">
      <h1 className="movietitle">{movie.title}</h1>
      <p className="moviesynopsis">{movie.synopsis}</p>
      <div>
        <button className="btnmovie btnedit" onClick={handleClick}>
          Edit
        </button>
        <button className="btnmovie btndelete" onClick={deleteMovie}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Focus;
