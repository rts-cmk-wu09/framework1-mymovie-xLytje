import { useLottie } from "lottie-react";
import ErrorDino from "../lottie/error-dino.json";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BackButton = styled.button`
  background-color: white;
  color: black;
  border: solid 1px;
  border-color: black;
  border-radius: 2500px;
  padding: 5px 10px;
  font-size: 16px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ErrorView = () => {
    const options = {
        animationData: ErrorDino,
        loop: true
      };
    
      const { View } = useLottie(options);

      return (
        <>
        {View}
        <StyledDiv>
            <Link to="/" >
                <BackButton>Back to frontpage</BackButton>    
            </Link>  
        </StyledDiv>
        </>
      );
}
 
export default ErrorView;