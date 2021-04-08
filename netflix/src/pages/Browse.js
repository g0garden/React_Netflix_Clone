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
        <LocoRow
          sectionTitle="지금 뜨는 콘텐츠"
          fetchUrlTMDB={requests.fetchTrendingTMDB}
        />
        <LocoRow
          Poster
          sectionTitle="넷플릭스 오리지널"
          fetchUrlTMDB={requests.fetchNetflixOriginals}
        />
        <LocoRow
          sectionTitle="높은 평점의 인기 영화"
          fetchUrlTMDB={requests.fetchTopRatedTMDB}
        />
        <LocoRow sectionTitle="액션" fetchUrl={requests.fetchActionMovies} />
        <LocoRow sectionTitle="판타지" fetchUrl={requests.fetchFantasyMovies} />
        <LocoRow sectionTitle="코미디" fetchUrl={requests.fetchComedyMovies} />
        <LocoRow
          sectionTitle="스릴러"
          fetchUrl={requests.fetchThrillerMovies}
        />
        <LocoRow sectionTitle="공상과학" fetchUrl={requests.fetchScifiMovies} />
        <LocoRow
          sectionTitle="미스터리"
          fetchUrlTMDB={requests.fetchMysteryMovies}
        />
        <LocoRow
          sectionTitle="애니메이션"
          fetchUrl={requests.fetchAnimatedMovies}
        />
        <LocoRow sectionTitle="호러" fetchUrl={requests.fetchHorrorMovies} />

        <LocoRow
          sectionTitle="다큐멘터리"
          fetchUrl={requests.fetchDocumentaryMovies}
        />
        <LocoRow sectionTitle="드라마" fetchUrl={requests.fetchDramaMovies} />
        <LocoRow sectionTitle="가족" fetchUrl={requests.fetchFamilyMovies} />
        <LocoRow sectionTitle="역사" fetchUrl={requests.fetchHistoryMovies} />
        <LocoRow sectionTitle="전쟁" fetchUrl={requests.fetchWarMovies} />
        <LocoRow sectionTitle="범죄" fetchUrl={requests.fetchCrimeMovies} />
        <LocoRow sectionTitle="음악" fetchUrlTMDB={requests.fetchMusicMovies} />
        <LocoRow sectionTitle="로맨스" fetchUrl={requests.fetchRomanceMovies} />
        <LocoRow
          sectionTitle="서부 영화"
          fetchUrl={requests.fetchWesternMovies}
        />
        <LocoRow
          sectionTitle="모험 · 어드벤처"
          fetchUrl={requests.fetchAdventureMovies}
        />
      </Grid>
    </React.Fragment>
  );
};

Browse.defaultProps = {};

export default Browse;
