import styled from "styled-components/native";
import { LayoutColor } from ".";

export const Container = styled.View<LayoutColor>`
    flex: 1;

    background-color: ${({ theme, bg }) => {
        switch(bg) {
            case 'green': return theme.colors.brand.green_light;
            case'red': return theme.colors.brand.red_light;
            default: return theme.colors.base.gray_5;
        }
    }};
`

export const Header = styled.View`
    align-items: center;
	justify-content: space-between;
	flex-direction: row;

	padding: 50px 24px 20px;
`

export const BackButton = styled.TouchableOpacity``

export const Content = styled.View`
    flex: 1;
    align-items: center;

    padding: 40px 24px;

    background-color: ${({ theme }) => theme.colors.base.gray_7};

    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
`