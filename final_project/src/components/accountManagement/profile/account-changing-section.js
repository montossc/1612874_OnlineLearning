import React from 'react';
import globalStyles from '../../global/styles';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const AccountChangingSection = () => {
    return (
        <View style={globalStyles.containerTextButton}>
            <TouchableOpacity style={styles.containerTxtBtn}>
                <Text style={globalStyles.txtDefault}>Change password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerTxtBtn}>
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
