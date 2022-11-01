import {Tabs} from "expo-router";

export default function Layout(){
    return (
        <Tabs>
            <Tabs.Screen name="profile"/>
            <Tabs.Screen name="product"/>
        </Tabs>
    )
}