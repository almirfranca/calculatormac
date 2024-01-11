import styled from "styled-components";


export const Container = styled.button`
  display: flex;
  justify-content: start;
  align-items: center;
  
  padding-left: 33px;
  width: 160px;
  height: 62px;
  font-size: 24px;
  font-weight: 400;
  
  border-right: 1px solid gray;
  background-color: ${({ theme }) => theme.COLORS.BUTTONNUM};
`;