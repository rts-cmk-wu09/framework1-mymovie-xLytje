import styled from "styled-components";
import Heading from "../components/Heading";
import Button from "../components/Button";
import dummyimage from "../assets/moviecover.png";
import Actor from "../components/Actor";

const NewLine = styled.div`
  flex-basis: 100%;
  height: 1rem;
`;

const MovieCast = () => {
  return (
    <section>
      <div className="flexContainer justify-space-between wrap">
        <Heading title="Cast" size="16" as="h2" />
        <Button title="See More" />
        <NewLine />
        <Actor imgsrc={dummyimage} />
        <Actor imgsrc={dummyimage} />
        <Actor imgsrc={dummyimage} />
        <Actor imgsrc={dummyimage} />
      </div>
    </section>
  );
};

export default MovieCast;
