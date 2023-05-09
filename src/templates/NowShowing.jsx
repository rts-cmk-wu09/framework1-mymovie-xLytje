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
  const { nowPlaying } = useLoaderData();
  console.log(nowPlaying);

  return (
    <>
      {nowPlaying.results.map((data) => (
        <Link to={`details/${data.id}`} key={data.id}>
          <StyledArticle>
            <figure>
              <Image
                shadow={true}
                width="143"
                src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
                alt="Cover Image"
              />
            </figure>
            <Heading title={data.title} size="14" as="h3" />
            <Rating voteAverage={data.vote_average} />
          </StyledArticle>
        </Link>
      ))}
    </>
  );
};

export default NowShowing;
