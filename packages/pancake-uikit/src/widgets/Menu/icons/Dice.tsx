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
    <SvgDiv>
      <Svg x="0" y="0" viewBox="0 0 192 192" {...props} width="20" height="20">
        <path d="m97.373 65.775a31.8 31.8 0 0 1 14.627-8.366v-41.409a16 16 0 0 0 -16-16h-72a16 16 0 0 0 -16 16v72a16 16 0 0 0 16 16h35.148zm-17.373-41.775a8 8 0 1 1 -8 8 8 8 0 0 1 8-8zm0 32a8 8 0 1 1 -8 8 8 8 0 0 1 8-8zm-40-32a8 8 0 1 1 -8 8 8 8 0 0 1 8-8zm0 56a8 8 0 1 1 8-8 8 8 0 0 1 -8 8z"/>
        <path d="m176.568 111.03-40.936-40.937a15.974 15.974 0 0 0 -4.685-3.257c-10.131-4.593-20.844-2.479-27.917 4.6l-40.937 40.932a15.974 15.974 0 0 0 -3.257 4.685c-4.593 10.131-2.479 20.844 4.6 27.917l40.936 40.937a15.974 15.974 0 0 0 4.685 3.257c10.131 4.593 20.844 2.479 27.917-4.6l40.937-40.936a15.974 15.974 0 0 0 3.257-4.685c4.589-10.127 2.475-20.843-4.6-27.913zm-56.568 24.97a8 8 0 1 1 8-8 8 8 0 0 1 -8 8z"/>
      </Svg>
    </SvgDiv>
  );
};

export default Icon;
