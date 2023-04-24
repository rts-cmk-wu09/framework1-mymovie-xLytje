import Image from "../components/Image";
import HeadingThree from "../components/HeadingThree";
import MovieRating from "../components/MovieRating";



//SFC
const MovieCard = () => {
  return (
    <article>
      <figure>
        <Image/>
      </figure>
      <HeadingThree />
      <MovieRating />
    </article>
  );
};

export default MovieCard;
