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
    <HeaderWrap className="nav"  padding="4px 16px">
      <Grid  className="nav_logo" width="80px" margin="0px 12px" padding="16px">
        <img src={netflix} alt="Netflix" width="75" />
      </Grid>
      <Grid is_flex padding="16px">
        <Text margin="0px 12px" size="0.5rem">홈</Text>
        <Text margin="0px 12px" size="0.5rem">TV 프로그램</Text>
        <Text margin="0px 12px" size="0.5rem">영화</Text>
        <Text margin="0px 12px" size="0.5rem">인기있는콘텐츠</Text>
      </Grid>
      <Grid width="30%" padding="10px 8px" border-size="border-box" >
        <Button className="logoutBtn"isLogout text="로그아웃" _onClick={()=>{
            console.log("로그아웃!")
            //history.push('../pages/UnloginMain.js');
            }}>
        </Button>
      </Grid>
    </HeaderWrap>
  );
});

const HeaderWrap = styled.div`
  height: 50px;
  width: 100vw;
  position: fixed;
  z-index: 999;
  opacity: 0.7;
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
