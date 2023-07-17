import { createGlobalStyle } from 'styled-components';
import { salutejs_sber__dark } from '@salutejs/plasma-tokens/themes';
import {
    text,
    background,
    gradient,
} from '@salutejs/plasma-tokens';
import React from "react";

const DocumentStyle = createGlobalStyle`
    html {
        color: ${text};
        background-color: ${background};
        background-image: ${gradient};
    }
`;
const ThemeStyle = createGlobalStyle(salutejs_sber__dark);

export const GlobalStyle = () => (
    <>
        <DocumentStyle />
        <ThemeStyle />
    </>
);