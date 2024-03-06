import { Text, View } from "react-native";
import { Container, Title,  } from "./styles";
import { Header } from "@components/Header";
import { Typography } from "@components/Typography";

export function HomeScreen() {
    return(
        <Container>
            <Header />
            <Typography 
                textAlign="right"
                color="green_dark"
                fontSize="title_lg"
                lineHighlight="lg"
            >
                    Refeições
            </Typography>
            <Typography 
                fontFamily="bold"
                color="red_dark"
                fontSize="title_sm"
                lineHighlight="lg"
            >
                Refeições
            </Typography>
            <Typography
                color="gray_2"
                fontSize="title_xs"
                lineHighlight="md"
                fontFamily="bold"
                textAlign="center"
            >
                Refeições
            </Typography>
        </Container>
    )
}