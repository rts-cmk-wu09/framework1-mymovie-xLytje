import styled from "styled-components";
import Heading from "../components/Heading";
import Rating from "../components/Rating";
import Image from "../components/Image";
import Label from "../components/Label";
import Time from "../components/Time";
import { Link, useLoaderData } from "react-router-dom";

const StyledArticle = styled.article`
  display: flex;
  gap: 1rem;
`;
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledDiv = styled.div`
  display: flex;
  gap: 8px;
`;

const MovieItem = () => {
const {popular} = useLoaderData();
console.log(popular)

  return (
    <>
    {popular.results.map((data) => (
      <Link to={`details/${data.id}`} key={data.id}>
        <StyledArticle>
        <Image src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} width="85" height="120" />
        <StyledSection>
          <Heading title={data.title} size="14" as="h3" />
          <Rating voteAverage={data.vote_average}/>
          <StyledDiv>
            <Label title={data.genre_ids[1]} />
            <Label title="thriller" />
            <Label title="documentary" />
          </StyledDiv>
          <Time />
        </StyledSection>
        </StyledArticle>
      </Link>
    ))};
    </>
  );
};

// export async function loader() {
//   const res = await fetch (
//     "https://api.themoviedb.org/3/movie/popular/?api_key="
//   );
//   const data = await res.json();
//   return data;
// }

export default MovieItem;
