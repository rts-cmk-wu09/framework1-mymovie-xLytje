import { useEffect, useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useFavorite } from "../hooks/useFavorites";

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
  const { id } = useParams();
  const favorite = useFavorite(parseInt(id));
  const [marked, setMarked] = useState(undefined);

  useEffect(() => {
    favorite && setMarked(favorite);
  }, [favorite]);
  const [render, setRender] = useState(false);
  useEffect(() => {
    if (render) {
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_TOKEN,
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
