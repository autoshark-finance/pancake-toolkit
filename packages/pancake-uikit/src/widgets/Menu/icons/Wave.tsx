import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import styled from "styled-components";

const SvgDiv = styled.div`
  width: 24px;
  height: 24px;
`;

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <SvgDiv>
      <Svg width="20" height="20" x="0" y="0" viewBox="0 0 469.781 469.781" {...props}>
        <path d="M495.487,381.376c-114.617,0.044-191.828-40.025-211.837-109.907c-14.51-50.677,5.895-121.064,58.993-123.655    c57.287,3.776,58.599,67.743,56.683,117.647c-0.707,18.569-1.131,29.775,2.686,37.991c4.361,9.352,14.072,13.86,24.839,11.538    c24.871-5.438,71.035-59.757,71.361-122.848c0.479-94.231-76.146-160.736-186.363-161.731c-0.881-0.006-1.741-0.011-2.631-0.011    C157.349,30.401,2.947,148.965,0,376.977v87.918c0,9.225,7.479,16.704,16.704,16.704h478.592c9.226,0,16.704-7.479,16.704-16.704    v-66.834C512,388.916,504.633,381.372,495.487,381.376z M160.407,448.193c-47.302-81.079-30.474-176.417,29.141-239.361    c-42.78,82.395-20.719,187.048,50.753,239.361H160.407z" />
      </Svg>
    </SvgDiv>
  );
};

export default Icon;
