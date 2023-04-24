import styled from "styled-components";
import {FaStar} from "react-icons/fa";

const Skrift = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const MovieRating = () => {
  return (
    <div>
        
      <Skrift><FaStar /> 9.10/10 IMDb</Skrift>
    </div>  
  );
};

export default MovieRating;
