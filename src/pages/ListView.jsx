import NowShowing from "../templates/NowShowing";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Switch from "../components/Switch";
import MovieItem from "../templates/MovieItem";
import Navigation from "../components/Navigation";
import axios from "axios";

const ListView = () => {
  return (
    <>
      <header className="gridContainer header">
        <Switch justify="end" align="center" />
        <Heading title="MyMovies" size="16" as="h1" />
      </header>
      <main>
        <section className="HorizontalMovieListContainer">
          <div className="flexContainer justify-space-between">
            <Heading title="Now Showing" size="16" as="h2" />
            <Button title="See More" />
          </div>
          <div className="flexContainer nowShowingContainerLayout">
            <NowShowing />
          </div>
        </section>
        <section className="VerticalMovieListContainer">
          <div className="flexContainer justify-space-between VerticalMovieListTitleLayout">
            <Heading title="Popular" size="16" as="h2" />
            <Button title="See More" />
          </div>
          <div className="flexContainer movieListContainerLayout">
            <MovieItem />
          </div>
        </section>
      </main>
      <footer>
        <Navigation />
      </footer>
    </>
  );
};

export async function loader() {
  // const nowPlayingResponse = await fetch(
  //   "https://api.themoviedb.org/3/movie/now_playing/?api_key="
  // );
  // const popularResponse = await fetch(
  //   "https://api.themoviedb.org/3/movie/popular/?api_key="
  // );
  // const popularData = await popularResponse.json();
  // const nowPlayingData = await nowPlayingResponse.json();

  // return { nowPlaying: nowPlayingData, popular: popularData };

  return Promise.allSettled([
    axios(
      `https://api.themoviedb.org/3/movie/now_playing/?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`
    ),
    axios(
      `https://api.themoviedb.org/3/movie/popular/?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`
    ),
    axios(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`
    ),
  ]).then((values) => {
    // console.log(values);
    // return {
    //   nowPlaying: values[0].value.data,
    //   popular: values[1].value.data,
    // };
    const [nowPlayingData, popularData, genreData] = values;

    console.log(values);

    return {
      nowPlaying: nowPlayingData.value.data,
      popular: popularData.value.data,
      genre: genreData.value.data.genres,
    };
  });
}

export default ListView;
