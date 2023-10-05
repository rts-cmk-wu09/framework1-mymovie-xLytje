// import { useState } from "react";

// export function ColorChange() {
//   const [color, setColor] = useState("black");

//   return (
//     <>
//       <StyledFaRegBookmark onClick={() => setColor("#ffc319")} />
//     </>
//   );
// }

import { useEffect, useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useParams } from "react-router-dom";
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
  const [render, setRender] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    if (render) {
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDJmNDJmNzE4YmExODAyYWE5ZTdmNjZkZGQ2YzIzMyIsInN1YiI6IjY0NTg5YWI2NmFhOGUwMDE3MzgwMjEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eahETNYDOtdt2ByOGwFWwQkJ0ungEL-OD5Y5-7oHe9c",
        },
        body: JSON.stringify({
          media_type: "movie",
          media_id: id,
          favorite: marked,
        }),
      };

      fetch("https://api.themoviedb.org/3/account/19377414/favorite", options)
        .then((res) => res.json())
        .then((json) => console.log(json))
        .catch((err) => console.error("error:" + err));
    }
    setRender(true);
  }, [marked]);
  return (
    <StyledButton
      onClick={() => {
        setMarked(!marked);
      }}
    >
      {marked ? (
        <FaBookmark color="#ffc319" size={16} />
      ) : (
        <FaRegBookmark color="#9c9c9c" size={16} />
      )}
    </StyledButton>
  );
}
