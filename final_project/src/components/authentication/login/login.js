import React from 'react';
import {Image, StyleSheet, ImageBackground, KeyboardAvoidingView} from 'react-native';

import AccountSection from './account-section';
import LoginForm from './login-form';

//props: navigation
const Login = props => {
    return (
        <KeyboardAvoidingView style={styles.container} behavior={'height'}>
            <ImageBackground style={styles.container} source={require('../../../../assets/image/background.jpg')}>
                <Image style={styles.logo} source={require('../../../../assets/logo/background_logo.png')}/>
                <LoginForm navigator={props.navigation}/>
                <AccountSection navigator={props.navigation}/>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        alignSelf: 'center'
    }
})
export default Login;
