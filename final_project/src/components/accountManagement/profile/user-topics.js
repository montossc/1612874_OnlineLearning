import React from 'react';
import globalStyles from '../../global/styles';
import {color} from '../../global/constant';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import TopicButton from '../../global/commonComponent/topic-button';

const UserTopics = props => {
    return (
        <View style={globalStyles.containerTextButton}>
            <Text style={[globalStyles.txtItalicDefault, styles.containerTxt]}>Interest:</Text>
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
