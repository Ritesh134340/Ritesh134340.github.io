import { keyframes } from "styled-components";
import styled from "styled-components";

export const FollowDiv = styled.div`
  width: 100%;
  margin: auto;
  box-sizing: border-box;
  padding: 20px 5px;
  background: linear-gradient(135deg, #2b3467, black);
  .social-wrapper {
    margin: auto;
    width: 280px;
    display: flex;
    font-size: 2.5rem;
    justify-content: space-evenly;
    align-items: center;
  }
  .copy {
    margin: auto;
    margin-top: 15px;
    text-align: center;
  }
  .copy > p:nth-child(1) {
    font-size: 16px;
    font-family: sans-serif;
    margin-bottom: 10px;
    letter-spacing: 0.6px;
  }
  .copy > p:nth-child(2) {
    font-size: 15px;
    letter-spacing: 0.6px;
    font-family: sans-serif;
    color: gray;
  }
`;
