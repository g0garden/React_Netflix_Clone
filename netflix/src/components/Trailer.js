import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Text, Grid, Button } from "../elements";

import { MdPlayArrow as PlayB } from "react-icons/md";
import { MdInfoOutline as InfoB } from "react-icons/md";

import { useDispatch } from "react-redux";

import { _axios, _baseURL, _ytbbaseURL } from "../shared/axios";
import requests from "../shared/request";

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

  return (
    <React.Fragment>
      <TrailerWrap>
        <Grid is_flex>
          <VignetteTrailer coverDeg>
            <VignetteTrailer Vtop>
              <VignetteTrailer VBottom>
                <TrailerPlay
                  poster={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                  autoPlay
                  muted
                  loop
                >
                  <source src="" type="video/mp4" />
                </TrailerPlay>
              </VignetteTrailer>
            </VignetteTrailer>
          </VignetteTrailer>

          <TrailerBox left={4} bottom={10}>
            <Grid>
              <MovieTitle>
                {movie?.title || movie?.name || movie?.original_name}
                <Avg>
                  <p>{movie?.average || movie?.vote_average}</p>
                </Avg>
              </MovieTitle>
              <TrailerSynopsis>{movie.overview}</TrailerSynopsis>
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
                <Button
                  _onClick={() => {
                    window.alert("잘 작동!");
                  }}
                  isInfo
                >
                  <InfoB size="1.2em" />
                  <span> 상세 정보</span>
                </Button>
              </Grid>
            </Grid>
          </TrailerBox>
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

const VignetteTrailer = styled.div`
  width: 100%;
  max-height: 100vh;
  display: flex;
  background: ${(props) =>
    props.VBottom
      ? `linear-gradient(to bottom , rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 8%)`
      : props.Vtop
      ? `linear-gradient(to top , rgba(0, 0, 0, 0.9) 0, rgba(0, 0, 0, 0) 20%)`
      : props.coverDeg
      ? `linear-gradient(77deg , rgba(0, 0, 0, 0.6) 0, rgba(0, 0, 0, 0) 85%)`
      : ""};
`;

const TrailerPlay = styled.video`
  border: 0;
  width: 100%;
  object-fit: cover;
  z-index: -1;
`;

const TrailerBox = styled.div`
  display: flex;
  color: #fff;
  position: absolute;
  padding: 0 0 0 8vh;
  -webkit-transform-origin: bottom left;
`;

const MovieTitle = styled.div`
  /* background-size: cover; */
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
  z-index: 10;
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

export default Trailer;
