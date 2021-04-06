import React from "react";
import styled from "styled-components";
import { Grid, Button } from "../elements";

import { useDispatch } from "react-redux";

// import netflix from "../shared/netflix.png";

// import { history } from "../redux/configureStor1e";

// import { apiKey } from "../../shared/firebase";

const Trailer = (props) => {
  return (
    <React.Fragment>
      <TrailerWrap>
        <Grid is_flex>
          <VignetteTrailer coverDeg>
            <VignetteTrailer Vtop>
              <VignetteTrailer VBottom>
                <TrailerPlay
                  poster="https://i.pinimg.com/originals/42/a2/4a/42a24aad00c0a8e2eee97a37f971a24f.jpg"
                  autoPlay
                  muted
                  loop
                >
                  <source
                    src="https://r5---sn-oguelner.googlevideo.com/videoplayback?expire=1617466355&ei=kz9oYJacNab-yQXX5p2ACg&ip=2a0b%3A1580%3Ad96f%3Aeb01%3Aff90%3A4267%3A1da2%3A141b&id=o-AC8p64gphk5k563emo4_tdtqaJY5B0dOAF8uPbBpsJFd&itag=22&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=ipYqsiku6K4Knp4zmkV6Jj8F&cnr=14&ratebypass=yes&dur=122.392&lmt=1521158083666667&fvip=10&fexp=24001373,24007246&c=WEB&n=-j6gUu-FI5remhD64&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAPnUamnNZe5I4ndUXWwWbT4JvlKUrvXfpUgjNjbgIKtIAiEAzPjyYJQqGPELAwTcg6msHFUwBsmfRGshuFriHSRX70Q%3D&redirect_counter=1&cm2rm=sn-qap8x3g-pjol76&req_id=69e97d000bc1a3ee&cms_redirect=yes&mh=m-&mip=203.130.101.107&mm=29&mn=sn-oguelner&ms=rdu&mt=1617444520&mv=m&mvi=5&pl=22&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAKCHaX6ws9imW2cgakAURJ2c0hls0nExXWiCVcbTYxe_AiAeL-ahIeKlXziz6UYTSHnISfGIh25Dm5GJ_7C3fwZpMA%3D%3D"
                    type="video/mp4"
                  />
                </TrailerPlay>
              </VignetteTrailer>
            </VignetteTrailer>
          </VignetteTrailer>
        </Grid>
      </TrailerWrap>
    </React.Fragment>
  );
};

Trailer.defaultProps = {};

const TrailerWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

const VignetteTrailer = styled.div`
  width: 100%;
  max-height: 100vh;
  display: flex;
  background: ${(props) =>
    props.VBottom
      ? `linear-gradient(to bottom , rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 8%)`
      : props.Vtop
      ? `linear-gradient(to top , rgba(0, 0, 0, 0.9) 0, rgba(0, 0, 0, 0) 20%)`
      : props.coverDeg
      ? `linear-gradient(77deg , rgba(0, 0, 0, 0.6) 0, rgba(0, 0, 0, 0) 85%)`
      : ""};
`;

const TrailerPlay = styled.video`
  border: 0;
  width: 100%;
  object-fit: cover;
  z-index: -1;
`;
// https://occ-0-1384-988.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZin8MRg5Fg6_kQQawavM6aYPqF4yo7EhNNAeMDXC3vXdLT7oAm7sA0LXjbn0Esh-zh0ooapo8YuzUk4Hi0WpwBtmS0V.webp?r=94c
export default Trailer;
