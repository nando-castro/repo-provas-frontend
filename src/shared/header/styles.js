import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 250px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
`;

export const ContainerUser = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerTop = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Logo = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: left;

  padding-left: 60px;
`;
export const Exit = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: right;

  padding-right: 30px;

  cursor: pointer;

  .icon {
    font-size: 50px;
  }
`;

export const Icon = styled.img`
  margin-right: 10px;
`;

export const Text = styled.div`
  display: flex;

  font-family: "Lexend";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;

  color: #000000;

  p {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    color: #3f61d7;
  }
`;

export const ContainerSearch = styled.div`
  width: 100%;
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid #c4c4c4;

  input {
    width: 464px;
    height: 56px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    display: flex;
    align-items: center;
    letter-spacing: 0.15px;

    color: rgba(0, 0, 0, 0.6);

    ::placeholder {
      padding-left: 12px;
    }
  }
`;
