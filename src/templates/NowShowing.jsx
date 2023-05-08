import styled from "styled-components";
import Image from "../components/Image";
import Rating from "../components/Rating";
import Heading from "../components/Heading";
import coverimage from "../assets/moviecover.png";
import { useLoaderData } from "react-router-dom";

const StyledArticle = styled.article`
  height: 283px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NowShowing = () => {
const MovieCardData = useLoaderData();
console.log("MovieCardData" + MovieCardData);

  return (
    <StyledArticle>
      <figure>
        <Image shadow={true} src={coverimage} alt="Cover Image" />
      </figure>
      <Heading title="Venom Let There Be Carnage" size="14" as="h3" />
      <Rating />
    </StyledArticle>
  );
};

export async function loader() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/550?api_key="
  );
  const data = await res.jason();
  return data;
}

export default NowShowing;
