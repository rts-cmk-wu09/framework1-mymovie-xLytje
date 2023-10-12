import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import Switch from "../components/Switch";
import Favorite from "../templates/Favorite";

const BackArrow = styled(FaArrowLeft)`
  stroke: black;
  stroke-width: 20;
  stroke-linecap: round;
  font-size: 1.5rem;
  margin: -5px 0 0 -5px;
`;

const StyledLink = styled(Link)`
  position: relative; /* fix z position on safari mobile */
  color: #fff;
  grid-column-start: 1;
  grid-row-start: 1;
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  height: 1em;
  width: 1em;
`;

const FavoriteView = () => {
  return (
    <>
      <header className="gridContainer header dark:bg-black">
        <StyledLink to={"/"}>
          <BackArrow />
        </StyledLink>
        <Switch justify="end" align="center" />
        <Heading title="MyMovies" size="16" as="h1" />
      </header>
      <main>
        <section className="VerticalMovieListContainer">
          <div className="flexContainer movieListContainerLayout">
            <Favorite />
          </div>
        </section>
      </main>
      <footer>
        <Navigation />
      </footer>
    </>
  );
};

export default FavoriteView;
