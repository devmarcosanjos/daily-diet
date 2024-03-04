import { Text, View } from "react-native";
import { style } from "./styles";

export function HomeScreen() {
    return(
        <View style={style.container}>
            <Text style={style.title} >Home Screen</Text>
        </View>
    )
}