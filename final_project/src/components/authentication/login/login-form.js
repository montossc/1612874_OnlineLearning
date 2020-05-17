import React, {useState} from 'react';
import {
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View, Dimensions,
} from 'react-native';
import globalStyles from '../../global/styles';
import iconEyeShow from '../../../../assets/icon/eye_show.png';
import iconEyeHide from '../../../../assets/icon/eye_hide.png';
import SubmitButtonCenter from '../../global/commonComponent/submit-button-center';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePass] = useState(true);
    const [icon, setIcon] = useState(iconEyeHide);
    const showHidePassword = () => {
        if (hidePassword){
            setHidePass(false);
            setIcon(iconEyeShow);
        }
        else{
            setHidePass(true);
            setIcon(iconEyeHide);
        }
    }
    return (
        <KeyboardAvoidingView behavior='height' style={styles.container}>
            <View style={globalStyles.containerTxtInput}>
                <Image source={require('../../../../assets/icon/user.png')} style={styles.symbol}/>
                <TextInput
                    style={styles.txtInput}
                    placeholder="Username"
                    onChangeText={username => setUsername(username)}
                    value={username}
                />
            </View>
            <View style={globalStyles.containerTxtInput}>
                <Image source={require('../../../../assets/icon/password.png')} style={styles.symbol}/>
                <TextInput
                    style={styles.txtInput}
                    placeholder="Password"
                    onChangeText={password => setPassword(password)}
                    value={password}
                    secureTextEntry={hidePassword}
                />
                <TouchableOpacity style={styles.btnEye} onPress={showHidePassword}>
                    <Image
                        style={styles.iconEye}
                        source={icon}
                    />
                </TouchableOpacity>
            </View>
            <SubmitButtonCenter name={'Login'} color={'black'}/>
        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    txtInput:{
        padding: 50
    },
    symbol:{
        position: 'absolute',
        height: 20,
        width: 40,
        resizeMode: 'contain',
        marginLeft: 5
    },
    btnEye: {
        height: 30,
        width: 30,
        marginRight: 10
    },
    iconEye: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'
    }
});
export default LoginForm;
