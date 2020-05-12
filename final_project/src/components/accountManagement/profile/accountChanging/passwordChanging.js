import React from 'react';
import {
    TextInput,
    KeyboardAvoidingView,
    Text,
    StyleSheet,
    View, TouchableOpacity,
} from 'react-native';
import globalStyles from '../../../global/styles';

const PasswordChanging = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <KeyboardAvoidingView>
                <View style={styles.block}>
                    <Text style={styles.txt}>Current password</Text>
                    <TextInput style={[globalStyles.userInput, {justifySelf: 'flex-end'}]}
                               placeholder="Current password"
                               secureTextEntry={true}></TextInput>
                </View>
                <View style={styles.block}>
                    <Text style={styles.txt}>New password</Text>
                    <TextInput style={[globalStyles.userInput, {justifySelf: 'flex-end'}]}
                               placeholder="New password"
                               secureTextEntry={true}></TextInput>
                </View>
                <View style={styles.block}>
                    <Text style={styles.txt}>Confirm password</Text>
                    <TextInput style={[globalStyles.userInput, {justifySelf: 'flex-end'}]}
                               placeholder="Confirm password"
                               secureTextEntry={true}></TextInput>
                </View>
            </KeyboardAvoidingView>
            <TouchableOpacity style={globalStyles.btnSummit}>
                <Text style={{fontWeight: 'bold'}}>Update</Text>

            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    txt: {
        marginLeft: 30,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    block: {
        marginBottom: 30,
    },
});
export default PasswordChanging;
