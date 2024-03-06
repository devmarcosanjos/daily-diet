import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align: center;
    justify-content: center;
`

export const LoadingIndicator = styled.ActivityIndicator.attrs((props) => ({
    color: props.theme.colors.base.gray_1,
    size: props.theme.font_size.title.lg,
}))``