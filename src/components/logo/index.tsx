import React from "react";
import * as S from "./styles";
import { ILogo } from "../../utils/interfaces/Logo";
import Link from "next/link";

const Logo = ({ alt = "logo", theme, href = "/" }: ILogo) => {
  let srcImageTheme = "";

  if (theme === "Orkut") {
    srcImageTheme = "images/logo/orkut.svg";
  }
  if (theme === "Facebook") {
    srcImageTheme = "images/logo/facebook.svg";
  }

  return (
    <S.Wrapper>
      <Link href={href}>
        <S.Logo src={srcImageTheme} alt={alt} />
      </Link>
    </S.Wrapper>
  );
};

export default Logo;
