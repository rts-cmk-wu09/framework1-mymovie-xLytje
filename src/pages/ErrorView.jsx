import Lottie from "lottie-react";
import ErrorPlug from "../lottie/error-plug.json";
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
      return (
        <>
        <Lottie animationData={ErrorPlug} loop={true} />
        <StyledDiv>
            <Link to="/" >
                <BackButton>Back to frontpage</BackButton>    
            </Link>  
        </StyledDiv>
        </>
      );
}
 
export default ErrorView;