import { Typography } from "@components/Typography";
import { Container, Divider, Status } from "./styles";

export type MealStatus = { isOnTheDiet: boolean }

type MealProps = MealStatus & {
    id: string,
    hour: string,
    description: string,
}

export function Meal({ id, hour, description, isOnTheDiet}: MealProps){
    return(
        <Container>
            <Typography fontSize="body_xs" fontFamily="bold" >
                {hour}
            </Typography>
            <Divider />
            <Typography style={{flex: 1}} numberOfLines={1} >
               {description}
            </Typography>
            <Status
                isOnTheDiet={isOnTheDiet}
            />
        </Container>
    )
}