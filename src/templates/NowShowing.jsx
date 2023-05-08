import styled from "styled-components";
import Image from "../components/Image";
import Rating from "../components/Rating";
import Heading from "../components/Heading";
import coverimage from "../assets/moviecover.png";
import { Link, useLoaderData } from "react-router-dom";

const StyledArticle = styled.article`
  height: 283px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NowShowing = () => {
const MovieCardData = useLoaderData();

  return (
    <>
      {MovieCardData.results.map((data) => (
        <Link to="details/">
          <StyledArticle>
            <figure>
              <Image shadow={true} src={coverimage} alt="Cover Image" />
            </figure>
            <Heading title={data.title} size="14" as="h3" />
            <Rating />
          </StyledArticle>
        </Link>
      ))}
    </>
  );
};

export async function loader() {
  const res = await fetch (
    "https://api.themoviedb.org/3/movie/now_playing/?api_key=242f42f718ba1802aa9e7f66ddd6c233"
  );
  const data = await res.json();
  return data;
}

export default NowShowing;
