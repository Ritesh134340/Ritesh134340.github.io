import styled from "styled-components";

export const Button = styled.div`
  position: fixed;
  right: 3%;
  bottom: 80px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.orange};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    left: 47%;
    bottom: 60px;
  }
`;
