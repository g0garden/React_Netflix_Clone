import React from "react";
import "./Header.css";

import styled from "styled-components";
import { Text, Grid, Button } from "../elements";

import netflix from "../shared/netflix.png";

import { history } from "../redux/configureStore";

const Header = React.memo((props) => {
  // const dispatch = useDispatch();
  // const [show, handleShow] = useState(false);

  const headerChange = () => {
    const navbox = document.querySelector(".nav");

    if (window.scrollY > 105) {
      navbox.style.position = "fixed";
      navbox.style.zIndex = "1500";
      navbox.style.backgroundColor = "black";
    } else {
      navbox.style.backgroundColor = "transparent";
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", headerChange);

    return () => window.removeEventListener("scroll", headerChange);
  }, []);

  return (
    <HeaderWrap className="nav">
      <Grid
        margin="0 0 0 8vh"
        className="nav_logo"
        width="80px"
        padding="12px 0 12px 0"
      >
        <img
          src={netflix}
          alt="Netflix"
          width="100"
          onClick={() => {
            history.push("/browse");
          }}
        />
      </Grid>
      <Grid is_flex padding="16px">
        <Text
          margin="0 12px 0 2vw"
          _onClick={() => {
            history.push("/");
          }}
        >
          홈
        </Text>
        <Text margin="0 12px">TV 프로그램</Text>
        <Text margin="0 12px">영화</Text>
        <Text margin="0 12px">인기 있는 콘텐츠</Text>
      </Grid>
      <Grid
        width="10%"
        className="logoutBtn"
        padding="12px"
        border-size="border-box"
      >
        <Button
          isLogout
          text="로그아웃"
          _onClick={() => {
            console.log("로그아웃!");
            //history.push('../pages/UnloginMain.js');
          }}
        ></Button>
      </Grid>
    </HeaderWrap>
  );
});

const HeaderWrap = styled.div`
  height: 50px;
  width: 100%;
  position: fixed;
  z-index: 1500;
  padding: 10px;
  display: flex;
  flex-direction: row;

  //Animation
  transition-timing-function: ease-in-out;
  transition: all 0.5s;
`;

export default Header;
