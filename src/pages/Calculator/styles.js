import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const App = styled.div`
  width: 320px;
  height: 420px;
  overflow: hidden;
  border-radius: 10px;

  box-shadow:  0px 12px 18px -2px rgba(0, 0, 0, 0.6);
`;

export const Header = styled.div`
  width: 100%;
  height: 110px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BG_INPUT};
  position: relative;

  > .open-modal {
    border: none;
    background: none;
    font-size: 18px;
    color: black;
    opacity: 0.5;

    position: absolute;
    right: 10px;
    top: 10px;

    &:hover {
      color: white;
      opacity: 0.8;
    }
  }
  

  > #buttons {
    display: flex;
    justify-content: space-between;
    width: 80px;
    height: 30px;
    padding: 8px;
    
    :nth-child(1){
      background-color: ${({ theme }) => theme.COLORS.BG_RED};
    }

    :nth-child(2){
      background-color: ${({ theme }) => theme.COLORS.BG_YELLOW};
    }

    :nth-child(3){
      background-color: ${({ theme }) => theme.COLORS.BG_GREEN};
    }

    > button {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: none;
    }
  }

  > #input {
      height: 60px;
      display: flex;
      align-items: end;

      /* > input {
        background: transparent;
        border: none;
        width: 100%;
        padding: 8px;
        outline: 0px;

        text-align: right;
        font-weight: 400;
        font-size: 36px;
        letter-spacing: 1px;
        color: ${({ theme }) => theme.COLORS.WHITE};

        &::placeholder {
          color: ${({ theme }) => theme.COLORS.WHITE};
        }
      } */
    }
`;

export const Keyboard = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  
  display: flex;
  
`;

export const AlphaNumerics = styled.div`
  max-width: 240px;
  max-height: 310px;

  display: flex;
  flex-wrap: wrap;

  * {
    border: 1px solid gray;
    border-top: none;
    border-left: none;
  }

  :nth-child(13) {
    border-bottom: none;
  }
  :nth-child(14) {
    border-bottom: none;
  }
`;

export const MathematicalOperators = styled.div`
  max-width: 80px;
  max-height: 310px;

  * {
    border: 1px solid gray;
    border-top: none;
    border-right: none;
    border-left: none;
  }

  :last-child{
    border-bottom: none;
  }
`;

export const Input = styled.div`
  background: transparent;
  border: none;
  width: 100%;
  padding: 8px;
  outline: 0px;

  text-align: right;
  font-weight: 400;
  font-size: 40px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Modal = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  
  display: grid;
  place-content: center;

  opacity: 0;
  visibility: hidden;
  
  &.open {
    opacity: 1;
    visibility: visible;
  }

  > .record-equations {
    background-color: ${({ theme }) => theme.COLORS.BLACK};

    min-height: 200px;
    max-height: 300px;
    width: 300px;

    border-radius: 10px;
    padding: 6px;

    display: flex;
    flex-direction: column;
    overflow-y: auto;
    position: relative;

    > .close {
      color: red;
      border: none;
      background: none;
      font-size: 12px;

      position: absolute;
      right: 10px;
      transition: none;
    }

    > .equations-results {
      color: grey;
    }
  }
  
`;