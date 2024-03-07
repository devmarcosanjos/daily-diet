import { Typography } from "@components/Typography";
import { Container, Divider, Status } from "./styles";
import { PressableProps } from "react-native";


export type MealStatus = { isOnTheDiet: boolean }

type MealProps = MealStatus & PressableProps &{
    id: string,
    hour: string,
    description: string,
}

export function Meal({ ...props}: MealProps){
    return(
        <Container {...props}>
            <Typography fontSize="body_xs" fontFamily="bold" >
                {props.hour}
            </Typography>
            <Divider />
            <Typography style={{flex: 1}} numberOfLines={1} >
               {props.description}
            </Typography>
            <Status
                isOnTheDiet={props.isOnTheDiet}
            />
        </Container>
    )
}