import styled from "styled-components";
import coverimage from "../assets/moviecover.png";

const StyledImg = styled.img`
  box-shadow: rgba(0, 0, 0, 0.1) 0 5px 5px 2px;
  border-radius: 5px;
`;

const Image = () => {
  return <StyledImg src={coverimage} alt="Billede af film" />;
};

export default Image;