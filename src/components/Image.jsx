import coverimage from "../assets/moviecover.png";
import styled from "styled-components";

const Billede = styled.img`
  border-radius: 5px;
`;

const Image = () => {
  return <Billede src={coverimage} alt="Spiderman:No Way Home" />;
};

export default Image;
