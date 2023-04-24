import styled from "styled-components";

const Heading = ({text, size, type}) => {
    // skriver "style(type)" fordi "style.{type}" ikke virker. 
    // noget med strings? forstår ik helt
    const StyledHeading = styled(type)`
    font: ${size};
    color: #110e47;
    justify-self: center;
`;
    return <StyledHeading>{text}</StyledHeading>;
};

// const Heading = (props) => {
//     return <StyledHeading>{props.text}</StyledHeading>;
// };

export default Heading;