import React, {useState} from 'react';
import {
    ImageBackground,
    StyleSheet,
    TextInput,
    Text,
    KeyboardAvoidingView,
    Dimensions,
    TouchableOpacity, View, ScrollView,
} from 'react-native';
import globalStyles from '../../global/styles';
import SubmitButtonCenter from '../../global/commonComponent/submit-button-center';
import {Icon} from "react-native-elements";
import {color} from "../../global/constant";
import iteduAPI from "../../../API/iteduAPI";

const Register = () => {
    const [isRegSuccess, setRegSuccess] = useState(false);
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [phone, setPhone] = useState('');
    const [regStatusMess, setRegStatusMess] = useState('');

    const regOnPress = () => {
        const validPassword = (/^.{8,20}$/).test(password); //pass phai co 8-20 ki tu
        const validEmail = (/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm).test(email);
        const phoneValid = (/((09|03|07|08|05)+([0-9]{8})\b)/).test(phone);
        if ((fullname === '') || (email === '') || (password === '') || (confirmPass === '') || (phone === '')) {
            setRegStatusMess('Please input empty fields!')
        }
        else if (validEmail === false) {
            setRegStatusMess('Invalid e-mail type!')
        }
        else if (validPassword === false) {
            setRegStatusMess('Password must have 8 - 20 characters')
        }
        else if (password !== confirmPass) {
            setRegStatusMess('Password and Confirm password do not match!')
        }
        else if (phoneValid === false)  {
            setRegStatusMess('Invalid phone number!')
        }
        else {
            iteduAPI.post('/user/register', {username: fullname, email: email, phone: phone, password: password})
                .then((response) => {
                    if(response.isSuccess){
                        setRegSuccess(true);
                        setRegStatusMess('');
                    }
                    else {
                        setRegStatusMess('Your e-mail/phone has already used. Please try again!')
                    }
                })
        }
    }
    const renderInputView = () => {
        if (isRegSuccess === false) {
            return (
                <ScrollView style={{marginTop: 50}}>

                    <View style={globalStyles.containerTxtInput}>
                        <Icon name={'perm-identity'} type={'material-icons'} containerStyle={styles.symbol} size={26}/>
                        <TextInput
                            style={styles.txtInput}
                            placeholder="Fullname"
                            onChangeText={fullname => setFullname(fullname)}
                            value={fullname}
                        />
                    </View>
                    <View style={globalStyles.containerTxtInput}>
                        <Icon name={'email'} type={'material-icons'} containerStyle={styles.symbol} size={26}/>
                        <TextInput
                            style={styles.txtInput}
                            placeholder="E-mail"
                            onChangeText={email => setEmail(email)}
                            value={email}
                        />
                    </View>
                    <View style={globalStyles.containerTxtInput}>
                        <Icon name={'lock'} type={'material-icons'} containerStyle={styles.symbol} size={26}/>
                        <TextInput
                            style={styles.txtInput}
                            placeholder="Password"
                            onChangeText={pass => setPassword(pass)}
                            value={password}
                            secureTextEntry={true}

                        />
                    </View>
                    <View style={globalStyles.containerTxtInput}>
                        <Icon name={'lock'} type={'material-icons'} containerStyle={styles.symbol} size={26}/>
                        <TextInput
                            style={styles.txtInput}
                            placeholder="Confirm password"
                            onChangeText={pass => setConfirmPass(pass)}
                            value={confirmPass}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={globalStyles.containerTxtInput}>
                        <Icon name={'phone'} type={'material-icons'} containerStyle={styles.symbol} size={26}/>
                        <TextInput
                            style={styles.txtInput}
                            placeholder="Phone"
                            onChangeText={phone => setPhone(phone)}
                            value={phone}
                        />
                    </View>
                    <SubmitButtonCenter name={'Register'} color={'black'} onPress={regOnPress}/>
                </ScrollView>
            )
        }
        else {
            return(<Text style={[globalStyles.txtDefault, styles.txtSuccess]}>
                Thank you for your registration! {'\n\n'}We have sent you an e-mail, please check the inbox (or spam mail-box) and follow the link inside to active your account.
                You must active the account to use this app! {'\n\n'}
                After that, you can back to the login and sign in to use Karueein!
            </Text>)
        }
    }
    return (

        <KeyboardAvoidingView behavior={'height'} style={styles.container}>
            <ImageBackground style={styles.container} source={require('../../../../assets/image/background.jpg')}>
                <Text style={[globalStyles.txtTitle, styles.txtResTittle]}>Create an account</Text>
                <Text style={styles.txtRegStatus}>{regStatusMess}</Text>
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
    /*
    containerBtn: {
        marginTop: 50,
        marginBottom: 100
    }*/
    symbol:{
        position: 'absolute',
        marginLeft: 10
    },
    txtInput:{
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
        padding:30,
        marginTop: 70
    }
});
export default Register;
