import React from "react";
import * as S from "./styles";
import Logo from "../../components/logo";
import { GetWidth } from "../../utils/getWindow";

const HeaderBar = () => {
  return (
    <S.Background>
      <S.Wrapper>
        <Logo theme="Orkut" />
        <S.ContentSearch>
          <S.ButtonHome>
            <img src="images/header/home.svg" alt="logo home" />
          </S.ButtonHome>
          <S.InputSearch>
            <img src="images/header/icon-search.svg" alt="logo search" />
            <input type="text" placeholder="Pesquisar no Orkut" />
          </S.InputSearch>
        </S.ContentSearch>

        <S.ContentProfile>
          <S.ContentInfoProfile>
            <div>
              <img src="images/profile/profileImage.png" alt="profile photo" />
            </div>
            <div>
              <S.NameProfile>Jane Doew</S.NameProfile>
              <S.ArrobaProfile>@therealjanedoew</S.ArrobaProfile>
            </div>
          </S.ContentInfoProfile>
          <S.ButtonDorpdown>v</S.ButtonDorpdown>
        </S.ContentProfile>
      </S.Wrapper>
    </S.Background>
  );
};

export default HeaderBar;
