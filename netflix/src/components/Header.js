import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";

import styled from "styled-components";
import { Text, Grid, Button } from "../elements";

import netflix from "../shared/netflix.png";

import { history } from "../redux/configureStore";
import { actionCreators as userActions } from "../redux/modules/user";

// import { apiKey } from "../../shared/firebase";

const Header = React.memo((props) => {
  // const dispatch = useDispatch();
  // const [show, handleShow] = useState(false);

  // useEffect{() => {
  //   window.addEventListener("scroll", () => {
  //     if(window.scrollY > 100) {
  //       handleShow(true);
  //     }else handleShow(false);
  //   });
  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // },[]);

  return (
    <HeaderWrap className="nav">
      <Grid
        margin="0 0 0 8vh"
        className="nav_logo"
        width="80px"
        padding="12px 0 12px 0"
      >
        <img src={netflix} alt="Netflix" width="120" />
      </Grid>
      <Grid is_flex padding="16px">
        <Text margin="0 0 0 3vw" size="1.0vw">
          홈
        </Text>
        <Text margin="0px 12px" size="1.0vw">
          TV 프로그램
        </Text>
        <Text margin="0px 12px" size="1.0vw">
          영화
        </Text>
        <Text margin="0px 12px" size="1.0vw">
          인기있는콘텐츠
        </Text>
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
  width: 100vw;
  position: fixed;
  z-index: 1500;
  padding: 6px 16px;
  font-size: 1.5vw;
  opacity: 1;
  /*background-color: transparent */
  /* border-bottom: 1px solid grey; */
  display: flex;
  flex-direction: row;

  //Animation
  /* transition-timing-function: ease-in;
  transition: all 0.5s;
  & */
`;

export default Header;
