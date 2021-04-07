import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Text, Grid, Button } from "../elements";
import { MdPlayArrow as PlayB } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import "./ModalDetail.css"

//모달에 필요한 데이터 
//: title,average,overview,contentId,backdrop_path,imgPath,releaseDate,adult

const ModalDetail = (props) => {

    const {open, close} =props;
    // console.log(props);
    const _movie = props.movie;
    // console.log(_movie);

    // const _containerName = props.containerName;
    // console.log(_containerName);

    return (
        <div className={open ? 'openModal modal': 'modal'}>
        { open ? (
            <section>
                <div className="modal">
                <img src={`https://image.tmdb.org/t/p/original/${_movie.backdrop_path}`} alt="bg"/>
                <div className="bg"></div>
                <div className="modal-content">
                    <h1>{_movie.name}</h1>
                    <p>{_movie.overview}</p>
                    <div className="btn">
                        <button><span>PLAY</span></button>
                        <button><span>MY LIST</span></button>
                        <button><span>DETAILS</span></button>
                        <button className="close" onClick={close}><span>Close</span></button>
                        </div>
                    </div>
                    </div>
            </section>
        )  : null
        } </div>
    )
    }
// const ModalWrap = styled.div`
//     display: ${(props) => props.open ? "block": "none"};

// `;
    
export default ModalDetail;
