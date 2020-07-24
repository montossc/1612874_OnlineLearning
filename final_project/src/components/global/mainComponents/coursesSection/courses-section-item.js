import React from 'react';
import {Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Rating} from 'react-native-elements';
import globalStyles from '../../styles';
import {color, screenName} from '../../constant';

//props: item: course
const CoursesSectionItem = props => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.navigator.push(screenName.CourseDetailScreen, {item: props.item.id})}>
            {
                (props.item.imageUrl) ?
                    <Image style={{flex: 1}} source={{uri: props.item.imageUrl}}/> :
                    <Image style={{flex: 1}} source={{uri: props.item.courseImage}}/>

            }
            <View style={styles.containerCourseInfo}>
                <Text style={[globalStyles.txtDefault,{flex:2}]}>{(props.item.title) ? props.item.title : props.item.courseTitle}</Text>
                <Text style={[globalStyles.txtItalicSmall,{flex:1}]}>{(props.item['instructor.user.name']) ? props.item['instructor.user.name'] : props.item.instructorName}</Text>
                {/*<Text style={[globalStyles.txtItalicSmall,{flex:1}]}>{`${props.item.levelRequirement} . ${props.item.releaseDate} . ${props.item.duration}`}</Text>*/}
                <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
                    <Rating readonly={true} tintColor={color.LIGHT_GRAY} imageSize={12} startingValue={(props.item.contentPoint) ? props.item.contentPoint : props.item.courseAveragePoint}/>
                    <Text style={[globalStyles.txtItalicSmall, {marginLeft: 5}]}>({(props.item.soldNumber) ? props.item.soldNumber : props.item.courseSoldNumber})</Text>
                </View>
                {
                    props.item.price != null ?
                        <Text style={[globalStyles.txtItalicSmall, styles.txtPrice]}>{props.item.price} VND</Text> :
                        props.item.coursePrice != null ?
                            <Text style={[globalStyles.txtItalicSmall, styles.txtPrice]}>{props.item.coursePrice} VND</Text> :
                            <Text style={[globalStyles.txtItalicSmall, {color: color.GREEN}]}> Your progress: {Math.round(props.item.process)} %</Text>
                }


            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container:{
        margin: 10,
        marginLeft: 0,
        flex: 1,
        height: 230,
        width: 230,
        backgroundColor: color.LIGHT_GRAY
    },
    containerCourseInfo:{
        flex: 1,
        margin: 10
    },
    txtPrice: {
        flex:1,
        color: color.LIGHT_RED,
        fontWeight: 'bold'
    }
});
export default CoursesSectionItem;
