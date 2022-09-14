import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
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
