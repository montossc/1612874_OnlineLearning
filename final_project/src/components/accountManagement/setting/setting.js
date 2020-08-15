import React, {useContext, useEffect, useState} from 'react';
import {Linking, StyleSheet, TouchableOpacity} from 'react-native'
import globalStyles from '../../../globalVariables/styles';
import {ThemeContext} from "../../../../App";
import {Switch, Text, View} from "react-native";
import {color, screenName, themes} from "../../../globalVariables/constant";
import {appVer} from "../../../core/services/setting-service";

const Setting = props => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const [darkEnable, setDarkEnable] = useState(theme === themes.dark ? true : false);
    useEffect(() => {
        if (darkEnable == true) {
            themeContext.setTheme(themes.dark);
        } else {
            themeContext.setTheme(themes.light);
        }
    }, [darkEnable])
    props.navigation.setOptions({
        headerStyle: {backgroundColor: theme.background},
        headerTitleStyle: {color: theme.foreground}
    })
    return (
        <View style={[globalStyles.container, {backgroundColor: theme.background, justifyContent:'space-between'}]}>
            <View>
                <View style={styles.containerSettingSession}>
                    <Text style={[globalStyles.txtSmallTitle, {color: theme.foreground}]}>Appearance</Text>
                    <View style={styles.containerSetting}>
                        <Text style={[globalStyles.txtDefault, {color: theme.foreground}]}>Use dark theme</Text>
                        <Switch
                            trackColor={{false: color.LIGHT_GRAY, true: color.LIGHT_BLUE}}
                            thumbColor={darkEnable ? color.GREEN : theme.background}
                            onValueChange={() => setDarkEnable(isEnable => !isEnable)}
                            value={darkEnable}/>
                    </View>
                </View>
                <View style={styles.containerSettingSession}>
                    <Text style={[globalStyles.txtSmallTitle, {color: theme.foreground}]}>About</Text>
                    <TouchableOpacity style={styles.containerSetting} onPress={() => {
                        Linking.openURL('https://itedu.me/intro-page')
                    }}>
                        <Text style={[globalStyles.txtDefault, {color: theme.foreground}]}>About us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerSetting} onPress={() => {props.navigation.navigate(screenName.FeedbackScreen)}}>
                        <Text style={[globalStyles.txtDefault, {color: theme.foreground}]}>Feedback</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.versionContainer}>
                <Text style={[globalStyles.txtItalicDefault, {color: theme.foreground}]}>Version {appVer}</Text>
                <Text style={[globalStyles.txtItalicDefault, {color: theme.foreground}]}>@Karuein E-learning Mobile App</Text>
                <Text style={[globalStyles.txtItalicDefault, {color: theme.foreground}]}>Web-version: https://itedu.me</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    containerSettingSession: {
        borderBottomWidth: 1
    },
    containerSetting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    versionContainer: {
        alignItems:'center'
    }
});
export default Setting;
