import { Text, View } from "react-native";
import { Container, Title,  } from "./styles";
import { Header } from "@components/Header";
import { Typography } from "@components/Typography";

export function HomeScreen() {
    return(
        <Container>
            <Header />
            <Typography textAlign="right">Refeições</Typography>
            <Typography fontFamily="bold">Refeições</Typography>
            <Typography>Refeições</Typography>
        </Container>
    )
}