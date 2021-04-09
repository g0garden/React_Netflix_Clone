import React from "react";
import styled from "styled-components";

import { Text, Grid, Button } from "../elements";
import { MdPlayArrow as PlayB } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillCloseCircle,
} from "react-icons/ai";

import "./ModalDetail.css";

//모달에 필요한 데이터
//: title,average,overview,contentId,backdrop_path,imgPath,releaseDate,adult
// .adult
// .average
// .backdrop_path
// .contentId
// .genre
// .id
// .overview
// .poster_drop
// .releaseDate
// .title
const ModalDetail = (props) => {
  const { open, close } = props;
  // console.log(props);
  const _movie = props.movie;
  // console.log(_movie);

  return (
    <div className={open ? "openModal modal" : "closeModal modal"}>
      {open ? (
        <Grid is_flex>
          <div className="modal">
            <Backfilm onClick={close} />
            <ModalBox>
              <AiFillCloseCircle className="close" size="2em" onClick={close} />
              <ModalDetailImg
                imgPath={`https://image.tmdb.org/t/p/original/${_movie.backdrop_path}`}
              ></ModalDetailImg>
              <InfoBox>
                <MovieTitle>
                  {_movie?.title || _movie?.name || _movie?.original_name}
                  <PlayB size="2rem" onClick={() => {}} />
                  <MdCheckCircle size="2rem" onClick={() => {}} />
                  <AiOutlineLike size="2rem" onClick={() => {}} />
                  <AiOutlineDislike size="2rem" onClick={() => {}} />
                </MovieTitle>
                <MovieInfo>
                  {_movie.releaseDate ? (
                    <span>{_movie?.releaseDate.slice(0, 4)}</span>
                  ) : _movie.release_date ? (
                    <span>{_movie?.release_date.slice(0, 4)}</span>
                  ) : (
                    ""
                  )}
                  {_movie?.adult === "True" ? (
                    <span>18+</span>
                  ) : (
                    <span>일반</span>
                  )}
                  {_movie.average || _movie.vote_average ? (
                    <span>
                      평점 : {_movie?.average || _movie?.vote_average}
                    </span>
                  ) : (
                    ""
                  )}
                </MovieInfo>
                <TrailerSynopsis>
                  <p>{_movie?.overview || _movie?.synopsis}</p>
                </TrailerSynopsis>
              </InfoBox>
            </ModalBox>
          </div>
        </Grid>
      ) : null}{" "}
    </div>
  );
};

const ModalDetailImg = styled.footer`
  z-index: 899;
  object-fit: contain;
  background-color: #ffffff80;
  background-image: url(${(props) => props.imgPath});
  background-size: cover;
  background-position: center;
  display: flex;
  width: 100%;
  height: 40vh;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const ModalBox = styled.div`
  max-width: 60rem;
  margin: auto;
  display: block;
  background-color: #181818;
  border-radius: 15px;
  box-shadow: 0 0 3rem #000;
  user-select: auto;
  z-index: 1200;
`;

const Backfilm = styled.div`
  background-color: #00000040;
  z-index: 700;
  position: fixed;
  width: 100%;
  height: 100%;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: fit-content;
  text-align: left;
`;

const MovieTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  width: 100%;
`;

const MovieInfo = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-weight: 600;
  span {
    /* ${(_movie) =>
      _movie.adult === "True" ? "color:red;" : "color:green;"} */
    justify-content: flex-start;
    margin: auto auto auto 0;
  }
`;

const InfoBox = styled.div`
  margin: 0 3vh 3vh 3vh;
`;

const TrailerSynopsis = styled.p`
  text-overflow: ellipsis;
  white-space: normal;
  font-size: 1rem;
  letter-spacing: -1px;
  line-height: 150%;
  text-align: left;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  user-select: none;
`;

export default ModalDetail;
