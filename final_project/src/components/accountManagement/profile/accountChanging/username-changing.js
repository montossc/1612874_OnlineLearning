import React, {useContext, useState} from 'react';
import {
    TextInput,
    KeyboardAvoidingView,
    Text,
    StyleSheet,
    View, Alert,
} from 'react-native';
import globalStyles from '../../../global/styles';
import SubmitButtonCenter from '../../../global/commonComponent/submit-button-center';
import {UserProfileContext} from "../../../../../App";

const UsernameChanging = () => {
    const userProfileContext = useContext(UserProfileContext);
    const [username, setUsername] = useState(userProfileContext.userProfile.username);
    return (
        <KeyboardAvoidingView behavior={'height'} style={styles.container}>

            <View style={styles.block}>
                <Text style={styles.txt}>Current username</Text>
                <TextInput style={globalStyles.containerTxtInput}
                           placeholder={userProfileContext.userProfile.username}
                           editable={false}></TextInput>
            </View>
            <View style={styles.block}>
                <Text style={styles.txt}>New username</Text>
                <TextInput style={globalStyles.containerTxtInput}
                           placeholder="New username"
                           onChangeText={text => setUsername(text)}
                           defaultValue={username}>
                </TextInput>
            </View>

            <View style={styles.containerBtn}>
                <SubmitButtonCenter name={'Update'} color={'black'} onPress={() => {
                    const temp = userProfileContext.userProfile;
                    temp.username = username;
                    userProfileContext.setUserProfile(temp);
                    Alert.alert('Username update', 'Updated!');
                }}/>
            </View>
        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    container: {
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
