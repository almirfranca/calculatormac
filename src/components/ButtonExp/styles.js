import styled from "styled-components";

export const Container = styled.button`  
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 62px;
  font-size: 24px;
  font-weight: 400;
  
  border: none;
  background-color: ${({ theme }) => theme.COLORS.BG_ORANGE};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;