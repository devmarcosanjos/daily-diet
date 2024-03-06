import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#000',
        fontSize: 32
    }
})

export const Container = styled(View)`
    flex: 1;
    background-color: ${(props) => props.theme.colors.base.gray_7 };
    align-items: center;
    justify-content: center;
`

export const Title = styled(Text)`
    color: ${(props) => props.theme.colors.base.gray_1};
    font-size: 50px;
`