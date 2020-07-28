import React, {useContext} from 'react';
import globalStyles from '../../global/styles';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {screenName} from '../../global/constant';
import {ThemeContext} from "../../../../App";

const AccountChangingSection = props => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    return (
        <View style={[globalStyles.containerTextButton, {borderColor: theme.foreground}]}>
            <TouchableOpacity style={styles.containerTxtBtn} onPress={() => props.navigator.navigate(screenName.ChangePasswordScreen)}>
                <Text style={[globalStyles.txtDefault, {color: theme.foreground}]}>Change password</Text>
            </TouchableOpacity>
            {/*<TouchableOpacity style={styles.containerTxtBtn} onPress={() => props.navigator.navigate(screenName.ChangeUsernameScreen)}>
                <Text style={[globalStyles.txtDefault, {color: theme.foreground}]}>Change username</Text>
            </TouchableOpacity>*/}
        </View>
    );
};
const styles = StyleSheet.create({
    containerTxtBtn:{
        marginVertical: 10
    }
});
export default AccountChangingSection;
