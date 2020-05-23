import React from 'react';
import globalStyles from '../../global/styles';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {screenName} from '../../global/constant';

const AccountChangingSection = props => {
    return (
        <View style={globalStyles.containerTextButton}>
            <TouchableOpacity style={styles.containerTxtBtn} onPress={() => props.navigator.navigate(screenName.ChangePasswordScreen)}>
                <Text style={globalStyles.txtDefault}>Change password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerTxtBtn} onPress={() => props.navigator.navigate(screenName.ChangeUsernameScreen)}>
                <Text style={globalStyles.txtDefault}>Change username</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    containerTxtBtn:{
        marginVertical: 10
    }
});
export default AccountChangingSection;
