import React, {useState} from 'react';
import {
    ImageBackground,
    StyleSheet,
    TextInput,
    Text,
    KeyboardAvoidingView,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import globalStyles from '../../global/styles';
const Register = () => {
    return (
        <ImageBackground style={styles.container} source={require('../../../../assets/image/background.jpg')}>
            <Text style={styles.txtResTittle}>Create an account</Text>
            <KeyboardAvoidingView behavior={'height'} style={{flex: 3, justifyContent: 'space-around'}}>
                <TextInput style={globalStyles.userInput}
                           placeholder="Username"/>
                <TextInput style={globalStyles.userInput}
                           placeholder="Email"/>
                <TextInput style={globalStyles.userInput}
                           placeholder="Password"
                           secureTextEntry={true}/>
                <TextInput style={globalStyles.userInput}
                           placeholder="Confirm password"
                           secureTextEntry={true}/>
            </KeyboardAvoidingView>
            <TouchableOpacity style={[globalStyles.btnSummit, {marginBottom: 100, marginTop: 50}]}>
                <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>Register</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    txtResTittle: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        flex: 1,
        marginTop: 50,
    }
});
export default Register;
