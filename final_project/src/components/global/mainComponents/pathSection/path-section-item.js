import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import globalStyles from '../../styles';
import {screenName} from '../../constant';

//props: item: path
const PathSectionItem = props => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.navigator.push(screenName.PathDetailScreen, {item: props.item})}>
            <Image style={{flex: 1}} source={props.item.thumbnail}/>
            <View style={styles.containerPathInfo}>
                <Text style={globalStyles.txtDefault}>{props.item.name}</Text>
                <Text style={globalStyles.txtItalicSmall}>{props.item.courseNum} courses</Text>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container:{
        margin: 10,
        marginLeft: 0,
        flex: 1,
        height: 200,
        width: 200,
        backgroundColor: '#b5b9b7'
    },
    containerPathInfo:{
        flex: 1,
        margin: 10
    }
});
export default PathSectionItem;
