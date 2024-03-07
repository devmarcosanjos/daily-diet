import { Container, Title,  } from "./styles";
import { Header } from "@components/Header";
import { Card } from "@components/Card";
import { View } from "react-native";
import { Typography } from "@components/Typography";
import { Button } from "@components/Button";
import { Plus } from "phosphor-react-native";
import { Meal } from "@components/Meal";

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

            <View
                style={{
                    marginTop: 40,
                }}
            >
                <Typography
                    fontSize="title_sm"
                    style={{ marginBottom: 8 }}
                >
                    Refeições
                </Typography>

                <Button
                    title="Nova refeição"
                    icon={<Plus size={24} color="white" />}
                    type="solid"
                    isActive={true}

                    onPress={() => console.log('teste')}
                />
            </View>

            <Meal 
                id="1"
                hour="08:00"
                description="Café da manhã"
                isOnTheDiet={false}
            />
        </Container>
    )
}