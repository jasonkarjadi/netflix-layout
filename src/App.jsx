import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Focus from "./components/Focus";
import MovieRow from "./components/MovieRow";
import NavBar from "./components/NavBar";
import axios from "axios";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(true);
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({
    id: "001",
    title: "MY ID IS GANGNAM BEAUTY",
    url: "/my-id-gangnam-beauty-background.webp",
    synopsis:
      "Di-bully karena tampang, Mi-rae melakukan operasi plastik demi hidup yang lebih baik, tapi malah menghadapi tantangan baru di kampus. Berdasarkan webtoon Korea populer.",
  });

  const fetchMovies = async () => {
    const res = await axios.get("http://localhost:2000/movies");
    const movies = res.data;
    setMovies(movies);
  };

  useEffect(() => {
    setTimeout(fetchMovies, 3000);
    return () => {};
  }, []);

  // useEffect(function () {
  //   fetchMovies();
  // }, []);

  // useEffect(fetchMovies, []);

  // [] -> jalankan kode pada saat render pertama
  // -> jalankan kode pada setiap render
  // [var1, var2] -> jalankan kode pada setiap var1 atau var2 berubah

  // useState -> trigger re-render
  // useRef -> tidak trigger re-render

  const openForm = (forAdd) => {
    const myFun = () => {
      setIsOpen((isOpen) => !isOpen);
      setIsAdd(forAdd);
    };
    return myFun;
  };

  return (
    <main
      className="mainapp"
      style={{ backgroundImage: `url("${movie.url}")` }}
    >
      <NavBar handleClick={openForm(true)} isOpen={isOpen} />
      <Focus
        movie={movie}
        fetchMovies={fetchMovies}
        handleClick={openForm(false)}
      />
      <MovieRow movies={movies} setMovie={setMovie} />
      {isOpen && (
        <Form
          setIsOpen={setIsOpen}
          fetchMovies={fetchMovies}
          movie={movie}
          isAdd={isAdd}
        />
      )}
    </main>
  );
}

export default App;

// show form for add or edit movie
// add movie
// edit movie
// delete movie
// select movie to focus

// axios -> http -> req (request): get (query), post (add), patch (edit), delete
// CRUD: Create, Read, Update, Delete
// Create = Post, Read = Get, Update = Patch, Delete = Delete

// react hooks: useState, useEffect, useRef
// Function Components
// children, props

// useState
//
// let movies = [...]
// array methods: push, splice, map
//
// const [movies, setMovies] = useState([])
//
// (push)
// setMovies([...movies, {title: "", url: ""}])
// movies.push({}) tidak bisa

// JS Libraries: Vue, React, Angular
// JS Frameworks: Nuxt, Next
