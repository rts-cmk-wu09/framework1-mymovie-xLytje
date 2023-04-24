import styled from "styled-components";
import { useState } from "react";
import ReactSwitch from "react-switch";


const StyledSwitch = styled(ReactSwitch)`
    grid-column-start: 3;
    justify-self: end;
`;

const Switch = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = () =>{
        setChecked(!checked);
    };
    return ( <StyledSwitch checked={checked} onChange={handleChange}/> );
}
 
export default Switch;