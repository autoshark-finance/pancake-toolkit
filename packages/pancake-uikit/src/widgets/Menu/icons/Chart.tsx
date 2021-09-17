import React from "react";
import styled from "styled-components";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const SvgDiv = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <SvgDiv className="svgParent">
      <Svg width="20" height="20" viewBox="0 0 64 64" {...props}>
        <g id="Layer_27" data-name="Layer 27">
          <path d="M30,24V17H26v8.69a18.838,18.838,0,0,1,4-.639Z" />
          <path d="M39.476,58.715A16.993,16.993,0,0,0,47.949,45H32.618Z" />
          <path d="M32,25.026V43H49.974A19.029,19.029,0,0,0,32,25.026Z" />
          <path d="M20,22H16V32.381a19.138,19.138,0,0,1,4-3.844Z" />
          <path d="M30.105,44.447A1,1,0,0,1,30,44V27.051a16.989,16.989,0,1,0,7.693,32.571L30.105,44.447Z" />
          <path d="M3,3V43h9.051A18.827,18.827,0,0,1,14,35.566V21a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v6.273a18.869,18.869,0,0,1,2-.92V16a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v7.051q1.014.048,2,.189V12a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1V26.146a21,21,0,0,1,2,1.393V8a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1V43h9V3ZM17,15H5V13H17Zm0-4H5V9H17Zm0-4H5V5H17Z" />
          <path d="M46,29.331a21.07,21.07,0,0,1,4,5.783V9H46Z" />
          <path d="M36,13V23.627a20.766,20.766,0,0,1,4,1.428V13Z" />
        </g>
      </Svg>
    </SvgDiv>
  );
};

export default Icon;
