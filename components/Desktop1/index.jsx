import React from "react";
import Frame1 from "../Frame1";
import styled from "styled-components";
import { ValignTextMiddle } from "../../styledMixins";
import "./Desktop1.css";

function Desktop1(props) {
  const { title, frame1Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-1 screen">
        <Title>{title}</Title>
        <Frame1 title={frame1Props.title} fund2={frame1Props.fund2} fund3={frame1Props.fund3} />
        <FlexRow>
          <Frame2></Frame2>
          <Frame3></Frame3>
          <Frame3></Frame3>
          <Frame5></Frame5>
        </FlexRow>
      </div>
    </div>
  );
}

const Title = styled.h1`
  ${ValignTextMiddle}
  width: 433px;
  height: 103px;
  margin-left: 170.58px;
  font-family: var(--font-family-inter);
  font-weight: 600;
  color: var(--white);
  font-size: var(--font-size-l);
  letter-spacing: 0;
`;

const FlexRow = styled.div`
  align-self: center;
  margin-top: 184px;
  margin-right: 94.62px;
  display: flex;
  align-items: flex-start;
  min-width: 1178px;
`;

const Frame2 = styled.div`
  width: 201px;
  height: 220px;
  background-color: var(--white);
`;

const Frame3 = styled.div`
  width: 201px;
  height: 220px;
  margin-left: 124px;
  background-color: var(--white);
`;

const Frame5 = styled.div`
  width: 201px;
  height: 220px;
  margin-left: 125px;
  background-color: var(--white);
`;

export default Desktop1;
