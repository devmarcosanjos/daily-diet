import { Text, View } from "react-native";
import { Container, Title, style } from "./styles";

export function HomeScreen() {
    return(
        <Container style={style.container}>
            <Title style={style.title} >Home Screen</Title>
        </Container>
    )
}