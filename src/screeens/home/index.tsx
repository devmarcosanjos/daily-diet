import { Container, Title,  } from "./styles";
import { Header } from "@components/Header";
import { Card } from "@components/Card";

export function HomeScreen() {
    return(
        <Container>
            <Header />
            <Card  
                title="90.86%"
                subtitle="das refeições da dieta"
                titleFontSize="title_lg"
                bg="green"
                iconPosition="left"
                showIconButton={true}
                onPress={() => console.log('teste')}
            />
        </Container>
    )
}