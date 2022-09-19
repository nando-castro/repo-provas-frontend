import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerOptions = styled.div`
  width: 700px;
  height: 100%;
  margin-top: 500px;
`;

export const ContainerButtons = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.div`
  width: 180px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #1976d2;

  border: 1px solid rgba(25, 118, 210, 0.5);
  border-radius: 4px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  letter-spacing: 0.4px;
  text-transform: uppercase;

  color: #ffffff;

  cursor: pointer;

  .select {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
    border-radius: 4px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    letter-spacing: 0.4px;
    text-transform: uppercase;

    color: #1976d2;
  }
`;
