import styled from "styled-components";
import Switch from "../components/Switch";
import { FaArrowLeft, FaPlay, FaRegBookmark } from "react-icons/fa";
import Label from "../components/Label";
import Heading from "../components/Heading";
import Rating from "../components/Rating";
import MovieDescription from "../templates/MovieDescription";
import MovieCast from "../templates/MovieCast";
import { Link, useLoaderData, useResolvedPath } from "react-router-dom";
import coverimage from "../components/Cover";

const StyledFaArrowLeft = styled(FaArrowLeft)`
  color: #fff;
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
const StyledHeader = styled.header`
  background-image: url(${coverimage});
  background-size: cover;
  background-blend-mode: multiply;
  background-position: 0px 20%;
  padding: 2rem;
  display: grid;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.3);
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
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const StyledFaRegBookmark = styled(FaRegBookmark)`
  align-self: center;
`;
const StyledGridSection = styled.section`
  display: grid;
  grid-template-columns: 25vw 25vw 25vw;
`;
const StyledFlexSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
const StyledP = styled.p`
  margin-top: 5px;
  font-weight: 500;
  font-size: 12px;
`;

const DetailsView = () => {
  const { popular, genre, nowPlaying } = useLoaderData();
  const url = useResolvedPath().pathname.slice(9);
  const either = [popular, nowPlaying];
  const dataDetail = either[1].results.find(
    (data) => data.id === parseInt(url)
  );

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
        <StyledSection>
          <div className="flexContainer justify-space-between">
            <Heading title={dataDetail.title} size="20" as="h1" />
            <StyledFaRegBookmark />
          </div>
          <Rating voteAverage={dataDetail.vote_average} />
          <StyledFlexSection>
            {dataDetail.genre_ids.map((id) => (
              <Label
                title={genre.find((genre) => id === genre.id).name}
                key={id}
              ></Label>
            ))}
          </StyledFlexSection>
          <StyledGridSection>
            <Heading title="Length" size="12" as="h4" />
            <Heading title="Langauge" size="12" as="h4" />
            <Heading title="Rating" size="12" as="h4" />
            <StyledP>Length4</StyledP>
            <StyledP>Length4</StyledP>
            <StyledP>Length4</StyledP>
          </StyledGridSection>
        </StyledSection>
        <MovieDescription text={dataDetail.overview} />
        <MovieCast />
      </StyledMain>
    </>
  );
};

// export const detailsViewData = async ({ params }) => {
//   return await axios(
//     `https://api.themoviedb.org/3/movie/${params.id}?api_key=$&append_to_response=videos`
//   ).then((details) => {
//     return details.data;
//   });
// };

export default DetailsView;
