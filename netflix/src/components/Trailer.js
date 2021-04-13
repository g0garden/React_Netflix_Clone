/* 컴포넌트로 쓰이는 애들은 모두 대문자로 시작할 것. */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Grid, Button } from "../elements";

import { MdPlayArrow as PlayB } from "react-icons/md";

import { _axios, _baseURL, _ytbbaseURL } from "../shared/axios";
import { request } from "../shared/request";
import Modal from "./Modal";

const Trailer = (props) => {
  const [movie, setMovie] = useState([]);
  const [key, setKey] = useState([]);

  const requests = request[1].splice(5, 1);
  console.log(requests);

  // []가 의미하는 건(blank square bracket), '한번' 로딩되면, 또 로딩하지 않겠다. 한번만 로딩!!!
  // [movies]라고 하면 새로워질때마다 새로 로딩하겠다임?
  useEffect(() => {
    async function fetchData() {
      /* request에서 설정한 애들 중 랜덤으로 섹션 선택 */
      /* 문제: 스릴러(5), 호러(8) 같은 혐오감 드는 사진 포함된 열은 배제시켜야함 */
      /* 해결 : .remove(해당 열) */
      const getMovie = await _axios.get(
        requests[Math.floor(Math.random() * requests.length - 1)].url
      );
      /* 랜덤 섹션 중 랜덤 영화 1개 선택 */
      setMovie(
        getMovie.data[Math.floor(Math.random() * getMovie.data.length - 1)]
      );

      // const getKey = await _axios.get(requests.fetchKey);
      // const request = getMovie.concat(getKey);

      // console.log(getKey);
      return getMovie;
    }
    fetchData();
  }, []);

  console.log(movie);
  //const contentId = movie.contentId;

  // useEffect(() => {
  //   async function fetchData() {
  //     const getKey = await _axios.get(`${requests?.fetchKey}/${contentId}`);
  //     console.log(getKey);
  //     setKey(getKey.data.key);
  //     return getKey;
  //   }
  //   fetchData();
  // }, []);
  // console.log(key);

  // $(document).ready(function () {});

  return (
    <React.Fragment>
      <TrailerWrap>
        <TrailerPlay
          poster={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        ></TrailerPlay>
        <Grid>
          <FiveSecsLater>
            <MovieTitle>
              {/* /* 먼저 물어봐주는 이유는, 데이터 로딩 중에 undefined가 뜨기 때문*/}
              {movie?.title || movie?.name || movie?.original_name
                ? movie?.title || movie?.name || movie?.original_name
                : "Please wait"}
              <Avg>
                <p>
                  {movie?.average || movie?.vote_average
                    ? `${movie?.average || movie?.vote_average}점`
                    : "Please wait"}
                </p>
              </Avg>
            </MovieTitle>
            <TrailerSynopsis>{movie?.overview}</TrailerSynopsis>
          </FiveSecsLater>
          <Grid is_flex>
            <Button
              _onClick={() => {
                window.alert("잘 작동!");
              }}
              isPlay
            >
              <PlayB size="1.2em" />
              <span> 재생</span>
            </Button>
            <Modal {...movie} isButton />
            {/* ReferenceError: Adult is not defined 오류가 떴던 이유 -> 데이터 중에 adult 키(?)가 없는 애들이 있다. */}
            {movie.adult && movie.adult === "False" ? (
              <IsAdult>
                <div>일반</div>
              </IsAdult>
            ) : movie.adult === "True" ? (
              <IsAdult adult>
                <div>18</div>
              </IsAdult>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </TrailerWrap>
    </React.Fragment>
  );
};
Trailer.defaultProps = {};

const TrailerWrap = styled.div`
  /* border: 5px solid red; */
  padding-top: 10%;
  margin-bottom: 3%;
  width: 100%;
`;

const TrailerPlay = styled.video`
  /* 배경으로 깔기 */
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
  width: 100%;
  min-height: 20vh;
  max-height: 75vh;
  box-shadow: inset 0 0 3px black;

  border: 0;
  /* 지정 높이 넘치지 않기 */
  object-fit: cover;
  overflow: hidden;

  /* animation for Trailer backdrop_img */
  /* 원래의도 1. 비디오 소스를 넣는다. :video html tag 따로 있음 */
  /* 문제1 : source를 지정해야함 ex) mp4 or webm */
  /* 문제2 : 유투브->mp4전환 해결 X */
  /* 대안찾기 2 : 유투브 embed */
  /* 문제 : 시간상 embed 아직 해결 x */
  /* 대안 3 : backdrop_img에 애니메이션을 넣어 역동적으로.! */
  animation: movingTrailer ease-in-out 4s infinite;
  animation-direction: alternate;
  size: scale(1.2);
  /* 애니메이션 이름은 다르게해야함. 같게 하면 같은걸 가져옴.*/
  @keyframes movingTrailer {
    0% {
      /* !!!!!!!! 두줄로 쓰지말고, 쉼표 쓰지말고 해야 동시 실행 */
      transform: scale(1.4) translate(-5%, 5%);
    }
    100% {
      transform: scale(1.4) translate(5%, 0%);
    }
  }
`;

/* 시간지나면서 제목이 작아지게 하기 위해 div로 제목+줄거리 묶음 */
const FiveSecsLater = styled.div`
  animation: scaleTrailer 5s ease-in-out 3s forwards;
  transform-origin: bottom left;
  @keyframes scaleTrailer {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.75);
    }
  }
`;

const MovieTitle = styled.div`
  text-shadow: 0 0 2rem #30303090;
  /* 반응형 단위 : % rem em vw vh vmin vmax */
  /* vmin이 축소 됐을때 제일 적절한듯 */
  /* 좀더 업그레이드 된건 calc(?+?)형태인듯 */
  font-size: 11vmin;
  font-weight: 800;
  letter-spacing: -4px;
  width: 100%;
  color: white;
`;

/* Avg = movie's vote average box (평점 박스, 제목 옆에 달림!) */
const Avg = styled.div`
  display: inline-block;
  margin: 1vw;
  letter-spacing: initial;
  font-size: 0.25em;
  font-weight: 900;
  vertical-align: 3vw;
  height: 1.5vw;
  padding: 0.5vw 0;
  p {
    color: #fff;
    z-index: 19990;
    margin: auto;
    vertical-align: 8vw;
  }
`;

const TrailerSynopsis = styled.p`
  color: white;
  display: -webkit-box;
  overflow: hidden;
  max-width: 25em;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  font-size: 3vmin;
  letter-spacing: -1px;
  line-height: 150%;
  text-align: left;
  text-shadow: 2px 2px 7px #000000;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  user-select: none;
`;

/* is Trailer movie Adult or not */
/* ex. 일반 & 18 */
/* sticky tag to right */
const IsAdult = styled.div`
  /* sticky*/
  position: absolute;
  right: 0;

  background-color: #00000066;
  border-left: 3px solid #ffffff;
  padding: 0.2em 2em 0.2em 0.2em;
  color: white;
  div {
    ${(props) =>
      props.adult
        ? "background-color: red;"
        : "background: linear-gradient(to right, green , yellowgreen);"}
    text-shadow: 0 0 2px #6d6d6e66;
    user-select: none;
    padding: 5px;
    border-radius: 4px;
    font-weight: 900;
    font-size: 1.5vmin;
  }
`;

export default Trailer;
