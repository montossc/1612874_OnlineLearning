import React from 'react';
import {
    TextInput,
    KeyboardAvoidingView,
    Text,
    StyleSheet,
    View, TouchableOpacity,
} from 'react-native';
import globalStyles from '../../../global/styles';
import SubmitButtonCenter from '../../../global/commonComponent/submit-button-center';

const UsernameChanging = () => {
    const currentUsername = 'montossc';
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <View style={styles.block}>
                    <Text style={styles.txt}>Current username</Text>
                    <TextInput style={globalStyles.containerTxtInput}
                               placeholder={currentUsername}
                               editable={false}></TextInput>
                </View>
                <View style={styles.block}>
                    <Text style={styles.txt}>New username</Text>
                    <TextInput style={globalStyles.containerTxtInput}
                               placeholder="New username">
                    </TextInput>
                </View>
            </KeyboardAvoidingView>
            <View style={styles.containerBtn}>
                <SubmitButtonCenter name={'Update'} color={'black'}/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
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
    }
});
export default UsernameChanging;
