import React, {useContext, useState} from 'react';
import {
    TextInput,
    KeyboardAvoidingView,
    Text,
    StyleSheet,
    View, TouchableOpacity, Alert, ScrollView,
} from 'react-native';

import SubmitButtonCenter from '../../../commonComponents/submit-button-center';
import {AuthenticationContext, ThemeContext} from "../../../../../App";
import {color} from "../../../../globalVariables/constant";
import iteduAPI from "../../../../API/iteduAPI";
import InputBox from "../../../commonComponents/input-box";

const PasswordChanging = () => {
    const [curPass, setCurPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [conPass, setConPass] = useState('');
    const [mess, setMess] = useState('')
    const authenContext = useContext(AuthenticationContext)

    const changePasswordButton = () => {
        const validPassword = (/^.{8,20}$/).test(newPass); //pass phai co 8-20 ki tu
        if (validPassword === false) {
            setMess('New password must have 8 - 20 characters')
        }
        else if (newPass !== conPass) {
            setMess('New password and confirm password do not match')
        }
        else {
            iteduAPI.post('/user/change-password', {
                id: authenContext.authenState.userInfo.id,
                oldPass: curPass,
                newPass: newPass
            }, authenContext.authenState.token)
                .then((response) => {
                    if (response.isSuccess) {
                        setMess('Change password successfully!')
                    } else {
                        setMess('Current password is not correct! Please try again...')
                    }
                })
        }
    }
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    return (
        <KeyboardAvoidingView behavior={'height'} style={[styles.container, {backgroundColor: theme.background}]}>
            <ScrollView style={{marginTop: 20}}>
            <View style={styles.block}>
                <Text style={[styles.txt, {color: theme.foreground}]}>Current password</Text>
                <InputBox placeholder={'Current password'} secureText={true} value={curPass} changeTextEvent={text => setCurPass(text)}/>

            </View>
            <View style={styles.block}>
                <Text style={[styles.txt, {color: theme.foreground}]}>New password</Text>
                <InputBox placeholder={'New password'} secureText={true} value={newPass} changeTextEvent={text => setNewPass(text)}/>
            </View>
            <View style={styles.block}>
                <Text style={[styles.txt, {color: theme.foreground}]}>Confirm password</Text>
                <InputBox placeholder={'Confirm password'} secureText={true} value={conPass} changeTextEvent={text => setConPass(text)}/>

            </View>
            <Text style={styles.txtWarningStatus}>{mess}</Text>
            <View style={styles.containerBtn}>
                <SubmitButtonCenter name={'Update'} color={theme.foreground} onPress={changePasswordButton}/>
            </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    txt: {
        marginLeft: 50,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    block: {
        marginBottom: 30,
    },
    containerBtn: {
        marginVertical: 50
    },
    txtWarningStatus: {
        color: color.LIGHT_RED,
        marginLeft: 50
    }
});
export default PasswordChanging;
