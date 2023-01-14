import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    //when max-width > 1300px
    margin: 0;
    display: flex;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

a {
    text-decoration: none;
    color: black;
}

* {
    box-sizing: border-box;
}
`;
