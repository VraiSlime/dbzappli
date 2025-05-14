import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import TabNavigation from "./TabNavigation";
import Detail from "../screens/Detail";
import React from "react";
import { Text } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { RED, YELLOW } from "../constants/colorConstant";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export type RootStackParamList = {
    Home: undefined;
    TabHome: undefined;
    Detail: {characterId: number};
}

const Stack = createStackNavigator<RootStackParamList>();

// Composant presonnalisé pour le titre de l'écran détail
const CharacterTitle = ({characterName}: {characterName: string}) => {
    return <Text style={styles.headerTitle}>{characterName}</Text>;
  };

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 40, 
        letterSpacing: 1,
        color: RED,
        textAlign: 'center',
        width: '100%',
        textShadowColor: YELLOW, 
        textShadowRadius: 4, 
        textShadowOffset: {width: 2, height:2},
        elevation: 3
    }
})

const MainNavigationComponent = () => {
    const {characterDetail} = useSelector((state: RootState) => state.characters)
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
            options={{
                headerTitle: () => 
                characterDetail ? (
                    <CharacterTitle characterName={characterDetail?.name} />
                ): null,
                headerStyle : {
                    backgroundColor: '#010101',
                    elevation: 0,
                    shadowOpacity: 0,
                }      
            }}
            />
        </Stack.Navigator>
    );
};

const MainNavigation = React.memo(MainNavigationComponent);

export default MainNavigation;