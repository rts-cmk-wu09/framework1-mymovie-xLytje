
import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border-radius: 25px;
  border: solid 2px black;
  font-size: 10px;
  letter-spacing: 2px;
  width: 80px;
  height: 30px;
`;


const SeeMoreBtn = () => {
  return <Button>See more</Button>;
};

export default SeeMoreBtn;
