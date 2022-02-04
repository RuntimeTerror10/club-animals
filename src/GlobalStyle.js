import { createGlobalStyle } from "styled-components";
import DiloWorld from "./assets/fonts/DiloWorld.ttf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'DiloWorld';
        src: url(${DiloWorld}) format('opentype');
    }

    :root{
        --width:clamp(4rem, 7vw, 11.25rem);
        --height:clamp(4rem, 7vw, 11.25rem);
    }
`;
