import React from "react";
import styled from "styled-components";

import { history } from "../redux/configureStore";
import { Grid, Button } from "../elements";

import { popsignup, mobile, devicemockup, tvmockup } from "../shared/images";

const Login = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex>
          <Grid
            bgimg={popsignup}
            size="cover"
            back_center
            zIndex="-5"
            height="80vh"
          ></Grid>
          <TEXT absolute>
            <div>
              <h1>
                영화, TV 프로그램을
                <br />
                무제한으로.
              </h1>
            </div>
            <h5>
              다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
            </h5>
            <h6>
              시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
              주소를 입력하세요.
            </h6>
            <Button
              _onClick={() => {
                window.alert("오늘만 무료로 이용해보세요＼（〇_ｏ）／");
                if (true) {
                  history.push("/browse");
                }
              }}
              isPlay
              text="회원가입"
            />
            <Button
              _onClick={() => {
                history.push("/browse");
              }}
              isInfo
              text="구경하기"
            />
          </TEXT>
        </Grid>

        <Grid>
          <Side absolute>
            <div>
              <h1>TV로 즐기세요.</h1>
              <h2>
                스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이
                플레이어 등 다양한 디바이스에서 시청하세요.
              </h2>
            </div>
            <img src={`${tvmockup}`} />
          </Side>
        </Grid>

        <Grid>
          <Side absolute>
            <img src={`${mobile}`} />
            <div>
              <h1>즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요.</h1>
              <h2>간편하게 저장하고 빈틈없이 즐겨보세요.</h2>
            </div>
          </Side>
        </Grid>

        <Grid>
          <Side absolute>
            <div>
              <h1>다양한 디바이스에서 시청하세요.</h1>
              <h2>
                각종 영화와 TV 프로그램을 스마트폰, 태블릿, 노트북, TV에서
                무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다.
              </h2>
            </div>
            <img src={`${devicemockup}`} />
          </Side>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const TEXT = styled.div`
  ${(props) =>
    props.absolute
      ? `  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;`
      : ""}
  margin-top:25vh;
  padding: 25vh auto;
  color: white;
  background-color: transparent;
  text-align: center;
  font-size: 1.8rem;
  border-bottom: 8px solid #222;
`;

const Side = styled.div`
  position: relative;
  display: flex;
  flex-direction: auto;
  padding: 5rem;
  z-index: 999;
  color: white;
  background-color: transparent;
  align-items: center;
  div {
    text-align: left;
  }
  font-size: 1.5rem;
  font-weight: 500;
  img {
    max-width: 100%;
    height: auto;
    border: 0;
  }
  border-bottom: 8px solid #222;
`;

export default Login;
