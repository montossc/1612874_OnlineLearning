import React from 'react';
import {Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Rating} from 'react-native-elements';
import globalStyles from '../../../globalVariables/styles';
import {color, screenName} from '../../../globalVariables/constant';

const CoursesSectionItem = ({navigator, courseInformation}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigator.push(screenName.CourseDetailScreen, {
            item: courseInformation.id,
            navigator: navigator
        })}>
            {
                (courseInformation.imageUrl) ?
                    <Image style={{flex: 1}} source={{uri: courseInformation.imageUrl}}/> :
                    <Image style={{flex: 1}} source={{uri: courseInformation.courseImage}}/>

            }
            <View style={styles.containerCourseInfo}>
                <Text
                    style={[globalStyles.txtDefault, {flex: 2}]}>{(courseInformation.title) ? courseInformation.title : courseInformation.courseTitle}</Text>
                <Text
                    style={[globalStyles.txtItalicSmall, {flex: 1}]}>{(courseInformation['instructor.user.name']) ? courseInformation['instructor.user.name'] : courseInformation.instructorName}</Text>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <Rating readonly={true} tintColor={color.LIGHT_GRAY} imageSize={12}
                            startingValue={(courseInformation.contentPoint) ? courseInformation.contentPoint : courseInformation.courseAveragePoint}/>
                    <Text
                        style={[globalStyles.txtItalicSmall, {marginLeft: 5}]}>({(courseInformation.soldNumber) ? courseInformation.soldNumber : courseInformation.courseSoldNumber})</Text>
                </View>
                {
                    courseInformation.price != null ?
                        <Text
                            style={[globalStyles.txtItalicSmall, styles.txtPrice]}>{courseInformation.price} VND</Text> :
                        courseInformation.coursePrice != null ?
                            <Text
                                style={[globalStyles.txtItalicSmall, styles.txtPrice]}>{courseInformation.coursePrice} VND</Text> :
                            <Text style={[globalStyles.txtItalicSmall, {color: color.GREEN}]}> Your
                                progress: {Math.round(courseInformation.process)} %</Text>
                }
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginLeft: 0,
        flex: 1,
        height: 230,
        width: 230,
        backgroundColor: color.LIGHT_GRAY
    },
    containerCourseInfo: {
        flex: 1,
        margin: 10
    },
    txtPrice: {
        flex: 1,
        color: color.LIGHT_RED,
        fontWeight: 'bold'
    }
});
export default CoursesSectionItem;
