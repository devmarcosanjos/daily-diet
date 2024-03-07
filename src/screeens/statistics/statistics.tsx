import { Layout } from "@components/Layout";
import { Container, Row } from "./styles";
import { Card } from "@components/Card";
import { Typography } from "@components/Typography";

export function StatisticsScreen() {
    return (
        <Container>
            <Layout
                bg="green"
                header={
                    <Card
                        title='90.86%'
                        subtitle="das refeições da dieta`"
                        bg="green"
                        iconPosition="left"
                        onPress={() => console.log('voltar statistics')}
                    />
                }
            >
    
                <Typography
                    fontFamily="bold"
                    fontSize="body_xs"
                    style={{ marginBottom: 20 }}
                >
                    Estatísticas Gerais</Typography>
                <Row>
                    <Card
                        title="22%"
                        subtitle="melhor sequência de pratos dentro da dieta"
                        bg="gray"
                        iconPosition="left"
                        showIconButton={false}
                    />
                </Row>
                <Row>
                    <Card
                        title="109"
                        subtitle="refeições cadastradas"
                        bg="gray"
                        iconPosition="left"
                        showIconButton={false}
                    />
                </Row>
                <Row>
                    <Card
                        title="99"
                        subtitle="refeições dentro da dieta"
                        bg="green"
                        iconPosition="left"
                        showIconButton={false}
                        style={{ width: '48%' }}
                    />
                    <Card
                        title="10"
                        subtitle="refeições fora da dieta"
                        bg="red"
                        iconPosition="left"
                        showIconButton={false}
                        style={{ width: '48%' }}

                    />
                </Row>

            </Layout>
        </Container>
    )
}