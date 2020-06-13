import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native'
import globalStyles from '../../global/styles';
import {ThemeContext} from "../../../../App";
import {Switch, Text, View} from "react-native";
import {color, themes} from "../../global/constant";

const Setting = props => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const [darkEnable, setDarkEnable] = useState(theme === themes.dark ? true : false);
    useEffect(() => {
        if (darkEnable == true) {
            themeContext.setTheme(themes.dark);
        }
        else {
            themeContext.setTheme(themes.light);
        }
    }, [darkEnable])
    props.navigation.setOptions({
        headerStyle: {backgroundColor: theme.background},
        headerTitleStyle: {color: theme.foreground}
    })
    return (
        <View style={[globalStyles.container, {backgroundColor: theme.background}]}>
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
        </View>
    );
};
const styles = StyleSheet.create({
    containerSettingSession:{
        borderBottomWidth: 1
    },
    containerSetting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    }
});
export default Setting;
