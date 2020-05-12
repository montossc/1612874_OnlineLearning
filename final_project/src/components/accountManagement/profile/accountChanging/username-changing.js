import React from 'react';
import {
    TextInput,
    KeyboardAvoidingView,
    Text,
    StyleSheet,
    View, TouchableOpacity,
} from 'react-native';
import globalStyles from '../../../global/styles';

const UsernameChanging = () => {
    const currentUsername = 'montossc';
    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <KeyboardAvoidingView>
                <View style={styles.block}>
                    <Text style={styles.txt}>Current username</Text>
                    <TextInput style={[globalStyles.userInput, {justifySelf: 'flex-end'}]}
                               placeholder={currentUsername}
                               editable={false}></TextInput>
                </View>
                <View style={styles.block}>
                    <Text style={styles.txt}>New username</Text>
                    <TextInput style={[globalStyles.userInput, {justifySelf: 'flex-end'}]}
                               placeholder="New username">
                    </TextInput>
                </View>
            </KeyboardAvoidingView>
            <TouchableOpacity style={globalStyles.btnSummit}>
                <Text style={{fontWeight: 'bold'}}>Update</Text>

            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    txt: {
        marginLeft: 30,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    block: {
        marginBottom: 30,
    },
});
export default UsernameChanging;
