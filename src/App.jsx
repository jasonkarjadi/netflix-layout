import "./App.css";
import Focus from "./components/Focus";
import MovieRow from "./components/MovieRow";
import NavBar from "./components/NavBar";

function App() {
  return (
    <main className="mainapp">
      <NavBar />
      <Focus />
      <MovieRow />
    </main>
  );
}

export default App;
