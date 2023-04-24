import "./App.css";
import Heading from "./components/Heading";
import MovieCard from "./templates/MovieCard";
import HeadingTwo from "./components/HeadingTwo";
import SeeMoreButton from "./components/SeeMoreBtn";

function App() {
  return (
    <div className="App">
      <header className="gridContainer">
        <Heading text="MyMovie" size="16px"/>
      </header>
      <main>
        <section>
          <div className="flexContainer space-between">
            <HeadingTwo />
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