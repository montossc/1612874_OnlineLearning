import React from 'react';
import {
    Dimensions,
    ImageBackground,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity, View
} from 'react-native';
import globalStyles from '../../global/styles';

const PasswordRecovery = () => {
    return (
        <ImageBackground style={styles.container} source={require('../../../../assets/image/background.jpg')}>
            <Text style={styles.txtResTittle}>Forgor password</Text>
            <View style={styles.mainView}>
                <Text style={styles.txtDescription}>Enter your username, email address and we'll send you a link to reset your password</Text>
                <KeyboardAvoidingView behavior={'height'}>
                    <TextInput style={[globalStyles.userInput, {marginLeft: 0, marginTop: 20 ,width: globalStyles.userInput.width - 50}]}
                               placeholder="Username"/>
                    <TextInput style={[globalStyles.userInput, {marginLeft: 0, marginTop: 20 ,width: globalStyles.userInput.width - 50}]}
                               placeholder="Email"/>
                </KeyboardAvoidingView>
                <TouchableOpacity style={[globalStyles.btnSummit, {marginBottom: 100, marginTop: 50}]}>
                    <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>Send email</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    mainView:{
        flex: 3,
        justifyContent: 'center',
        paddingLeft: 50,
        paddingRight: 50
    },
    txtResTittle: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        flex: 1,
        marginTop: 50,
    },
    txtDescription:{
        fontSize: 15
    }
});

export default PasswordRecovery;
