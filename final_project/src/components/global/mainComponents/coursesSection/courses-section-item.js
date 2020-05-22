import React from 'react';
import {Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Rating} from 'react-native-elements';
import globalStyles from '../../styles';
import {color, screenName} from '../../constant';

//props: item: course
const CoursesSectionItem = props => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.navigator.push(screenName.CourseDetailScreen, {item: props.item})}>
            <Image style={{flex: 1}} source={props.item.thumbnail}/>
            <View style={styles.containerCourseInfo}>
                <Text style={[globalStyles.txtDefault,{flex:1}]}>{props.item.name}</Text>
                <Text style={[globalStyles.txtItalicSmall,{flex:1}]}>{props.item.author}</Text>
                <Text style={[globalStyles.txtItalicSmall,{flex:1}]}>{`${props.item.levelRequirement} . ${props.item.releaseDate} . ${props.item.duration}`}</Text>
                <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
                    <Rating readonly={true} tintColor={color.LIGHT_GRAY} imageSize={12} startingValue={props.item.star}/>
                    <Text style={[globalStyles.txtItalicSmall, {marginLeft: 5}]}>({props.item.totalVote})</Text>
                </View>
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
        backgroundColor: color.LIGHT_GRAY
    },
    containerCourseInfo:{
        flex: 1,
        margin: 10
    }
});
export default CoursesSectionItem;
