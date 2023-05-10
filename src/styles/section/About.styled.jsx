import styled, { keyframes } from "styled-components";

const waving = keyframes`
0%{
  transform: rotate(0deg);
}
10%{
  transform: rotate(14deg);
}
20%{
  transform: rotate(-8deg);
}
30%{
  transform: rotate(14deg);
}
40%{
  transform: rotate(-4.0deg);
}
50%{
    transform: rotate(10deg);
}
60%{
    transform: rotate(0deg);
}
100%{
    transform: rotate(0deg);
}
`;

export const AboutWrapper = styled.div`
  color: white;
  margin: auto;
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  font-family: "poppins", monospace;
  gap: 30px;
  padding: 0px 20px;
  box-sizing: border-box;
  .certificate-wrapper {
    box-sizing: border-box;
    margin: auto;
    flex: 1;
  }
  .certificate-wrapper > img {
    width: 100%;
  }
  .certificate-wrapper > h2 {
    margin-bottom: 10px;
    text-align: center;
    color: gray;
  }

  .about-left {
    width: 45%;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    width: 100%;
    .about-left {
      width: 100%;
    }
    .certificate-wrapper {
      margin-top: 30px;
    }
  }
`;

export const ImageWrapper = styled.div`
  text-align: center;
  color: gray;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 15px;
  }
  h1 {
    margin-top: -30px;
  }
`;

export const ParaWrapper = styled.div`
  p {
    color: white;
    font-family: "poppins", monospace;
    font-size: 13px;
    margin-top: 18px;
    word-wrap: break-word;
    letter-spacing: 0.6px;
  }

  h1 {
    display: inline-block;
    color: white;
    font-size: 35px;
    animation: ${waving} 2.5s infinite;
    transform-origin: 70% 70%;
  }
  span {
    font-size: 22px;
    letter-spacing: 0.7px;
    margin-left: 10px;
    color: yellow;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    margin-top: 30px;
  }
`;

export const AboutHeader = styled.h1`
  letter-spacing: 0.5px;
  text-align: center;
  font-family: "poppins", monospace;
  width: 200px;
  border-bottom: 3px solid;
  margin: auto;
  margin-bottom: 35px;
  padding: 0px 0px 10px 0px;

  color: ${({ theme }) => theme.colors.orange} @media
    (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
  }
`;

export const SoftSkill = styled.div`
  display: flex;
  margin-top: 10px;
  margin: auto;
  width: 80%;
  justify-content: space-evenly;

  li {
    text-align: center;
    margin-left: 10px;
    font-size: 16px;
    font-family: sans-serif;
    letter-spacing: 0.6px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
