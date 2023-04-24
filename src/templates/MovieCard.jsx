import styled from "styled-components";
import Image from "../components/Image";
import Heading from "../components/Heading";
import MovieRating from "../components/MovieRating";

const StyledArticle = styled.article`
  height: 283px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MovieCard = () => {
  return (
    <StyledArticle>
      <figure>
        <Image />
      </figure>
      <Heading text="Movie name" size="16px" type="h3" weight="300"/>
      <MovieRating />
    </StyledArticle>
  );
};

export default MovieCard;