import { useState } from "react";
import "./App.css";
import Adder from "./components/Adder";
import Display from "./components/Display";
import Focus from "./components/Focus";
import MovieRow from "./components/MovieRow";
import NavBar from "./components/NavBar";

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <>
      <NavBar />
      <Focus />
      <MovieRow />
      <Adder state={[movies, setMovies]} />
      <Display movies={movies} />
    </>
  );
}

export default App;
