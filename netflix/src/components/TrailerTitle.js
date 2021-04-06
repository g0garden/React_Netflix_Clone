import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { Text, Grid, Button } from "../elements";
import netflix from "../shared/netflix.png";

import { history } from "../redux/configureStore";
import { actionCreators as userActions } from "../redux/modules/user";

import { MdPlayArrow as PlayB } from "react-icons/md";
import { MdInfoOutline as InfoB } from "react-icons/md";


// import { apiKey } from "../../shared/firebase";

const TrailerTitle = React.memo((props) => {
  const dispatch = useDispatch();
  const { src } = props;

  return (
    <React.Fragment>
      <TrailerBox left={4} bottom={10}>
        <Grid>
          <MovieTitle>타이타닉</MovieTitle>
          <TrailerSynopsis>
            17세기 엄격한 사회 질서에 숨막혀 하는 미국 상류층 로즈는 사교계의
            굴레에서 벗어나지 못하는 어머니와 권위적인 재벌 귀족 약혼자와 함께
            미국으로 향하는 타이타닉호 1등실에 승선한다. 부두의 선술집에서
            도박으로 운 좋게 타이타닉호의 3등실 티켓을 얻은 가난한 화가 잭 역시
            아슬아슬하게 배에 승선한다. 첫 눈에 로즈에게 반한 잭은 갑판에서
            바다로 몸을 던지려 하는 로즈를 발견하고 재치 있는 언변과 행동으로
            그녀의 생명을 구한다. 이 사건을 계기로 1등실의 저녁식사에 초대받게
            되고 서로에게 끌리는 자신들을 발견한다.
          </TrailerSynopsis>
          <Grid>
            <Button
              _onClick={() => {
                window.alert("잘 작동!");
              }}
              isPlay
            >
              <PlayB size="1.2em"/> <span> 재생</span>
            </Button>
            <Button
              _onClick={() => {
                window.alert("잘 작동!");
              }}
              isInfo
            >
              <InfoB size="1.2em"/><span> 상세 정보</span>
            </Button>
            {/* <Button
              radius="4rem"
              bg="#ffffff"
              bgopacity="e6"
              _onClick={() => {
                window.alert("잘 작동!");
              }}
              text="음소거"
            /> */}
          </Grid>
        </Grid>
      </TrailerBox>
    </React.Fragment>
  );
});

export const TrailerBox = styled.div`
  display: flex;
  color: #fff;
  position: absolute;
  /* bottom:${(props) => props.bottom}vh;
  left: ${(props) => props.left}vh; */
  -webkit-transform-origin: bottom left;
`;

const MovieTitle = styled.div`
  /* background-size: cover; */
  font-size: 5vw;
  font-weight: 800;
  letter-spacing: -4px;
  width: 100%;
`;

const TrailerSynopsis = styled.p`
  display: -webkit-box;
  overflow: hidden;
  width:35vw;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  font-size: 1.5vw;
  letter-spacing: -1px;
  line-height: 150%;
  text-align: left;
  text-shadow: 2px 2px 7px #000000;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  user-select: none;
`;

export default TrailerTitle;
