import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import * as S from "./styles";
import { ILayout } from "../../utils/interfaces/Layout";

const Layout = ({ children }: ILayout) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <S.Wrapper darkMode={isDarkMode}>
      <S.ContentToggle>
        <DarkModeToggle
          className="button-theme"
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={40}
        />
      </S.ContentToggle>

      {children}
    </S.Wrapper>
  );
};
export default Layout;
