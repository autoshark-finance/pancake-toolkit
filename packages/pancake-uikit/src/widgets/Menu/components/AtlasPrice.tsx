import React from "react";
import styled from "styled-components";
import { AtlasRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  atlasPriceUsd?: number;
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

const JawsPrice: React.FC<Props> = ({ atlasPriceUsd }) => {
  return atlasPriceUsd ? (
    <PriceLink
      href="https://geckoterminal.com/bsc/pools/0x8ec2dcc0b88ef879c885b0b31e87aba14543a8cd"
      target="_blank"
    >
      <AtlasRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${atlasPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(JawsPrice);
