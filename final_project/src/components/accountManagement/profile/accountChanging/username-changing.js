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
import {ThemeContext, UserProfileContext} from "../../../../../App";

const UsernameChanging = () => {
    const userProfileContext = useContext(UserProfileContext);
    const [username, setUsername] = useState(userProfileContext.userProfile.username);
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    return (
        <KeyboardAvoidingView behavior={'height'} style={[styles.container, {backgroundColor: theme.background, flex: 1}]}>

            <View style={styles.block}>
                <Text style={[styles.txt, {color: theme.foreground}]}>Current username</Text>
                <TextInput style={[globalStyles.containerTxtInput, {color: theme.foreground}]}
                           placeholder={userProfileContext.userProfile.username}
                           editable={false}></TextInput>
            </View>
            <View style={styles.block}>
                <Text style={[styles.txt, {color: theme.foreground}]}>New username</Text>
                <TextInput style={[globalStyles.containerTxtInput, {color: theme.foreground}]}
                           placeholder="New username"
                           onChangeText={text => setUsername(text)}
                           defaultValue={username}>
                </TextInput>
            </View>

            <View style={styles.containerBtn}>
                <SubmitButtonCenter name={'Update'} color={theme.foreground} onPress={() => {
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
