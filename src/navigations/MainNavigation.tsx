import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import TabNavigation from "./TabNavigation";
import Detail from "../screens/Detail";
import React from "react";

export type RootStackParamList = {
    Home: undefined;
    TabHome: undefined;
    Detail: {characterId: number};
}

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigationComponent = () => {
    return (
        <Stack.Navigator initialRouteName="TabHome">
            <Stack.Screen 
            name='TabHome'
            component={TabNavigation}
            options={{headerShown:false}}
            />
            <Stack.Screen 
            name='Detail'
            component={Detail}
            />
        </Stack.Navigator>
    );
};

const MainNavigation = React.memo(MainNavigationComponent);

export default MainNavigation;