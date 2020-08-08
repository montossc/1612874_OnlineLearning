import React, {useState} from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text, View,
} from 'react-native';

import globalStyles from '../../../globalVariables/styles';
import SubmitButtonCenter from '../../commonComponents/submit-button-center';
import {color} from "../../../globalVariables/constant";
import InputBox from "../../commonComponents/input-box";
import {forgotPassCommand} from "../../../core/services/account-service";

const PasswordRecovery = () => {
    const [email, setEmail] = useState('')
    const [resetSuccess, setResetSuccess] = useState(false)
    const [errorMess, setErrorMess] = useState('')

    const onPressSendEmail = () => {
        forgotPassCommand(email).then((res) => {
            setResetSuccess(res.isSuccess)
            setErrorMess(res.message)
        })
    }
    const renderView = () => {
        if (resetSuccess === false) {
            return (
                    <View style={styles.mainView}>
                        <Text style={styles.txtRegStatus}>{errorMess}</Text>
                        <Text style={globalStyles.txtDefault}>Enter your email address and we'll send you a link
                            to reset your password</Text>
                        <InputBox placeholder={"E-mail"} changeTextEvent={email => setEmail(email)} value={email}
                                  iconName={'email'} iconType={'material-icons'} />
                    <View style={styles.containerBtn}>
                        <SubmitButtonCenter name={'Send email'} color={'black'} onPress={onPressSendEmail}/>
                    </View>
                </View>
            )
        }
        else {
            return(<Text style={[globalStyles.txtDefault, styles.txtSuccess]}>
                We have sent you an e-mail, please check the inbox (or spam mail-box) and follow the link inside to reset your password.{'\n\n'}
                After that, you can back to the login and sign in to use Karueein!
            </Text>)
        }
    }
    return (
        <ImageBackground style={styles.container} source={require('../../../../assets/image/background.jpg')}>
            <Text style={[globalStyles.txtTitle, styles.txtResTitle]}>Forgor password</Text>
            {renderView()}
        </ImageBackground>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainView: {
        paddingTop: 50,
        justifyContent: 'space-around',
        marginHorizontal: 50
    },
    txtResTitle: {
        alignSelf: 'center',
        marginTop: 50,
    },
    containerBtn: {
        marginTop: 50,
        marginBottom: 100,
    },
    containerForm: {
        marginVertical: 20,
    },
    containerTxt: {
        paddingHorizontal: 50
    },
    txtRegStatus: {
        color: color.GREEN,
        marginBottom: 20,
        fontSize: 15
    },
    txtSuccess: {
        padding:30,
        marginTop: 70
    }
});

export default PasswordRecovery;
