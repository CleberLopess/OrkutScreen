import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  height: 100vh;
  padding: 0 70px;

  .logo {
    margin-bottom: 60px;
  }

  .input-area {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
  }
`;

export const Input = styled.input`
  background-color: #ffffff;
  border: 1px solid #e5e5e9;
  border-radius: 30px;
  width: 100%;
  color: #888888;
  padding: 21px 30px;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    border: 1px solid #ed2590;
  }

  &:focus {
    box-shadow: 0 0 0 0;
    border: 1px solid #ed2590;
    outline: 0;
  }
`;

export const Button = styled.button`
  width: 100%;
  background: #ed2590;
  border-radius: 30px;

  text-align: center;
  color: #ffffff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #c51e77;
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 21px;
  }
`;

export const Forgot = styled.div`
  color: #888888;
  margin-bottom: 68px;
`;

export const Register = styled.div`
  color: #888888;

  a {
    color: #ed2590;
  }
`;
