// import { useState } from "react";

// export function ColorChange() {
//   const [color, setColor] = useState("black");

//   return (
//     <>
//       <StyledFaRegBookmark onClick={() => setColor("#ffc319")} />
//     </>
//   );
// }

import { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  height: fit-content;
  width: fit-content;
  align-self: top;
  padding: 5px 0 0 25px;
`;

export default function Bookmark() {
  const [marked, setMarked] = useState(false);

  return (
    <StyledButton
      onClick={() => {
        setMarked(!marked);
      }}
    >
      {marked ? (
        <FaBookmark color="#ffc319" size={16} />
      ) : (
        <FaRegBookmark color="#000000" size={16} />
      )}
    </StyledButton>
  );
}
