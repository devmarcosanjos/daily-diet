import styled from "styled-components/native";
import { MealStatus } from ".";

export const Container = styled.Pressable`
    width: 100%;
    height: 55px;

    padding: 14px 16px 14px 14px;
    margin-bottom: 8px;

    align-items: center;
    align-content: flex-start;
    justify-content: space-between;
    flex-direction: row;

    border-radius: 6px;
    border-width: 1px;
    border-color: ${({theme}) => theme.colors.base.gray_5};

`
export const Divider = styled.View`
    width: 1px;
    height: 14px;

    background-color: ${({theme}) => theme.colors.base.gray_4};
    margin: 0 12px;
`

export const Status = styled.View<MealStatus>`
    width: 12px;
    height: 14px;

    margin-left: 14px;
    border-radius: 14px;

    background-color: ${({theme, isOnTheDiet}) => {
        return isOnTheDiet ? theme.colors.brand.green_mid : theme.colors.brand.red_mid
    }};
`