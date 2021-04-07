import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Text, Grid } from "../elements";
import netflix from "../shared/netflix.png";
import ModalDetail from "./ModalDetail"
import { _axios, axiosTMDB, _baseURL, _ytbbaseURL } from "../shared/axios";


const Movie = (props) => {

    const [modal, setModal] = useState(false);

    const showModal = () => {
        setModal(true);
    }

    const closeModal = () => { 
        setModal(false);
    }


    return (
        <>
            <div className="movie" onClick={() => showModal()}>
                <img src={`https://image.tmdb.org/t/p/original/${props.backdrop_path}`} alt={props.id}/>
                
            </div>
            <ModalDetail
                containerName={"modalContainer " + (modal ? "show" : "hide")}
                name={props.title}
                overview={props.overview}
                show={modal}
                img={props.backdrop_path}
                onClick={() => closeModal()}
            />
        </>
    )
}

export default Movie;