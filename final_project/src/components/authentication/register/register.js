import React, {useReducer, useState} from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    KeyboardAvoidingView, ScrollView,
} from 'react-native';
import globalStyles from '../../../globalVariables/styles';
import SubmitButtonCenter from '../../commonComponents/submit-button-center';
import {color} from "../../../globalVariables/constant";
import InputBox from "../../commonComponents/input-box";
import {registerCommand} from "../../../core/services/account-service";

const Register = () => {
    const [regInputState, setRegInput] = useState({fullname: '', email: '', password: '', confirmPass: '', phone: ''});
    const [isRegSuccess, setRegSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');

    const registerOnPress = () => {
        registerCommand(regInputState).then((res) => {
            setRegSuccess(res.isSuccess)
            setErrorMessage(res.message)
        })
    }

    const renderInputView = () => {
        if (isRegSuccess === false) {
            return (
                <ScrollView style={{marginTop: 50}}>
                    <InputBox placeholder={'Full name'}
                              changeTextEvent={(fullname) => setRegInput({...regInputState, fullname: fullname})}
                              value={regInputState.fullname}
                              iconName={'person'}
                              iconType={'material-icons'}/>
                    <InputBox placeholder={'E-mail'}
                              changeTextEvent={(email) => setRegInput({...regInputState, email: email})}
                              value={regInputState.email}
                              iconName={'email'}
                              iconType={'material-icons'}/>
                    <InputBox placeholder={'Password'}
                              changeTextEvent={(pass) => setRegInput({...regInputState, password: pass})}
                              value={regInputState.password}
                              iconName={'lock'}
                              iconType={'material-icons'}
                              secureText={true}/>
                    <InputBox placeholder={'Confirm password'}
                              changeTextEvent={(pass) => setRegInput({...regInputState, confirmPass: pass})}
                              value={regInputState.confirmPass}
                              iconName={'lock'}
                              iconType={'material-icons'}
                              secureText={true}/>
                    <InputBox placeholder={'Phone'}
                              changeTextEvent={(phone) => setRegInput({...regInputState, phone: phone})}
                              value={regInputState.phone}
                              iconName={'call'}
                              iconType={'material-icons'}/>

                    <SubmitButtonCenter name={'Register'} color={'black'}
                                        onPress={registerOnPress}/>
                </ScrollView>
            )
        } else {
            return (<Text style={[globalStyles.txtDefault, styles.txtSuccess]}>
                Thank you for your registration! {'\n\n'}We have sent you an e-mail, please check the inbox (or spam
                mail-box) and follow the link inside to active your account.
                You must active the account to use this app! {'\n\n'}
                After that, you can back to the login and sign in to use Karueein!
            </Text>)
        }
    }
    return (
        <KeyboardAvoidingView behavior={'height'} style={styles.container}>
            <ImageBackground style={styles.container} source={require('../../../../assets/image/background.jpg')}>
                <Text style={[globalStyles.txtTitle, styles.txtResTittle]}>Create an account</Text>
                <Text style={styles.txtRegStatus}>{errorMessage}</Text>
                {renderInputView()}
            </ImageBackground>
        </KeyboardAvoidingView>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    txtResTittle: {
        alignSelf: 'center',
        // flex: 1,
        marginTop: 50,
    },
    symbol: {
        position: 'absolute',
        marginLeft: 10
    },
    txtInput: {
        padding: 5,
        paddingLeft: 25
    },
    txtRegStatus: {
        color: color.GREEN,
        marginLeft: 50,
        marginTop: 50,
        fontSize: 15
    },
    txtSuccess: {
        padding: 30,
        marginTop: 70
    }
});
export default Register;
