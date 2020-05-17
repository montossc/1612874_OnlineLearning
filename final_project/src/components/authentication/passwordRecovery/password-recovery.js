import React from 'react';
import {
    Dimensions,
    ImageBackground,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity, View,
} from 'react-native';
import globalStyles from '../../global/styles';
import SubmitButtonCenter from '../../global/commonComponent/submit-button-center';

const PasswordRecovery = () => {
    return (
        <ImageBackground style={styles.container} source={require('../../../../assets/image/background.jpg')}>
            <Text style={[globalStyles.txtTitle, styles.txtResTitle]}>Forgor password</Text>
            <View style={styles.mainView}>
                <KeyboardAvoidingView behavior={'height'} style={styles.containerTxt}>
                    <Text style={globalStyles.txtDefault}>Enter your username, email address and we'll send you a link
                        to reset your password</Text>
                    <TextInput style={[globalStyles.containerTxtInput, styles.containerForm]}
                               placeholder="Username"/>
                    <TextInput style={[globalStyles.containerTxtInput, styles.containerForm]}
                               placeholder="Email"/>
                </KeyboardAvoidingView>
            </View>
            <View style={styles.containerBtn}>
                <SubmitButtonCenter name={'Send email'} color={'black'}/>
            </View>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainView: {
        flex: 3,
        justifyContent: 'space-around',
    },
    txtResTitle: {
        alignSelf: 'center',
        flex: 1,
        marginTop: 50,
    },
    containerBtn: {
        marginTop: 50,
        marginBottom: 100,
    },
    containerForm: {
        marginVertical: 20,
    },
    containerTxt:{
        paddingHorizontal: 50
    }
});

export default PasswordRecovery;
