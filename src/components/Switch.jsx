import { useState } from "react";
import ReactSwitch from "react-switch";

const Switch = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = () =>{
        setChecked(!checked);
    };
    return ( <ReactSwitch checked={checked} onChange={handleChange}/> );
}
 
export default Switch;