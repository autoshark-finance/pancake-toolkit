import React from "react";
import styled from "styled-components";
import { JawsRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  jawsPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const JawsPrice: React.FC<Props> = ({ jawsPriceUsd }) => {
  return jawsPriceUsd ? (
    <PriceLink
      href="https://poocoin.app/tokens/0xdd97ab35e3c0820215bc85a395e13671d84ccba2"
      target="_blank"
    >
      <JawsRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${jawsPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(JawsPrice);
