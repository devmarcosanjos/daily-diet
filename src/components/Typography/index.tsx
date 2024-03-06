import { TextComponent, TextProps } from "react-native";

import { Container } from "./styles";
import theme from "@theme";
import * as T from "./type";

export type TypographyStyle = {
    textAlign?: T.TextAlign
    fontFamily?: T.FontFamily
    lineHighlight?: T.LineHighlight
    fontSize?: T.FontSize
    color?: T.Color
}

type TypographyProps = TextProps & TypographyStyle

export function Typography({ ...props }: TypographyProps) {
	return ( 
        <Container {...props}>
            {props.children}
        </Container>
    )
}