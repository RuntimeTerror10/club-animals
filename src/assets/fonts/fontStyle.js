import { createGlobalStyle } from "styled-components";
import DiloWorld from "./DiloWorld.ttf";

export const FontStyle = createGlobalStyle`
    @font-face {
        font-family: 'DiloWorld';
        src: url(${DiloWorld}) format('opentype');
    }
`;
