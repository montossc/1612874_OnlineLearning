import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import globalStyles from '../../styles';
import {screenName} from '../../constant';

//props: item: path
const PathListItem = props => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.navigator.push(screenName.PathDetailScreen, {item: props.item})}>
            <Image style={styles.imgThumbnail} source={props.item.thumbnail}/>
            <View style={styles.containerPathInfo}>
                <Text style={globalStyles.txtDefault}>{props.item.name}</Text>
                <Text style={globalStyles.txtItalicSmall}>{props.item.courseNum} courses</Text>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container:{
        borderBottomWidth: 1,
        marginVertical: 5,
        flexDirection: 'row',
        flex: 1,
        paddingBottom: 10
    },
    containerPathInfo:{
        marginLeft: 10,
        flex: 3,
        alignSelf: 'center'
    },
    imgThumbnail:{
        flex: 1,
        resizeMode:'contain'
    }
});

export default PathListItem;
