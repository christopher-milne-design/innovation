import React from "react";
import styled from "styled-components";
import { InterNormalBlack426px, ValignTextMiddle } from "../../styledMixins";


function Frame1(props) {
  const { title, fund2, fund3 } = props;

  return (
    <Frame11>
      <Fund1>{title}</Fund1>
      <Fund2>{fund2}</Fund2>
      <Fund3>{fund3}</Fund3>
    </Frame11>
  );
}

const Frame11 = styled.div`
  ${InterNormalBlack426px}
  width: 1919px;
  height: 341px;
  margin-top: 153px;
  display: flex;
  padding: 118.6px 278.5px;
  align-items: flex-start;
  background-color: var(--white);
`;

const Fund1 = styled.div`
  ${ValignTextMiddle}
  width: 132px;
  height: 52px;
  letter-spacing: 0;
`;

const Fund2 = styled.div`
  ${ValignTextMiddle}
  width: 139px;
  height: 52px;
  margin-left: 424px;
  letter-spacing: 0;
`;

const Fund3 = styled.div`
  ${ValignTextMiddle}
  width: 140px;
  height: 52px;
  margin-left: 417px;
  letter-spacing: 0;
`;

export default Frame1;
