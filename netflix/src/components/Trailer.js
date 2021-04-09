import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Grid, Button, Vignette } from "../elements";

import { MdPlayArrow as PlayB } from "react-icons/md";

import { _axios, _baseURL, _ytbbaseURL } from "../shared/axios";
import requests from "../shared/request";
import ModalDetail from "./ModalDetail";
import Modal from "./Modal";

const Trailer = (props) => {
  const [movie, setMovie] = useState([]);
  const [key, setKey] = useState([]);

  // []가 의미하는 건(blank square bracket), '한번' 로딩되면, 또 로딩하지 않겠다. 한번만 로딩!!!
  // [movies]라고 하면 새로워질때마다 새로 로딩하겠다임?
  useEffect(() => {
    async function fetchData() {
      const getMovie = await _axios.get(requests.fetchActionMovies);
      setMovie(
        getMovie.data[Math.floor(Math.random() * getMovie.data.length - 1)]
      );
      // const getKey = await _axios.get(requests.fetchKey);
      // const request = getMovie.concat(getKey);

      // console.log(getKey);

      // 랜덤으로 선택할거임.
      // 받아온 데이터 array 중 하나의 데이터 [1]째 / [7] 등등 데이터를 가져올것임.

      return getMovie;
    }
    fetchData();
  }, []);

  //console.log(movie);
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

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <React.Fragment>
      <TrailerWrap>
        <Grid is_flex hidden>
          <Vignette deg>
            <Vignette right=".8">
              <Vignette left=".8">
                <Vignette bottom=".8">
                  <Vignette top=".8">
                    <TrailerPlay
                      poster={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    ></TrailerPlay>
                  </Vignette>
                </Vignette>
              </Vignette>
            </Vignette>
          </Vignette>

          <TrailerBox>
            <Grid>
              <MovieTitle>
                {movie?.title || movie?.name || movie?.original_name}
                <Avg>
                  <p>{movie?.average || movie?.vote_average}</p>
                </Avg>
              </MovieTitle>
              <TrailerSynopsis>{movie?.overview}</TrailerSynopsis>
              <Grid>
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
              </Grid>
            </Grid>
          </TrailerBox>
          {movie.adult === "False" ? (
            <Adult>
              <div>일반</div>
            </Adult>
          ) : movie.adult === "True" ? (
            <Adult adult>
              <div>18</div>
            </Adult>
          ) : (
            ""
          )}
        </Grid>
      </TrailerWrap>
    </React.Fragment>
  );
};

Trailer.defaultProps = {};

const TrailerWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

const TrailerPlay = styled.video`
  border: 0;
  width: 100%;
  object-fit: cover;
  z-index: -1;
  overflow: hidden;
  animation: scale 4s infinite;
  animation-direction: alternate;
  size: scale(1.2);
  @keyframes scale {
    0% {
      transform: scale(2);
      transform: translate(-2%, 2%);
    }
    100% {
      transform: scale(2);
      transform: translate(2%, -2%);
    }
  }
`;

const TrailerBox = styled.div`
  display: flex;
  color: #fff;
  position: absolute;
  padding: 0 0 0 8vh;
`;

const MovieTitle = styled.div`
  text-shadow: 0 0 3rem #30303080;
  mix-blend-mode: hard-light;
  font-size: 5vw;
  font-weight: 800;
  letter-spacing: -4px;
  width: 100%;
`;

const Avg = styled.div`
  display: inline-block;
  margin: 1vw;
  letter-spacing: initial;
  font-weight: 800;
  font-size: 1.5vw;
  opacity: 0.8;
  vertical-align: 3vw;
  height: 1.5vw;
  padding: 0.5vw 0;
  border-bottom: 3px solid #fff;
  p {
    color: #fff;
    z-index: 19990;
    margin: auto;
    vertical-align: 8vw;
  }
`;

const TrailerSynopsis = styled.p`
  display: -webkit-box;
  overflow: hidden;
  width: 35vw;
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

const Adult = styled.div`
  width: 8vw;
  position: absolute;
  top: 40rem;
  right: 0;
  background-color: #00000066;
  color: white;
  border-left: 3px solid #ffffff;
  display: flex;
  div {
    ${(props) =>
      props.adult
        ? "background-color: red;"
        : "background: linear-gradient(to right, green , yellowgreen);"}
    font-size: 1.5vw;
    font-weight: 900;
    text-shadow: 0 0 2px #6d6d6e66;
    user-select: none;
    display: inline-block;
    padding: 5px;
    border-radius: 4px;
    margin: 5px;
    letter-spacing: -2px;
  }
`;

export default Trailer;
