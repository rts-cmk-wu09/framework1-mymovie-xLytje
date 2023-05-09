import { useLoaderData, useResolvedPath } from "react-router-dom";

const coverimage = () => {
  const { popular, genre, nowPlaying } = useLoaderData();
  const url = useResolvedPath().pathname.slice(9);
  const either = [popular, nowPlaying];
  const dataDetail = either[0].results.find(
    (data) => data.id === parseInt(url)
  );
  const coverImage = `https://image.tmdb.org/t/p/w500${dataDetail.backdrop_path}`;

  return coverImage;
};

export default coverimage;
