import styled from "styled-components";
import Image from "../components/Image";
import Rating from "../components/Rating";
import Heading from "../components/Heading";
import { Link, useLoaderData } from "react-router-dom";

const StyledArticle = styled.article`
  height: 283px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NowShowing = () => {
const {nowPlaying} = useLoaderData();
console.log(nowPlaying)

  return (
    <>
      {nowPlaying.results.map((data) => (
        <Link to={`details/${data.id}`} key={data.id}>
          <StyledArticle>
            <figure>
              <Image shadow={true} width="143" src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} alt="Cover Image" />
            </figure>
            <Heading title={data.title.length > 24 ? data.title.substring(0, 24) + "..." : data.title} size="14" as="h3" />
            {/* split(" ").slice(0, 4).join(" ") */}
            <Rating voteAverage={data.vote_average}/>
          </StyledArticle>
        </Link>
      ))}
    </>
  );
};

export async function loader() {
  const nowPlayingData = await (await fetch (
    "https://api.themoviedb.org/3/movie/now_playing/?api_key="
  )).json();
  const popularData = await (await fetch (
    "https://api.themoviedb.org/3/movie/popular/?api_key="
  )).json();
  return {nowPlaying: nowPlayingData, popular: popularData};
}

export default NowShowing;
