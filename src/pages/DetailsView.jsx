import styled, { css } from "styled-components";
import Switch from "../components/Switch";
import { FaArrowLeft, FaPlay, FaRegBookmark } from "react-icons/fa";
import coverimage from "../assets/moviecover.png";
import MovieInfo from "../templates/MovieInfo";
import MovieDescription from "../templates/MovieDescription";
import MovieCast from "../templates/MovieCast";
import { Link, useLoaderData } from "react-router-dom";

const StyledFaArrowLeft = styled(FaArrowLeft)`
  color: #fff;
`;
const StyledHeader = styled.header`
  background-image: url(${coverimage});
  background-size: cover;
  background-position: 0 20%;
  padding: 2rem;
  display: grid;
  grid-template-columns: 3;
  height: 200px;
  background-color: gray;
`;
const StyledSpan = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background-color: #fff;
  border-radius: 50px;
  justify-self: center;
  align-self: center;
  &:after {
    content: "Play Trailer";
    position: absolute;
    top: 53px;
    white-space: nowrap;
    color: #fff;
  }
`;
const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 2rem;
  margin-top: -10px;
`;

const DetailsView = () => {
  return (
    <>
      <StyledHeader>
        <Link to="/">
          <StyledFaArrowLeft />
        </Link>
        <StyledSpan>
          <FaPlay />
        </StyledSpan>
        <Switch justify="end" align="top" />
      </StyledHeader>
      <StyledMain>
        <MovieInfo />
        <MovieDescription>{}</MovieDescription>
        <MovieCast />
      </StyledMain>
    </>
  );
};

export async function loader() {
  return Promise.allSettled([
    axios("https://api.themoviedb.org/3/movie/now_playing/?api_key="),
    axios("https://api.themoviedb.org/3/genre/movie/list?api_key="),
  ]).then((values) => {
    const [nowPlayingData, genreData] = values;

    return {
      nowPlaying: nowPlayingData.value.data,
      genre: genreData.value.data.genres,
    };
  });
}

export default DetailsView;
