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
