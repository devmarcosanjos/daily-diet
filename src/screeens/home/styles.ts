import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
    flex: 1;
    background-color: ${(props) => props.theme.colors.base.gray_7 };
    padding: 0 24px;
`

export const Title = styled(Text)`
    color: ${(props) => props.theme.colors.base.gray_1};
    font-size: 50px;
`