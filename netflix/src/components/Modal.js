import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Text, Grid, Button } from "../elements";
import { MdPlayArrow as PlayB } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { _axios, axiosTMDB, _baseURL, _ytbbaseURL } from "../shared/axios";
import ModalDetail from './ModalDetail';
//모달에 필요한 데이터 

const Modal = (props) => {
    
    const movie = props;
    // console.log(movie);
    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    //모달클릭시 모달디테일이 오픈되고, 모달디테일이 클릭시 모달이 close
    return (
        <React.Fragment>
            <React.Fragment>
            {movie.Poster ? (
            <Imgdrop
            Poster 
            onClick={openModal}
            imgPath={`${_baseURL}${movie.poster_path}`}>
            </Imgdrop>
            ) : (
            <Imgdrop 
            onClick={openModal}
            imgPath={`${_baseURL}${movie.backdrop_path}`}>
            <textarea readonly="readonly">
                {movie?.title || movie?.name || movie?.original_name}
            </textarea>
            </Imgdrop>) }
            <DetailMargin>
                <ModalDetail 
                    movie={movie} 
                    open={ modal}
                    close={closeModal}
                    // containerName={(modal ? "show" : "hide")} 
                >
                </ModalDetail>
            </DetailMargin>
            </React.Fragment>
        </React.Fragment>
    )

}

const DetailMargin = styled.div`
    display:flex;
    text-align: center;
    margin : 10px auto;
`;

const Imgdrop = styled.div`
    z-index: 999;
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


export default Modal;

