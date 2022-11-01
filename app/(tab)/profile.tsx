import { Button } from "@rneui/base"
import { View, Text } from "react-native"

export default function Page(
    { navigation }
): JSX.Element {
    return (<View>

        <Text>Profile</Text>
        <Button onPress={() => { navigation.goBack() }}><Text>Voltar</Text></Button>
    </View>)
}