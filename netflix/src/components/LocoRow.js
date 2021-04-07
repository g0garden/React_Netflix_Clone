import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { Text, Grid } from "../elements";
import netflix from "../shared/netflix.png";

import { _axios, axiosTMDB, _baseURL, _ytbbaseURL } from "../shared/axios";
// import res from "../shared/response";

const LocoRow = React.memo((props) => {
  // const dispatch = useDispatch();
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
      console.log(request.data);
      setMovies(request.data);
      return request;
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <STText>{sectionTitle}</STText>
      <ImgWrap>
        {/* key값이 없어도 찾기는 하는데, key있으면 더 빠르다!!! */}
        {movies.map((movie) => {
          if (movies.length > 0) {
            // console.log(movies);
            // console.log(movies.length);
            return (
              <span>
                {movie.poster_path != "" && Poster ? (
                  <Imgdrop
                    Poster
                    key={movie.id}
                    imgPath={`${_baseURL}${movie.poster_path}`}
                  />
                ) : movie.backdrop_path != "" ? (
                  <Imgdrop
                    key={movie.id}
                    imgPath={`${_baseURL}${movie.backdrop_path}`}
                    href="/"
                  >
                    <textarea readonly="readonly">
                      {movie?.title || movie?.name || movie?.original_name}
                    </textarea>
                  </Imgdrop>
                ) : (
                  ""
                )}
              </span>
            );
          } else {
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

const contentsTitle = styled.span`
  color: #fff;
  font-weight: 800;
  font-size: 3vw;
  letter-spacing: -2px;
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

const Imgdrop = styled.div`
  z-index: 990;
  object-fit: contain;
  background-color: #ffffff80;
  background-image: url(${(props) => `${props.imgPath}`});
  background-size: cover;
  background-position: center;
  width: 32vh;
  height: ${(props) => (props.Poster ? "52vh" : "18vh")};
  margin-right: 0.3vw;
  border-radius: 0.25rem;
  box-shadow: 0 0 4px #00000080;
  transition: transform 150ms ease-in-out;
  position: relative;
  textarea {
    font-family: Verdana;
    text-align: center;
    color: #fff;
    background-color: transparent;
    user-select: none;
    border: none;
    outline: none;
    text-overflow: ellipsis;
    max-width: 100%;
    text-shadow: 0px 0px 5px #00000090;
    font-weight: 800;
    font-size: 1.5vw;
    margin: 0;
    position: absolute;
    bottom: 1%;
    left: 50%;
    justify-content: space-between;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, 0);
    resize: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  :hover {
    transform: scale(1.05);
    z-index: 999;
  }
`;

export default LocoRow;
