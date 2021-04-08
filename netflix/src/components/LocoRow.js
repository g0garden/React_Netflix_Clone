import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Text, Grid } from "../elements";

import Modal from "./Modal";
import Movie from "./Movie";
import { _axios, axiosTMDB, _baseURL, _ytbbaseURL } from "../shared/axios";

const LocoRow = React.memo((props) => {
  const { sectionTitle, imgPath, fetchUrl, fetchUrlTMDB, Poster } = props;

  const [movies, setMovies] = useState([]);

  // []가 의미하는 건(blank square bracket), '한번' 로딩되면, 또 로딩하지 않겠다. 한번만 로딩!!!
  // [movies]라고 하면 새로워질때마다 새로 로딩하겠다임?
  useEffect(() => {
    async function fetchData() {
      if (fetchUrl) {
        const request = await _axios.get(fetchUrl);
        setMovies(request.data);
        return request;
      } else {
        const request = await axiosTMDB.get(fetchUrlTMDB);
        setMovies(request.data.results);
        return request;
      }
      // data structure를 알아보기 위해 console.log(request)을 찍어보기
      // 찍어보고 object의 구조를 파악하면 object > data > results에 내가 원하는 리스트가 있음.
    }
    fetchData();
  }, []);

  console.log(movies);

  return (
    <React.Fragment>
      <STText>{sectionTitle}</STText>
      <ImgWrap>
        {movies.map((movie) => {
          if (movies.length > 0) {
            return (
              <span>
                {movie.poster_path != "" && Poster ? (
                  <React.Fragment>
                    <Modal {...movie} Poster />
                  </React.Fragment>
                ) : movie.backdrop_path != "" ? (
                  <Modal {...movie}>
                    <textarea readonly="readonly">
                      {movie?.title || movie?.name || movie?.original_name}
                    </textarea>
                  </Modal>
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
  sectionTitle: "여기는 섹션별 제목",
  backdropPath: false,
};

const RowWrap = styled.div`
  position: absolute;
`;

const STText = styled.span`
  color: #fff;
  font-weight: 800;
  font-size: 1.5vw;
  opacity: 0.85;
  letter-spacing: -2px;
  transition: 150ms ease-in-out;
  :hover {
    opacity: 1;
  }
`;

const ImgWrap = styled.div`
  padding: 2vh 0;
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
  overflow: auto;
  scroll-behavior: smooth;
  margin-bottom: 5vh;
  color: #fff;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
    background-clip: padding-box;
    border: 3px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

export default LocoRow;
