import React from "react";
import styled from "styled-components";
import { CogIcon } from "../../../components/Svg";
import IconButton from "../../../components/Button/IconButton";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import JawsPrice from "./JawsPrice";
import FinsPrice from "./FinsPrice";
import AtlasPrice from "./AtlasPrice";
// import ThemeSwitcher from "./ThemeSwitcher";
import SocialLinks from "./SocialLinks";
import LangSelector from "./LangSelector";

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  // toggleTheme,
  // isDark,
  finsPriceUsd,
  jawsPriceUsd,
  atlasPriceUsd,
  currentLang,
  langs,
  setLang,
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      <SettingsEntry>
        {/* <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} /> */}
        <FinsPrice finsPriceUsd={finsPriceUsd} />
        <JawsPrice jawsPriceUsd={jawsPriceUsd} />
      </SettingsEntry>
      <SettingsEntry>
        <AtlasPrice atlasPriceUsd={atlasPriceUsd} />
      </SettingsEntry>
      <SocialEntry>
        <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} />
        <SocialLinks />
      </SocialEntry>
    </Container>
  );
};

export default PanelFooter;
