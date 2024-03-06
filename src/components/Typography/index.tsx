import { TextComponent, TextProps } from "react-native";

import { Container } from "./styles";

export type TypographyStyle = {
    textAlign?: 'auto' | 'center' |'justify' | 'left' | 'right'
    fontFamily?: 'bold' | 'regular'
}

type TypographyProps = TextProps & TypographyStyle

export function Typography({ ...props }: TypographyProps) {
	return ( 
        <Container {...props}>
            {props.children}
        </Container>
    )
}