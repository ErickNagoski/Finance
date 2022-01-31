import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Auth } from "firebase/auth";
import Home from "../pages/Home";

function AppRoutes() {
    const AppStack = createStackNavigator();
    return (
        <AppStack.Navigator>
            <AppStack.Screen name='Home' component={Home} />
        </AppStack.Navigator>
    )
}


export default AppRoutes;