import axios from "axios";
import { useEffect, useRef } from "react";

const Form = ({ setIsOpen, fetchMovies, isAdd, movie }) => {
  const titleRef = useRef(null);
  const urlRef = useRef(null);
  const synopsisRef = useRef(null);

  const submitMovie = async () => {
    const movieData = {
      title: titleRef.current.value,
      url: urlRef.current.value,
      synopsis: synopsisRef.current.value,
    };
    if (isAdd) {
      await axios.post("http://localhost:2000/movies", movieData);
    } else {
      await axios.patch(`http://localhost:2000/movies/${movie.id}`, movieData);
    }
    setIsOpen(false);
    fetchMovies();
  };

  useEffect(() => {
    if (!isAdd) {
      titleRef.current.value = movie.title;
      urlRef.current.value = movie.url;
      synopsisRef.current.value = movie.synopsis;
    }
    return () => {};
  }, [isAdd, movie]);

  return (
    <div className="movieformwrap">
      <div className="movieform flex">
        <img
          src="/netflix-logo.png"
          alt="netflix-logo"
          width="500px"
          height="200px"
        />
        <input
          className="inputentry"
          type="text"
          ref={titleRef}
          placeholder="Movie Title"
        />
        <input
          className="inputentry"
          type="text"
          ref={urlRef}
          placeholder="Movie Image URL"
        />
        <input
          className="inputentry"
          type="text"
          ref={synopsisRef}
          placeholder="Movie Synopsis"
        />
        <button className="btnsubmit" onClick={submitMovie}>
          Submit {isAdd ? "Add" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default Form;
