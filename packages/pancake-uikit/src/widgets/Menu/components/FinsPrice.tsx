import React from "react";
import styled from "styled-components";
import { FinsRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  finsPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  margin-right: 20px;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const FinsPrice: React.FC<Props> = ({ finsPriceUsd }) => {
  return finsPriceUsd ? (
    <PriceLink
      href="https://dex.guru/token/0x1b219aca875f8c74c33cff9ff98f3a9b62fcbff5-bsc"
      target="_blank"
    >
      <FinsRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${finsPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(FinsPrice);
