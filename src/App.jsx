import "./App.css";
import Heading from "./components/Heading";
import MovieCard from "./templates/MovieCard";
import SeeMoreButton from "./components/SeeMoreBtn";
import Switch from "./components/Switch";

function App() {
  return (
    <div className="App">
      <header className="gridContainer">
        <Heading text="MyMovie" size="16px" type="h1"/>
        <Switch />
      </header>
      <main>
        <section>
          <div className="flexContainer space-between">
            <Heading text="Now showing" size="16px" type="h2"/>
            <SeeMoreButton />
          </div>
          <div className="flexContainer movieCardContainer">
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </section>
        <section></section>
      </main>
      <footer>
        <nav></nav>
      </footer>
    </div>
  );
}

export default App;