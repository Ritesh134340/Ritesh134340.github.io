import styled from "styled-components";

export const StatsWrapper = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 30px;
  width: 80%;

  img {
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    width: 100%;
    img {
      margin-top: 35px;
      margin-bottom: 20px;
      width: 95%;
    }
  }
`;

export const HeadingWrapper = styled.div`
  text-align: center;
  margin: auto;
  padding-bottom: 10px;
  margin-bottom: 30px;
  font-family: "popping", monospace;
  border-bottom: 3px solid wheat;
  width: 200px;
`;

export const CalanderWrappeer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  margin-bottom: 50px;
`;
