import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { Text, Grid } from "../elements";
import netflix from "../shared/netflix.png";


import axios, { _baseURL } from "../shared/axios";
// import res from "../shared/response";

const LocoRow = React.memo((props) => {
  // const dispatch = useDispatch();
  const { sectionTitle, imgPath, fetchUrl, Poster } = props;

  const [movies, setMovies] = useState([]);

  // []가 의미하는 건(blank square bracket), '한번' 로딩되면, 또 로딩하지 않겠다. 한번만 로딩!!!
  // [movies]라고 하면 새로워질때마다 새로 로딩하겠다임?
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // data structure를 알아보기 위해 console.log(request)을 찍어보기
      // 찍어보고 object의 구조를 파악하면 object > data > results에 내가 원하는 리스트가 있음.
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <React.Fragment>
      <STText>{sectionTitle}, 섹션</STText>
      <ImgWrap>
        {/* key값이 없어도 찾기는 하는데, key있으면 더 빠르다!!! */}
        {movies.map((movie) => (
          <span>
            {Poster ? (
              <Imgdrop
                Poster
                key={movie.id}
                imgPath={`${_baseURL}${movie.backdrop_path}`}
              />
            ) : (
              <Imgdrop
                key={movie.id}
                imgPath={`${_baseURL}${movie.backdrop_path}`}
              />
            )}
            {movie?.title || movie?.name || movie?.original_name}
          </span>
        ))}
      </ImgWrap>
    </React.Fragment>
  );
});

LocoRow.defaultProps = {
  sectionTitle: "여기는 섹션별 제목",
  backdropPath: false,
};

const STText = styled.p`
  color: #fff;
  font-weight: 700;
  font-size: 1.5vw;
  opacity: 0.9;
  :hover {
    opacity: 1;
  }
`;

const ImgWrap = styled.div`
  padding: 2vh;
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
  margin-bottom: 5vh;
  color: #fff;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Imgdrop = styled.div`
  z-index: 999;
  display: inline-block;
  object-fit: contain;
  background-color: #ffffff80;
  background-image: url(${(props) => `${props.imgPath}`});
  background-size: cover;
  background-position: center;
  width: 32vh;
  height: ${(props) => (props.Poster ? "64vh" : "18vh")};
  margin-right: 0.25vw;
  border-radius: 0.25rem;
  transition: transform 150ms ease-in-out;
  :hover {
    transform: scale(1.05);
  }
`;

export default LocoRow;