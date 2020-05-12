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
            <View>
                <Image source={require('../../../../assets/icon/user.png')} style={styles.symbol}/>
                <TextInput
                    style={globalStyles.userInput}
                    placeholder="Username"
                    onChangeText={username => setUsername(username)}
                    value={username}
                />
            </View>
            <View style={styles.userInputArea}>
                <Image source={require('../../../../assets/icon/password.png')} style={styles.symbol}/>
                <TextInput
                    style={globalStyles.userInput}
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
            <TouchableOpacity style={globalStyles.btnSummit}>
                <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>Login</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    symbol:{
        position: 'absolute',
        height: 20,
        resizeMode: 'contain',
        top: 13,
        right: 100
    },
    iconEye: {
        flex: 1,
        resizeMode: 'contain',
        width: '100%',
        height: '100%'
    },
    btnEye: {
        position: 'absolute',
        height: 30,
        width: 30,
        alignSelf:'flex-end',
        top: 10,
        right: 50
    }
});
export default LoginForm;
