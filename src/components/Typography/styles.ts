import styled from "styled-components/native";
import { TypographyStyle } from ".";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const Container = styled.Text<TypographyStyle>`
    text-align: ${({textAlign}) => textAlign || 'left'};

    font-family: ${({theme, fontFamily}) => {
        return theme.font_family[fontFamily ?? 'regular']
    }};

    line-height: ${({theme, lineHighlight}) => {
        return theme.line_height[lineHighlight ?? 'md']
    }}px;

    font-size: ${({theme, fontSize}) => {
        const {font_size} = theme
        switch (fontSize) {
            case 'body_xs':
                return font_size.body.xs
            case 'body_sm':
                return font_size.body.sm
            case 'body_md':
                return font_size.body.md
            case 'body_lg':
                return font_size.body.lg
            case 'title_xs':
                return font_size.title.xs
            case 'title_sm':
                return font_size.title.sm
            case 'title_md':
                return font_size.title.md
            case 'title_lg':
                return font_size.title.lg
            default:
                return font_size.body.md
        }

    }}px;

    color: ${({ theme, color }) => {
        const { colors } = theme

        if(color === 'gray_1') return colors.base.gray_1;
        if(color === 'gray_2') return colors.base.gray_2;
        if(color === 'gray_3') return colors.base.gray_3;
        if(color === 'gray_4') return colors.base.gray_4;
        if(color === 'gray_5') return colors.base.gray_5;
        if(color === 'gray_6') return colors.base.gray_6;
        if(color === 'gray_7') return colors.base.gray_7;
        if(color === 'green_dark') return colors.brand.green_dark;
        if(color === 'green_mid') return colors.brand.green_mid;
        if(color === 'green_light') return colors.brand.green_light;
        if(color ==='red_dark') return colors.brand.red_dark;
        if(color ==='red_mid') return colors.brand.red_mid;
        if(color ==='red_light') return colors.brand.red_light;
        if(color === 'white') return colors.base.white;
        else return colors.base.gray_1;
    }}
`
