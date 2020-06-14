import React, {useContext} from 'react';
import globalStyles from '../../global/styles';
import {color} from '../../global/constant';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import TopicButton from '../../global/commonComponent/topic-button';
import {ThemeContext} from "../../../../App";

const UserTopics = props => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    return (
        <View style={[globalStyles.containerTextButton, {borderColor: theme.foreground}]}>
            <Text style={[globalStyles.txtItalicDefault, styles.containerTxt, {color: theme.foreground}]}>Interest:</Text>
            <View style={styles.containerInterestIcon}>
                {
                    props.item.map(topic => <TopicButton item={topic} color={color.LIGHT_BLUE} navigator={props.navigator}/>)
                }
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    containerInterestIcon:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    containerTxt:{
        marginTop: 10
    }

});
export default UserTopics;
