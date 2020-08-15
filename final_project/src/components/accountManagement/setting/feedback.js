import React, {useContext, useState} from "react";
import {KeyboardAvoidingView, ScrollView, Text, View, StyleSheet} from "react-native";

import {AuthenticationContext, ThemeContext} from "../../../../App";
import InputBox from "../../commonComponents/input-box";
import SubmitButtonCenter from "../../commonComponents/submit-button-center";
import {sendFeedback} from "../../../core/services/setting-service";
import {color} from "../../../globalVariables/constant";

const Feedback = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [mess, setMess] = useState('')
    const authenContext = useContext(AuthenticationContext)
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;

    const onSendFeedback = () => {
        sendFeedback(title, content, authenContext.authenState.token).then(setMess)
    }

    return (
        <KeyboardAvoidingView behavior={'height'} style={[styles.container, {backgroundColor: theme.background}]}>
            <ScrollView style={{marginTop: 20}}>
                <View style={styles.block}>
                    <Text style={[styles.txt, {color: theme.foreground}]}>Subject</Text>
                    <InputBox placeholder={'Subject'} secureText={false} value={title} changeTextEvent={text => setTitle(text)}/>

                </View>
                <View style={styles.block}>
                    <Text style={[styles.txt, {color: theme.foreground}]}>Content</Text>
                    <InputBox placeholder={'Content'} secureText={false} value={content} changeTextEvent={text => setContent(text)} multiline={true}/>
                </View>
                <Text style={styles.txtWarningStatus}>{mess}</Text>
                <View style={styles.containerBtn}>
                    <SubmitButtonCenter name={'Send!'} color={theme.foreground} onPress={onSendFeedback}/>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    container: {
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
    },
    txtWarningStatus: {
        color: color.LIGHT_RED,
        marginLeft: 50
    }
});
export default Feedback;
