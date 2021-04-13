/* vignette element를 만들긴 했는데 요소마다 적용 여부가 달라서 일단 모든 component에서 지워 놓음 */
/* vignette를 만든 이유는 box shadow의 property가 제한적이기도하고
하나의 css안에 여러번 쓰면 중첩되는게 아니라 한가지만 먹힘
(위에 있는건지, 마지막만 먹히는건지는 검색 필요함) */

import React from "react";
import styled from "styled-components";

const Vignette = (props) => {
  const { bottom, bottomColor, top, left, right, deg, children } = props;
  const styles = {
    bottom: bottom,
    bottomColor: bottomColor,
    top: top,
    left: left,
    right: right,
    deg: deg,
  };

  return <V {...styles}>{children}</V>;
};

Vignette.defaultProps = {
  children: null,
  bottom: false,
  top: false,
  left: false,
  right: false,
  deg: false,
  bottomColor: "rgba(0, 0, 0, 0)",
};

const V = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  max-height: 100vh;
  background: ${(props) =>
    props.top
      ? `linear-gradient(to bottom , rgba(0, 0, 0, ${props.top}) 0, rgba(0, 0, 0, 0) 20%)`
      : props.bottom
      ? `linear-gradient(to top , rgba(0, 0, 0, ${props.bottom}) 0, ${props.bottomColor} 20%)`
      : props.right
      ? `linear-gradient(to left , rgba(0, 0, 0, ${props.right}) 0, rgba(0, 0, 0, 0) 20%)`
      : props.left
      ? `linear-gradient(to right , rgba(0, 0, 0, 10) 0, rgba(0, 0, 0, 0) 20%)`
      : props.deg
      ? `linear-gradient(77deg , rgba(0, 0, 0, ${props.deg}), rgba(0, 0, 0, 0) 85%)`
      : ""};
`;
export default Vignette;
