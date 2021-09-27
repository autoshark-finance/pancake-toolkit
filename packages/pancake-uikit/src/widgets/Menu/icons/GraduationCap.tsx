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
      <Svg width="20" height="20" x="0" y="0" viewBox="0 0 579.621 579.621" {...props}>
        <g>
          <g>
            <polygon points="579.621,187.592 292.249,77.01 0,187.592 292.249,282.369 		" />
            <path
              d="M462.971,316.398v-81.424l-173.16,57.719l-171.328-57.719v80.809c91.136,1.821,172.244,55.284,172.244,55.284
				C385.2,311.527,462.971,316.398,462.971,316.398z"
            />
            <path
              d="M479.07,385.656v116.955h33.417V385.656c0-5.321-2.873-9.925-7.13-12.471c4.293-3.025,7.13-8,7.13-13.651
				c0-6.619-3.885-12.294-9.468-14.991l0.042-0.195v-123.43l-14.583,4.634v118.188l0.42,0.597c-5.797,2.631-9.84,8.421-9.84,15.198
				c0,5.651,2.831,10.626,7.124,13.651C481.944,375.731,479.07,380.347,479.07,385.656z"
            />
          </g>
        </g>
      </Svg>
    </SvgDiv>
  );
};

export default Icon;
