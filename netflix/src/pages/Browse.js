import React from "react";

import {useDispatch, useSelector} from "react-redux";
import {Grid, Button, Text} from "../elements";
import {Trailer, TrailerTitle, LocoRow, PosterRow} from "../components";

import requests from '../shared/request';


const Browse = (props) => {
    const dispatch = useDispatch();
    return (
        <React.Fragment>
            <Grid margin="25vh 0 2vh 8vh">
            <Trailer />
            <TrailerTitle />
            </Grid>
            <Grid margin="50vh 0 2vh 8vh" zIndex="999">
            <LocoRow sectionTitle="Trending" fetchUrl={requests.fetchTrending}/>
            <LocoRow sectionTitle="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
            <PosterRow Poster sectionTitle="Action" fetchUrl={requests.fetchActionMovies}/>
            </Grid>
        </React.Fragment>
    );
};

Browse.defaultProps = {};

export default Browse;
