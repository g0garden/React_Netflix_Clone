import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Modal from "./Modal";
import { _axios, axiosTMDB } from "../shared/axios";

const LocoRow = React.memo((props) => {
  const { sectionTitle, fetchUrl, fetchUrlTMDB, Poster } = props;

  const [movies, setMovies] = useState([]);

  // []가 의미하는 건(blank square bracket), '한번' 로딩되면, 또 로딩하지 않겠다. 한번만 로딩!!!
  // [movies]라고 하면 새로워질때마다 새로 로딩하겠다임?
  useEffect(() => {
    async function fetchData() {
      if (fetchUrl) {
        const request = await _axios.get(fetchUrl);
        setMovies(request.data.slice(0, 10));
        // setMovie(
        //   request.data[Math.floor(Math.random() * request.data.length - 1)]
        // );
        return request;
      } else {
        const request = await axiosTMDB.get(fetchUrlTMDB);
        /* .slick(0,10)은 데이터를 잘라서 10개만 가져올것이라는 뜻 */
        /* 안하면 모든 데이터를 불러오기 때문에 로딩 시간이 길어짐 */
        /* -> 근데 항상 똑같은 10가지만 불러오는거라서, array를 random으로 섞고 10가지만 추출하는 것 공부해보면 좋을듯 */
        setMovies(request.data.results.slice(0, 10));
        return request;
      }
      // data structure를 알아보기 위해 console.log(request)을 찍어보기
      // 찍어보고 object의 구조를 파악하면 object > data > results에 내가 원하는 리스트가 있음.
    }
    fetchData();
  }, []);

  // console.log(movies);

  return (
    <React.Fragment>
      <STText>{sectionTitle}</STText>
      <ImgWrap>
        {movies.map((movie) => {
          if (movies.length > 0) {
            return (
              <span>
                {movie.poster_path !== "" && Poster ? (
                  <Modal {...movie} Poster isRow />
                ) : movie.backdrop_path !== "" ? (
                  <Modal {...movie} isRow />
                ) : (
                  ""
                )}
              </span>
            );
          }
        })}
      </ImgWrap>
    </React.Fragment>
  );
});

LocoRow.defaultProps = {
  sectionTitle: "Title",
};

const STText = styled.span`
  color: #fff;
  font-weight: 800;
  font-size: 3vmin;
  opacity: 0.85;
  letter-spacing: -1px;
  transition: 150ms ease-in-out;
  :hover {
    opacity: 1;
  }
`;

const ImgWrap = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: none;
  overflow: auto;
  scroll-behavior: smooth;
  padding: 1.2vmin 0 1.2vmin 0;
  margin: 0 0 3vmin 0;

  /* overflow-x scrollbar css */
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff000080;
    border-radius: 10px;
    background-clip: padding-box;
    border: 6px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
    /* box-shadow: inset 0px 0px 6px #ff000080; */
  }
`;

export default LocoRow;
