import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children, margin, _onClick } = props;
  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin: margin,
  };

  return (
    <P {...styles} onClick={_onClick}>
      {children}
    </P>
  );
};

Text.defaultProps = {
  children: null,
  _onClick: () => {},
  bold: false,
  size: "1vw",
  margin: false,
  color: "#fff",
};

const P = styled.p`
  cursor: pointer;
  margin: ${(props) => (props.margin ? props.margin : "")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  color: ${(props) => (props.color ? props.color : "#fff")};
  font-size: ${(props) => (props.size ? props.size : "")};
  font-weight: ${(props) => (props.bold ? "400" : "")};
`;

export default Text;
