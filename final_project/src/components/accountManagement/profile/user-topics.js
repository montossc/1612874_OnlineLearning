import React from 'react';
import globalStyles from '../../global/styles';
import global from '../../global/constant';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import TopicButton from '../../global/commonComponent/topic-button';

const UserTopics = props => {
    return (
        <View style={globalStyles.containerTextButton}>
            <Text style={[globalStyles.txtItalicDefault, styles.containerTxt]}>Interest:</Text>
            <View style={styles.containerInterestIcon}>
                {
                    props.item.map(topic => <TopicButton name={topic} color={global.color.LIGHT_BLUE}/>)
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
