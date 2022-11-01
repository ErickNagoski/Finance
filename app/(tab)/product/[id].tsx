import { View, Text } from 'react-native';

export default function Page({route}): JSX.Element {
    return (
        <View>
            <Text>Detalhes do produto {route.params.id}</Text>
        </View>)
}