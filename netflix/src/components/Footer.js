import React from "react";
import styled from "styled-components";

import { ImFacebook2, ImInstagram, ImTwitter, ImYoutube } from "react-icons/im";

const Footer = (props) => {
  return (
    <FooterWrap>
      <InfoWrap>
        <SocialLinks>
          <a href="https://www.facebook.com/NetflixKR">
            <ImFacebook2 cursor="pointer" size="1.2em" color="grey" />
          </a>
          <a href="https://www.instagram.com/netflixkr/">
            <ImInstagram cursor="pointer" size="26" color="grey" />
          </a>
          <a href="https://www.twitter.com/NetflixKR">
            <ImTwitter cursor="pointer" size="26" color="grey" />
          </a>
          <a href="https://www.youtube.com/NetflixKR">
            <ImYoutube cursor="pointer" size="26" color="grey" />
          </a>
        </SocialLinks>
        <FooterInfoLinks>
          <li>
            <span color="grey">자막 및 음성</span>
          </li>
          <li>
            <span color="grey">음성지원</span>
          </li>
          <li>
            <span color="grey">고객센터</span>
          </li>
          <li>
            <span color="grey">기프트카드</span>
          </li>
          <li>
            <span color="grey">미디어 센터</span>
          </li>
          <li>
            <span color="grey">투자정보</span>
          </li>
          <li>
            <span color="grey">입사정보</span>
          </li>
          <li>
            <span color="grey">이용약관</span>
          </li>
          <li>
            <span color="grey">개인정보</span>
          </li>
          <li>
            <span color="grey">법적고지</span>
          </li>
          <li>
            <span color="grey">쿠키설정</span>
          </li>
          <li>
            <span color="grey">회사정보</span>
          </li>
          <li>
            <span color="grey">문의하기</span>
          </li>
        </FooterInfoLinks>
        <NetflixInfo>
          <li>
            넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
            제2018-서울종로-0426호 전화번호:00-308-321-0058
          </li>
          <li>대표: 레지널드 숀 톰프슨</li>
          <li>이메일 주소: korea@netflix.com</li>
          <li>
            주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층
            우편번호 03161
          </li>
          <li>클라우드 호스팅: Amazon Web Services Inc.</li>
          <li>공정거래위원회 웹사이트 링크</li>
          <li>25076e8f-b18b-4b56-8e7d-219de263f051</li>
        </NetflixInfo>
      </InfoWrap>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  color: grey;
  background-color: black;
`;

const InfoWrap = styled.div`
  max-width: 980px;
  background-color: black;
  margin: 0px auto;
`;

const SocialLinks = styled.div`
  display: flex;
  margin: 0px auto;
  & a {
    margin-right: 26px;
    font-size: 16px;
  }
`;

const FooterInfoLinks = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* flex-direction:row;
    flex-wrap: wrap;
    align-items:flex-start; */
  margin: 20px auto;
  padding: 0;
  list-style: none;
  & li {
    display: block;
    list-style-type: none;
    box-sizing: border-box;
    margin: 0 0 16px 0;
  }
  & span {
    font-size: 15px;
  }
`;

const NetflixInfo = styled.ul`
  display: block;
  margin: 20px auto 0 auto;
  font-size: 11px;
  color: grey;
  line-height: 1.4;
  list-style-type: none;
  padding: 0px;
  & li {
    margin-top: 5px;
  }
  & li:nth-child(7) {
    padding-bottom: 10px;
  }
`;
