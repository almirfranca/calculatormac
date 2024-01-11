import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-image: linear-gradient(105deg, #a6ffff 0, #a2edff 25%, #9dd5f2 50%, #96bed5 75%, #8ea8b9 100%);
  }

  button {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover {
    filter: brightness(0.9);
  }
`;