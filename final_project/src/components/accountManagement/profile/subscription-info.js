import React, {useContext} from 'react';
import globalStyles from '../../global/styles';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {screenName} from '../../global/constant';
import {ThemeContext} from "../../../../App";

const SubscriptionInfo = props => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    return (
        <View style={[globalStyles.containerTextButton, {borderColor: theme.foreground}]}>
            <Text style={[globalStyles.txtItalicDefault, {color: theme.foreground}]}>Subscription:</Text>
            <Text style={[globalStyles.txtItalicSmall, styles.txtContent, {color: theme.foreground}]}>{props.item}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => props.navigator.navigate(screenName.PricingScreen)}>
                <Text style={[globalStyles.txtDefault, {color: theme.foreground}]}>Change plan</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    txtContent: {
        marginTop:5,
        marginLeft: 30
    },
    btn:{
        marginTop: 20
    }
});
export default SubscriptionInfo;
