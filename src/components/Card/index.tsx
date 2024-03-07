import { Typography } from "@components/Typography";
import { ButtonToStaticLeft, ButtonToStaticRight, Conteiner, IconArrowLeft, IconArrowUpRight } from "./styles";
import { ViewProps } from "react-native";
import { FontSizeTitle } from "@components/Typography/type";

export type TextSize = {
    titleFontSize?: FontSizeTitle
}

export type CardColor = {
    bg?: 'gray' | 'green' | 'red' 

}

export type ButtonFloatProps = { iconPosition?: 'left' | 'right' }

type CardType = ViewProps & 
                CardColor & 
                TextSize & 
                ButtonFloatProps &
             {
    title: string;
    subtitle: string;
    showIconButton?: boolean;
    onPress?: () => void,

}

export function Card({
        bg = 'gray', 
        titleFontSize = 'title_lg',
        iconPosition = 'right',
        showIconButton = true,
        ...props
    }: CardType) {
    return (
        <Conteiner bg={bg} {...props} >
            
            {showIconButton && (iconPosition === 'left' ? (
                    <ButtonToStaticLeft
                    onPress={props.onPress}
                    >
                        <IconArrowLeft bg={bg} />
                    </ButtonToStaticLeft>
                ) :(
                    <ButtonToStaticRight
                    onPress={props.onPress}
                    >
                        <IconArrowUpRight bg={bg} />
                    </ButtonToStaticRight>
                )
            )}

            <Typography
                fontSize={titleFontSize}
                lineHighlight="lg"
                fontFamily="bold"
            >
                {props.title}
            </Typography>
            <Typography
                color="gray_2"
                fontSize="body_sm"
                textAlign="center"
            >
                {props.subtitle}
            </Typography>
        </Conteiner>
    )
        
}