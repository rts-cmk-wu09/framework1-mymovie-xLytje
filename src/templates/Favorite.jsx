import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import styled from "styled-components";
import Heading from "../components/Heading";
import Image from "../components/Image";
import Label from "../components/Label";
import Rating from "../components/Rating";
import Release from "../components/Release";

const StyledArticle = styled.article`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Favorite = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/account/19377414/favorite/movies?language=en-US&page=1&sort_by=created_at.asc";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_TOKEN,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovies(json.results))
      .catch((err) => console.error("error:" + err));
  }, []);
  const MovieData = useLoaderData();
  return (
    <section className="HorizontalMovieListContainer">
      {movies.map((movie) => (
        <Link to={`/details/${movie.id}`} key={movie.id}>
          <StyledArticle>
            <Image
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              width="85"
              height="120"
            />
            <StyledSection>
              <Heading title={movie.title} size="14" as="h3" />
              <Rating voteAverage={movie.vote_average} />
              <StyledDiv>
                {movie.genre_ids
                  .map((id) => (
                    <Label
                      title={
                        MovieData.genre.find((genre) => id === genre.id).name
                      }
                      key={id}
                    ></Label>
                  ))
                  .splice(0, 4)}
              </StyledDiv>
              <Release date={movie.release_date} />
            </StyledSection>
          </StyledArticle>
        </Link>
      ))}
    </section>
  );
};

export default Favorite;

// <section className="HorizontalMovieListContainer">
//   {/* {MovieData.popular.map((data) => ( */}
//   <Link to={`details/xxxxxx`} key="xxxxxx">
//     <StyledArticle>
//       <Image
//         // src={`https://image.tmdb.org/t/p/w200/poster_path`}
//         src={"https://picsum.photos/85/120"}
//         width="85"
//         height="120"
//       />
//       <StyledSection>
//         <Heading title="title" size="14" as="h3" />
//         <Rating voteAverage="5" />
//         <StyledDiv>
//           <Label title="horror" />
//           <Label title="thriller" />
//           <Label title="documentary" />
//         </StyledDiv>
//         <Release date="11.11.2012" />
//       </StyledSection>
//     </StyledArticle>
//   </Link>
//   {/* ))} */}
// </section>;
