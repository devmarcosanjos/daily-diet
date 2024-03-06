import styled from "styled-components/native";
import { TypographyStyle } from ".";

export const Container = styled.Text<TypographyStyle>`
    text-align: ${({textAlign}) => textAlign || 'left'};
    font-family: ${({theme, fontFamily}) => fontFamily === 'bold' ? theme.font_family.bold : theme.font_family.regular};
    line-height: ${({theme}) => theme.line_height.md}px;
    font-size: ${({theme}) => theme.font_size.body.md}px;
    color: ${({theme}) => theme.colors.base.gray_1};
`
