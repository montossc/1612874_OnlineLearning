import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import {screenName} from '../../global/constant';

const AccountSection = props => {
    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles.selectionText}
                          onPress={() => props.navigator.navigate(screenName.RegisterScreen)}>
            <Text style={styles.txtAccSection}>Create new account!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectionText}
                          onPress={() => props.navigator.navigate(screenName.PasswordRecoveryScreen)}>
            <Text style={styles.txtAccSection}>Forgot password?</Text>
        </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        // flex: 1,
        alignItems: 'center'
    },
    selectionText:{
        paddingTop: 30
    },
    txtAccSection:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15
    }
});
export default AccountSection;
