import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    isRoot,
    children,
    padding,
    is_flex,
    __click,
    bg,
    width,
    flex,
    margin,
    align,
    zIndex,
  } = props;

  const styles = {
    padding: padding,
    is_flex: is_flex,
    bg: bg ? bg : false,
    width: width,
    flex: flex,
    margin: margin,
    align: align,
    zIndex:zIndex,
  };
  if (isRoot) {
    return <RootContainer>{children}</RootContainer>;
  }

  if (__click) {
    return (
      <GridBox
        onClick={() => {
          __click();
        }}
        {...styles}
      >
        {children}
      </GridBox>
    );
  }

  return <GridBox {...styles}>{children}</GridBox>;
};

Grid.defaultProps = {
  isRoot: false,
  children: null,
  is_flex: false,
  __click: null,
  bg: false,
  width: "100%",
  flex: false,
  margin: false,
  align: false,
  zIndex:false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  z-index: ${(props) => props.zIndex};
  ${(props) =>
    props.is_flex
      ? `display:flex; align-items: center; justify-content:flex-start; `
      : ""};
`;
const RootContainer = styled.div`
  position: relative;
  z-index: 0;
  background-color: black;
  min-height: 100vh;
  margin: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  flex-wrap: wrap;
  display: flex;
`;

export default Grid;
