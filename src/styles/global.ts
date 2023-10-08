import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body {
    background-color: black;
}
   *{
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    
    }
    button{
        cursor: pointer;
        border: none;
    }

    li{
        list-style: none;
    }

    :root {
        --color-primary: #0057FF;
        --color-grey-200: #292929;
        --color-grey-500: #0F0F0F;
        --font-secundary-color: #999999;
    }
`;
