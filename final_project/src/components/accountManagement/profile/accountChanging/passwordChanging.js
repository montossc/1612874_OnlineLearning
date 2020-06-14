import React, {useContext, useEffect, useState} from 'react';
import {
    TextInput,
    KeyboardAvoidingView,
    Text,
    StyleSheet,
    View, TouchableOpacity, Alert,
} from 'react-native';
import globalStyles from '../../../global/styles';
import SubmitButtonCenter from '../../../global/commonComponent/submit-button-center';
import {ThemeContext, UserProfileContext} from "../../../../../App";
import {color} from "../../../global/constant";

const PasswordChanging = () => {
    const userProfileContext = useContext(UserProfileContext);
    const [curPass, setCurPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [conPass, setConPass] = useState('');
    const  [status, setStatus] = useState(null);
    const changePasswordButton = () => {
        if (curPass === '' || newPass === '' || conPass === ''){
            setStatus({status: 404, errorString: 'Please input at 3 box below!'})
        }
        else if (curPass !== userProfileContext.userProfile.password){
            setStatus({status: 404, errorString: 'Current password is wrong!'})
        } else if (newPass !== conPass){
            setStatus({status: 404, errorString: 'New passsword and confirm are not match!'})
        }
        else{
            setStatus({status: 200})
        }
    }
    const renderErrorWarning = (status) => {
        console.log({status});
            if (!status){
                return <View/>
            }
            else if (status.status === 404) {
                return <Text style={styles.txtWarningStatus}>{status.errorString}</Text>
            }

    }
    useEffect(() => {
        if (status && status.status == 200){
            const temp = userProfileContext.userProfile;
            temp.password = newPass;
            userProfileContext.setUserProfile(temp);
            Alert.alert('Password update', 'Updated!');
        }
    }, [status]);
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    return (
        <KeyboardAvoidingView behavior={'height'} style={[styles.container, {backgroundColor: theme.background, flex: 1}]}>
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
            {renderErrorWarning(status)}
            <View style={styles.containerBtn}>
                <SubmitButtonCenter name={'Update'} color={theme.foreground} onPress={changePasswordButton}/>
            </View>
        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
