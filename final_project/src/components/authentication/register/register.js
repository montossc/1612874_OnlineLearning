import React, {useState} from 'react';
import {
    ImageBackground,
    StyleSheet,
    TextInput,
    Text,
    KeyboardAvoidingView,
    Dimensions,
    TouchableOpacity, View,
} from 'react-native';
import globalStyles from '../../global/styles';
import SubmitButtonCenter from '../../global/commonComponent/submit-button-center';

const Register = () => {
    return (
        <ImageBackground style={styles.container} source={require('../../../../assets/image/background.jpg')}>
            <Text style={[globalStyles.txtTitle, styles.txtResTittle]}>Create an account</Text>
            <KeyboardAvoidingView behavior={'height'} style={styles.containerForm}>
                <TextInput style={globalStyles.containerTxtInput}
                           placeholder="Username"/>
                <TextInput style={globalStyles.containerTxtInput}
                           placeholder="Email"/>
                <TextInput style={globalStyles.containerTxtInput}
                           placeholder="Password"
                           secureTextEntry={true}/>
                <TextInput style={globalStyles.containerTxtInput}
                           placeholder="Confirm password"
                           secureTextEntry={true}/>
            </KeyboardAvoidingView>
            <View style={styles.containerBtn}>
                <SubmitButtonCenter name={'Register'} color={'black'} style={{marginBottom: 100}}/>
            </View>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    txtResTittle: {
        alignSelf: 'center',
        flex: 1,
        marginTop: 50,
    },
    containerForm: {
        flex: 3,
        justifyContent: 'space-around',
    },
    containerBtn: {
        marginTop: 50,
        marginBottom: 100
    }
});
export default Register;
