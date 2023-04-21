import "./App.css";
import HeadingTwo from "./components/HeadingTwo";
import SeeMoreBtn from "./components/SeeMoreBtn";
import HeadingOne from "./components/headingOne";
import MovieCard from "./templates/MovieCard";

function App() {
  return (
    <div className="App">
      <header>
        <HeadingOne />
      </header>
      <main>
        <section>
          <div className="flexContainer space-between">
            <HeadingTwo />
            <SeeMoreBtn />
          </div>
          <div className="flexContainer scroll movieCardContainer">
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
