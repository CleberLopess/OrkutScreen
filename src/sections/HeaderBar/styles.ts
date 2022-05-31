import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  position: absolute;
  top: 45px;
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ContentSearch = styled.div`
  display: none;

  @media (min-width: 768px) {
    height: 60px;
    display: flex;
    gap: 16px;
    width: clamp(200px, auto, 500px);
  }
`;

export const ButtonHome = styled.button`
  padding: 20px;
  border-radius: 50%;
  border: 1px solid #e5e5e9;
  cursor: pointer;
  background-color: #ffffff;

  &:hover {
    background-color: #e5e5e9;
    border: 1px solid #ffffff;
  }
`;

export const InputSearch = styled.div`
  border: 1px solid #e5e5e9;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 20px;
  display: flex;
  gap: 19px;

  input {
    width: 100%;
    border: none;
    color: #888888;
    cursor: pointer;

    &:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }
  }
`;

export const ContentProfile = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  align-items: center;

  img {
    margin-right: 8px;
    height: fit-content;
  }
`;

export const ContentInfoProfile = styled.div`
  display: flex;
`;

export const NameProfile = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
`;

export const ArrobaProfile = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #888888;
`;

export const ButtonDorpdown = styled.div`
  color: #888888;
  transform: scale(2, 1);
  font-size: 12px;
  cursor: pointer;
`;
