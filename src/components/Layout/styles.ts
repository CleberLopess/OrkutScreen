import styled from "styled-components";

type Props = {
  darkMode: boolean;
};

export const Wrapper = styled.div<Props>`
  background: #e5e5e5;
  height: 100vh;
  position: relative;

  .button-theme {
    position: fixed;
    right: 10px;
    top: 10px;
  }
  & {
    ${({ darkMode }) => darkMode && `background: #202020;`}
  }

  section {
    width: calc(100%);
    max-width: 1150px;
    height: 100%;
    margin: 0 auto;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    section {
      width: calc(100% - 60px);
    }
  }

  @media (min-width: 992px) and (max-width: 1280px) {
    section {
      width: calc(100% - 80px);
    }
  }

  @media (max-width: 767px) {
    section {
      width: calc(100% - 40px);
    }
  }
`;

export const ContentToggle = styled.div`
  display: flex;
  position: fixed;
  z-index: 8;
  background-color: white;
  width: 100%;
  height: 40px;
`;
