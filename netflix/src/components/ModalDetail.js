import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Text, Grid, Button } from "../elements";
import { MdPlayArrow as PlayB} from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";
import {AiOutlineLike,AiOutlineDislike,AiFillCloseCircle} from "react-icons/ai"

import { useDispatch, useSelector } from "react-redux";

import "./ModalDetail.css"

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

    const {open, close} =props;
    // console.log(props);
    const _movie = props.movie;
    // console.log(_movie);


    return (
        <div className={open ? 'openModal modal': 'modal'}>
        { open ? (
            <Wrapper>
                <div className="modal">
                <ModalBox>
                <ModalDetailImg 
                imgPath=
                {`https://image.tmdb.org/t/p/original/${_movie.backdrop_path}`} 
                alt="bg">
                </ModalDetailImg>
                <button className="close"size="1.2em" onClick={close}>
                    <AiFillCloseCircle />
                </button>
                <div className="bg"></div>
                    <MovieTitle>{_movie.name}</MovieTitle>
                    <ButtonBox border="1px solid red">
                        <PlayB size="1.2em">
                            <span>PLAY</span>
                        </PlayB>
                        <MdCheckCircle size="1.2em"/>
                        <AiOutlineLike size="1.2em"/>
                        <AiOutlineDislike size="1.2em"/>
                        
                    </ButtonBox>
                    <ReleaseDate>
                        {_movie.releaseDate}
                    </ReleaseDate>
                    <TrailerSynopsis>
                        {_movie.overview}
                    </TrailerSynopsis>
                    </ModalBox>
                </div>
                    
            </Wrapper>
        )  : null
        } </div>
    )
    }
// const ModalWrap = styled.div`
//     display: ${(props) => props.open ? "block": "none"};
// `;

const Wrapper = styled.div`
    display:flex;
    /* text-align: center;
    margin : 10px auto; */
`;


const ModalDetailImg = styled.div`
    z-index: 999;
    object-fit: contain;
    background-color: #ffffff80;
    background-image: url(${(props) => `${props.imgPath}`});
    background-size: cover;
    background-position: center;
    width: 50%;
    margin-right: 0.3vw;
    border-radius: 0.25rem;
    box-shadow: 0 0 4px #00000080;
    transition: transform 150ms ease-in-out;
    position: relative;
`;



const ModalBox = styled.div`
    width: 50%;
    position: fixed;
    z-index: 989;
    background-color: white;
    border: 1px solid blue;
`;

const ReleaseDate = styled.div`
    
`;

const MovieTitle = styled.div`
  /* background-size: cover; */
    font-size: 5vw;
    font-weight: 800;
    letter-spacing: -4px;
    width: 100%;
`;

const ButtonBox = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 5px;
    width: 100px;
    border: 1px solid red;
`;

const TrailerSynopsis = styled.p`
    display: -webkit-box;
    overflow: hidden;
    width: 35vw;
    text-overflow: ellipsis;
    white-space: normal;
    word-wrap: break-word;
    font-size: 1.2vw;
    letter-spacing: -1px;
    line-height: 150%;
    text-align: left;
    text-shadow: 2px 2px 7px #000000;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    user-select: none;
`;


export default ModalDetail;
