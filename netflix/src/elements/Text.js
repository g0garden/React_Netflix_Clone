import React from "react";
import styled from "styled-components";

const Text = (props) => {

      const {bold, color, size, children, margin} = props;
      const styles={bold:bold, color:color, size:size, margin:margin};

      return (
            <P {...styles}>{children}</P>
      );

}

Text.defaultProps = {
      children: null,
      bold: false,
      size: '1.4vw',
      margin: false,
      color: '#fff',
};

const P = styled.p`
      margin: ${(props) => (props.margin? props.margin : "")};
      margin: ${(props) => (props.margin? props.margin : "")};
      color: ${(props) => (props.color? props.color:"#fff")};
      font-size: ${(props) => (props.size? props.size : "1.4vw")};
      font-weight: ${(props) => (props.bold? "400": "")};
`;
export default Text;