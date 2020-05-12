import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import LoginForm from './login-form';
import AccountSection from './account-section';

const Login = () => {
    return (
        <ImageBackground style={styles.container} source={require('../../../../assets/image/background.jpg')}>
            <Image style={styles.logo} source={require('../../../../assets/logo/background_logo.png')}/>
            <LoginForm/>
            <AccountSection/>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column'
    },
    logo:{
        flex: 1,
        alignSelf: 'center'
    }
})
export default Login;
