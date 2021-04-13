import React from "react";

import { Grid } from "../elements";
import { Trailer, LocoRow } from "../components";

/* as 사용해서 이름붙이기 */
import {
  request as requests,
  requestTMDB as requestTMDBs,
} from "../shared/request";

const Browse = (props) => {
  return (
    <React.Fragment>
      <Grid padding="5%">
        <Trailer />
        {/* requestTMDB array를 map으로! */}
        {requestTMDBs.slice(1).map((requestTMDB) => {
          return (
            <LocoRow
              sectionTitle={requestTMDB.title}
              fetchUrlTMDB={requestTMDB.url}
            />
          );
        })}
        {/* request array를 map으로! */}
        <LocoRow
          Poster
          sectionTitle={requestTMDBs[0].title}
          fetchUrlTMDB={requestTMDBs[0].url}
        />
        {requests.slice(1).map((request) => {
          return (
            <LocoRow sectionTitle={request.title} fetchUrl={request.url} />
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default Browse;
