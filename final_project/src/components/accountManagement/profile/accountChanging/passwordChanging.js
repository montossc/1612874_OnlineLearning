import React, {useContext, useEffect, useState} from 'react';
import {
    TextInput,
    KeyboardAvoidingView,
    Text,
    StyleSheet,
    View, TouchableOpacity, Alert, ScrollView,
} from 'react-native';
import globalStyles from '../../../global/styles';
import SubmitButtonCenter from '../../../global/commonComponent/submit-button-center';
import {AuthenticationContext, ThemeContext, UserProfileContext} from "../../../../../App";
import {color} from "../../../global/constant";
import iteduAPI from "../../../../API/iteduAPI";

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
                    //console.log('change pass res: ', response)
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
                <TextInput style={[globalStyles.containerTxtInput, {color: theme.foreground}]}
                           placeholder="Current password"
                           secureTextEntry={true}
                            defaultValue={curPass}
                            onChangeText={text => setCurPass(text)}></TextInput>
            </View>
            <View style={styles.block}>
                <Text style={[styles.txt, {color: theme.foreground}]}>New password</Text>
                <TextInput style={[globalStyles.containerTxtInput, {color: theme.foreground}]}
                           placeholder="New password"
                           secureTextEntry={true}
                            defaultValue={newPass}
                            onChangeText={text => setNewPass(text)}></TextInput>
            </View>
            <View style={styles.block}>
                <Text style={[styles.txt, {color: theme.foreground}]}>Confirm password</Text>
                <TextInput style={[globalStyles.containerTxtInput, {color: theme.foreground}]}
                           placeholder="Confirm password"
                           secureTextEntry={true}
                            defaultValue={conPass}
                            onChangeText={text => setConPass(text)}></TextInput>
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
