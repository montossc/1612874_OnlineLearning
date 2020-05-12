import React from 'react';
import globalStyles from '../../global/styles';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const UserTopics = props => {
    return (
        <View style={[globalStyles.listHideButton, {marginTop:10, marginBottom:10}]}>
            <Text style={[globalStyles.txtDefault, {fontStyle: 'italic'}]}>Interest:</Text>
            <View style={styles.containerInterest}>
                {
                    props.item.topics.map(topic =>
                        <TouchableOpacity style={styles.iconInterest}>
                            <Text style={styles.txtInterest}>{topic}</Text>
                        </TouchableOpacity>)
                }
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    containerInterest:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    iconInterest: {
        margin: 5,
        borderWidth: 2,
        borderRadius: 60,
        height: 40,
        borderColor: 'rgba(55,190,245,0.7)',
        justifyContent: 'center',
        alignItems:'center',
        padding: 10
    },
    txtInterest:{
        fontSize: 15,
        color: 'rgba(55,190,245,0.7)',
    }
});
export default UserTopics;
