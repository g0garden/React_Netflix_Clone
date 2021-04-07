import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Grid, Button, Text } from "../elements";
import { Trailer, LocoRow } from "../components";

import requests from "../shared/request";

const Browse = (props) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Grid margin="25vh 0 2vh 8vh">
        <Trailer />
      </Grid>
      <Grid margin="50vh 0 2vh 8vh" zIndex="999">
        {/* <LocoRow
          sectionTitle="지금 뜨는 콘텐츠"
          fetchUrl={requests.fetchTrending}
        />
        <LocoRow
          Poster
          sectionTitle="넷플릭스 오리지널"
          fetchUrl={requests.fetchNetflixOriginals}
        /> */}
        <LocoRow
          sectionTitle="지금 뜨는 콘텐츠"
          fetchUrlTMDB={requests.fetchTrendingTMDB}
        />
        <LocoRow
          Poster
          sectionTitle="넷플릭스 오리지널"
          fetchUrlTMDB={requests.fetchNetflixOriginals}
        />
        <LocoRow sectionTitle="액션" fetchUrl={requests.fetchActionMovies} />
        <LocoRow sectionTitle="판타지" fetchUrl={requests.fetchFantasyMovies} />
        <LocoRow sectionTitle="코미디" fetchUrl={requests.fetchComedyMovies} />
        <LocoRow sectionTitle="TV MOVIE" fetchUrl={requests.fetchTVMovies} />
        <LocoRow
          sectionTitle="스릴러"
          fetchUrl={requests.fetchThrillerMovies}
        />
        <LocoRow sectionTitle="공상과학" fetchUrl={requests.fetchScifiMovies} />
        <LocoRow
          sectionTitle="미스터리"
          fetchUrl={requests.fetchMysteryMovies}
        />
        <LocoRow
          sectionTitle="애니메이션"
          fetchUrl={requests.fetchAnimatedMovies}
        />
        <LocoRow sectionTitle="호러" fetchUrl={requests.fetchHorrorMovies} />
      </Grid>
    </React.Fragment>
  );
};

Browse.defaultProps = {};

export default Browse;
