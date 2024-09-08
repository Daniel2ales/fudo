import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
    font-size: 62.5%; 
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.FONT.FAMILY}; 
    font-size: ${({ theme }) => theme.SIZE.MEDIUM}; 
  }

  a {
    text-decoration: none;
    transition: color 0.3s; 
  }

  ul {
    list-style: none;
  }

  img {
    display: flex;
    width: 100%;
  }
`;