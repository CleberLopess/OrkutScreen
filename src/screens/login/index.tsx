import React from "react";
import Logo from "../../components/logo";
import { ILogin } from "../../utils/interfaces/Login";
import * as S from "./styles";
import Link from "next/link";

const Login = ({ logo }: ILogin) => {
  return (
    <S.Wrapper>
      <div className="logo">
        <Logo theme={logo as any} alt={"logo of project"} />
      </div>
      <div className="input-area">
        <S.Input name="email" placeholder="Digite seu email" type="text" />
        <S.Input name="senha" placeholder="Senha" type="password" />
        <S.Button>
          <Link href="/home">Login</Link>
        </S.Button>
      </div>
      <S.Forgot>
        <Link href="/registtro">Esqueceu sua senha?</Link>
      </S.Forgot>
      <S.Register>
        Não tem uma conta? <Link href="/cadastro">Cadastre-se</Link>
      </S.Register>
    </S.Wrapper>
  );
};

export default Login;
