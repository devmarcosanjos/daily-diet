import { Container, Title, } from "./styles";
import { Header } from "@components/Header";
import { Card } from "@components/Card";
import { SectionList, View } from "react-native";
import { Typography } from "@components/Typography";
import { Button } from "@components/Button";
import { Plus } from "phosphor-react-native";
import { Meal } from "@components/Meal";

export function HomeScreen() {
    const meals = [{
        title: '07.03.2024',
        data: [{
            id: '01',
            hour: '07:00',
            description: 'Café da manhã',
            isOnTheDiet: true
        },
        {
            id: '02',
            hour: '09:00',
            description: 'Lanche da manhã',
            isOnTheDiet: true
        },
        {
            id: '03',
            hour: '10:40',
            description: 'Lanche da manhã',
            isOnTheDiet: false
        },
        {
            id: '04',
            hour: '12:00',
            description: 'Almoço',
            isOnTheDiet: true
        }
    ]
    },
    {
        title: '06.03.2024',
        data: [{
            id: '01',
            hour: '06:45',
            description: 'Café da manhã',
            isOnTheDiet: true
        },
        {
            id: '02',
            hour: '10:00',
            description: 'Lanche da manhã',
            isOnTheDiet: true
        },
        {
            id: '03',
            hour: '12:00',
            description: 'Almoço',
            isOnTheDiet: true
        },
        {
            id: '04',
            hour: '14:00',
            description: 'Lanche da tarde',
            isOnTheDiet: true
        },
        {
            id: '05',
            hour: '16:00',
            description: 'Lanche da tarde',
            isOnTheDiet: false
        },
        {
            id: '06',
            hour: '18:00',
            description: 'Jantar',
            isOnTheDiet: true
        },
        {
            id: '07',
            hour: '20:00',
            description: 'Jantar',
            isOnTheDiet: false
        }
    ]
    },
    ]

    return (
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

            <SectionList
                sections={meals}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <Meal
                            key={item.id}
                            {...item}
                            onPress={() => console.log(+ item.id + ' ' + item.hour + ' ' + item.description + ' ' + item.isOnTheDiet )}
                        />
                    )
                }}
                renderSectionHeader={({ section: { title } }) => (
                    <Typography fontSize="title_sm" fontFamily="bold" color="gray_1" style={{marginBottom:8, marginTop:8}}>
                        {title}
                    </Typography>
                )}
                style={{ marginBottom: 32}}
                contentContainerStyle={
                    meals.length === 0 && {
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }
                }
                ListEmptyComponent={() => (
                    <>
                        <Typography>
                            Nenhuma refeição cadastrada
                        </Typography>
                        <Typography>
                            Vamos cadastrar novas refeições?
                        </Typography>

                    </>
                )}
                showsHorizontalScrollIndicator={false}	
            />

        </Container>
    )
}