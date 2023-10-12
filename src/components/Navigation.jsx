import { FaBookmark, FaHome, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background-color: #fff;
  font-size: 1.4rem;
  color: #979797;
  box-shadow: 0px 0px 5px 1px rgb(0 0 0 / 0.2);
`;
const StyledBookmark = styled(FaBookmark)`
  font-size: 1.4rem;
  color: #979797;
`;
const StyledHome = styled(FaHome)`
  font-size: 1.8rem;
  color: #979797;
`;
const StyledUser = styled(FaUserAlt)`
  font-size: 1.4rem;
  color: #979797;
`;

const Navigation = () => {
  return (
    <StyledNav className="dark:bg-black dark:shadow-3xl">
      <Link to={`/`}>
        <StyledHome />
      </Link>
      <Link to={`/favorite`}>
        <StyledBookmark />
      </Link>
      <Link to={`/`}>
        <StyledUser />
      </Link>
    </StyledNav>
  );
};

export default Navigation;
