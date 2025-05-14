import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Search from "../screens/Search";
import { StyleSheet } from "react-native";
import { ORANGE, YELLOW } from "../constants/colorConstant";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: YELLOW,
            //tabBarInactiveIntColor: ORANGE,
            tabBarStyle: styles.tabBar,
            tabBarLabelStyle: styles.tabBarLabel

        }}>
            
            <Tab.Screen
            name="HomeTab"
            component={Home}
            options={{
                tabBarLabel: 'Accueil',
                tabBarIcon: ({color, size}) => (
                    <Icon name="home" color={color} size={size} />
                )
            }}
            />

            <Tab.Screen
            name="SearchTab"
            component={Search}
            options={{
                tabBarLabel: 'Accueil',
                tabBarIcon: ({color, size}) => (
                    <Icon name="magnify" color={color} size={size} />
                )
            }}
            />
        </Tab.Navigator>
    );
};

const styles= StyleSheet.create({
    tabBar: {
        backgroundColor: '#010101',
        borderTopWidth: 0,
        elevation: 8,
        height: 60,
        paddingBottom: 5,
    }, 
    tabBarLabel: {
        fontSize: 12,
        fontWeight: '500',
    }
})


export default TabNavigation;