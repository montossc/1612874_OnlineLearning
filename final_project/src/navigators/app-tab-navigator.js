import React, {useContext} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {Icon} from "react-native-elements";

import {color, screenName} from "../globalVariables/constant";
import {ThemeContext} from "../../App";
import {homeStack} from "./home-stack-navigator";
import {browseStack} from "./browse-stack-navigator";
import {searchStack} from "./search-stack-navigator";


const mainTab = createBottomTabNavigator();
export const tabNavigator = () => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    return (
        <mainTab.Navigator initialRouteName={screenName.HomeScreen}
                           screenOptions={({route}) => ({
                               tabBarIcon: ({color, size}) => {
                                   let iconName;

                                   if (route.name === screenName.HomeScreen) {
                                       iconName = 'home';
                                   } /*else if (route.name === screenName.OwnedScreen) {
                                       iconName = 'shop-two';
                                   }*/ else if (route.name === screenName.BrowseScreen) {
                                       iconName = 'explore';
                                   } else if (route.name === screenName.SearchScreen) {
                                       iconName = 'search';
                                   }
                                   return <Icon name={iconName} type={'material-icons'} size={size} color={color}/>;
                               },
                           })}
                           tabBarOptions={{
                               activeTintColor: color.LIGHT_BLUE,
                               inactiveTintColor: color.LIGHT_GRAY,
                               style: {backgroundColor: theme.background}
                           }}
        >
            <mainTab.Screen name={screenName.HomeScreen} component={homeStack}/>
            {/*<mainTab.Screen name={screenName.OwnedScreen} component={downloadStack}/>*/}
            <mainTab.Screen name={screenName.BrowseScreen} component={browseStack}/>
            <mainTab.Screen name={screenName.SearchScreen} component={searchStack} options={{title: 'Search'}}/>
        </mainTab.Navigator>
    );
};
