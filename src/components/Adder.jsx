import { useRef } from "react";

const Adder = ({ state }) => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  const [movies, setMovies] = state;

  const addMovie = () => {
    setMovies([
      ...movies,
      { title: titleRef.current.value, url: imageRef.current.value },
    ]);
  };

  return (
    <div className="movieadder">
      <input className="inputentry" type="text" ref={titleRef} />
      <input className="inputentry" type="text" ref={imageRef} />
      <button onClick={addMovie}>Add Movie</button>
    </div>
  );
};

export default Adder;
