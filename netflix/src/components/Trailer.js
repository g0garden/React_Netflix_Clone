import React from "react";
import styled from "styled-components";
import { Text, Grid, Button } from "../elements";

import { MdPlayArrow as PlayB } from "react-icons/md";
import { MdInfoOutline as InfoB } from "react-icons/md";

import { useDispatch } from "react-redux";

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

          <TrailerBox left={4} bottom={10}>
            <Grid>
              <MovieTitle>타이타닉</MovieTitle>
              <TrailerSynopsis>
                17세기 엄격한 사회 질서에 숨막혀 하는 미국 상류층 로즈는
                사교계의 굴레에서 벗어나지 못하는 어머니와 권위적인 재벌 귀족
                약혼자와 함께 미국으로 향하는 타이타닉호 1등실에 승선한다.
                부두의 선술집에서 도박으로 운 좋게 타이타닉호의 3등실 티켓을
                얻은 가난한 화가 잭 역시 아슬아슬하게 배에 승선한다. 첫 눈에
                로즈에게 반한 잭은 갑판에서 바다로 몸을 던지려 하는 로즈를
                발견하고 재치 있는 언변과 행동으로 그녀의 생명을 구한다. 이
                사건을 계기로 1등실의 저녁식사에 초대받게 되고 서로에게 끌리는
                자신들을 발견한다.
              </TrailerSynopsis>
              <Grid>
                <Button
                  _onClick={() => {
                    window.alert("잘 작동!");
                  }}
                  isPlay
                >
                  <PlayB size="1.2em" /> <span> 재생</span>
                </Button>
                <Button
                  _onClick={() => {
                    window.alert("잘 작동!");
                  }}
                  isInfo
                >
                  <InfoB size="1.2em" />
                  <span> 상세 정보</span>
                </Button>
              </Grid>
            </Grid>
          </TrailerBox>
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

const TrailerBox = styled.div`
  display: flex;
  color: #fff;
  position: absolute;
  padding: 0 0 0 8vh;
  -webkit-transform-origin: bottom left;
`;

const MovieTitle = styled.div`
  /* background-size: cover; */
  font-size: 5vw;
  font-weight: 800;
  letter-spacing: -4px;
  width: 100%;
`;

const TrailerSynopsis = styled.p`
  display: -webkit-box;
  overflow: hidden;
  width: 35vw;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  font-size: 1.5vw;
  letter-spacing: -1px;
  line-height: 150%;
  text-align: left;
  text-shadow: 2px 2px 7px #000000;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  user-select: none;
`;

export default Trailer;
