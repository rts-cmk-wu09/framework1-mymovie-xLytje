import styled from "styled-components";

const Heading = ({text, size}) => {
    const StyledHeading = styled.h1`
  font-size: ${size};
  color: #110e47;
  justify-self: center;
`;
    return <StyledHeading>{text}</StyledHeading>;
};

// const Heading = (props) => {
//     return <StyledHeading>{props.text}</StyledHeading>;
// };

export default Heading;