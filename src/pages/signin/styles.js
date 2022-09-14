import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`;

export const ContainerLogin = styled.div`
  width: 464px;
  height: 328px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`;

export const Top = styled.p`
  width: 65px;
  height: 24px;

  margin-bottom: 30px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;

  display: flex;
  align-items: center;
  letter-spacing: 0.15px;

  color: rgba(0, 0, 0, 0.8);
`;

export const ButtonGitHub = styled.div`
  width: 100%;
  height: 36px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  background: #424445;

  color: #ffffff;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  cursor: pointer;
`;

export const Division = styled.div`
  width: 464px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.div`
  width: 200px;

  margin: 0px 10px;

  border: 1px solid #c4c4c4;
`;

export const Form = styled.form`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  input {
    width: 464px;
    height: 56px;

    margin-bottom: 10px;

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

export const Button = styled.div`
  width: 88px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #1976d2;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  color: #ffffff;

  cursor: pointer;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  letter-spacing: 0.4px;
  text-transform: uppercase;

  color: #ffffff;
`;

export const Footer = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;

    display: flex;
    align-items: center;
    letter-spacing: 0.15px;
    text-decoration-line: underline;

    color: rgba(70, 115, 202, 0.8);
  }
`;
