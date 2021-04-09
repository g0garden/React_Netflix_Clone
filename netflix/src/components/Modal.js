import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../elements";
import { MdInfoOutline as InfoB } from "react-icons/md";

import { _axios, _baseURL, _ytbbaseURL } from "../shared/axios";
import ModalDetail from "./ModalDetail";
//모달에 필요한 데이터

const Modal = (props) => {
  const movie = props;
  // console.log(movie);
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  if (props.isButton) {
    return (
      <React.Fragment>
        <Button _onClick={openModal} isInfo>
          <InfoB size="1.2em" />
          <span> 상세 정보</span>
        </Button>
        <ModalDetail
          movie={movie}
          open={modal}
          close={closeModal}
        ></ModalDetail>
      </React.Fragment>
    );
  }

  if (props.isRow) {
    return (
      <React.Fragment>
        {movie.Poster ? (
          <Imgdrop
            Poster
            onClick={openModal}
            imgPath={`${_baseURL}${movie.poster_path}`}
          ></Imgdrop>
        ) : (
          <Imgdrop
            onClick={openModal}
            imgPath={`${_baseURL}${movie.backdrop_path}`}
          >
            <textarea readonly="readonly">
              {movie?.title || movie?.name || movie?.original_name}
            </textarea>
          </Imgdrop>
        )}
        <ModalDetail
          movie={movie}
          open={modal}
          close={closeModal}
          // containerName={(modal ? "show" : "hide")}
        ></ModalDetail>
      </React.Fragment>
    );
  }

  //모달클릭시 모달디테일이 오픈되고, 모달디테일이 클릭시 모달이 close
};

const DetailMargin = styled.div`
  display: flex;
  text-align: center;
  margin: 10px auto;
`;

const Imgdrop = styled.div`
  object-fit: contain;
  background-color: #30303080;
  background-image: url(${(props) => `${props.imgPath}`});
  background-size: cover;
  background-position: center;
  width: 30vh;
  height: ${(props) => (props.Poster ? "48vh" : "17vh")};
  margin-right: 4px;
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
    font-size: 1.5em;
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
    z-index: 500;
    display: absolute;
  }
`;

export default Modal;
