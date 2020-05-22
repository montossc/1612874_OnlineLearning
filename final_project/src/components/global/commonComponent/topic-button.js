import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {screenName} from '../constant';

//props: name, color
const TopicButton = props => {
    const mainColor = props.color;
    return (
        <TouchableOpacity style={[styles.icon, {borderColor: mainColor}]} onPress={() => props.navigator.push(screenName.SubjectDetailScreen, {item: props.item})}>
            <Text style={[styles.txt, {color: mainColor}]}>{props.item.name}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    icon: {
        margin: 5,
        borderWidth: 1,
        borderRadius: 60,
        height: 30,
        justifyContent: 'center',
        alignItems:'center',
        padding: 10
    },
    txt:{
        fontSize: 12,
    }
});
export default TopicButton;
