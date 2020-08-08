import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Icon} from "react-native-elements";

import {AuthenticationContext} from "../../../../App";
import {screenName, color} from '../../../globalVariables/constant';
import InputBox from "../../commonComponents/input-box";
import SubmitButtonCenter from '../../commonComponents/submit-button-center';


const LoginForm = ({navigator}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePass] = useState(true);
    const [icon, setIcon] = useState('visibility-off');

    const authenContext = useContext(AuthenticationContext);

    useEffect(() => {
        if (authenContext.authenState.isAuthenticated) {
            navigator.navigate(screenName.Tab);
        }
    }, [authenContext.authenState])

    const showHidePassword = () => {
        if (hidePassword) {
            setHidePass(false);
            setIcon('visibility');
        } else {
            setHidePass(true);
            setIcon("visibility-off");
        }
    }
    const renderLoginStatus = (message) => {
        if ((message === '') || (!message)) {
            return <View/>
        } else {
            return <Text style={styles.txtLoginStatus}>{message}</Text>
        }
    }
    return (
        <View style={styles.container}>
            {renderLoginStatus(authenContext.authenState.message)}
            <InputBox placeholder={"Username"}
                      changeTextEvent={username => setUsername(username)}
                      value={username}
                      iconName={'person'}
                      iconType={'material-icons'}
            />
            <View>
                <InputBox placeholder={'Password'}
                          changeTextEvent={password => setPassword(password)}
                          value={password}
                          secureText={hidePassword}
                          iconName={'lock'}
                          iconType={'material-icons'}/>
                <Icon name={icon} type={'material-icons'} onPress={showHidePassword} containerStyle={styles.btnEye}/>
            </View>
            <SubmitButtonCenter name={'Login'} color={'black'} onPress={() => authenContext.login(username, password)}/>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'space-around'
    },
    btnEye: {
        position: 'absolute',
        marginLeft: 320,
        marginTop: 25
    },
    txtLoginStatus: {
        color: color.LIGHT_RED,
        marginLeft: 50
    }
});
export default LoginForm;
