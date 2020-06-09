import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CourseInfo from './course-info';
/*import VideoPlayer from 'react-native-video-controls';*/
import {Icon} from 'react-native-elements';
import globalStyles from '../global/styles';
import ViewMoreText from 'react-native-view-more-text';
import CourseOptionIcon from './course-option-icon';
import LessonList from './lesson-list';
import {screenName} from '../global/constant';

//params: item: course
const CourseDetail = props => {
    const course = props.route.params.item;
    const courseInfo = {
        name: course.name,
        authors: [{ID:1, name: 'Joe Eames', avatar: {uri: 'https://pluralsight.imgix.net/author/lg/joe-eames-v1.jpg?w=200'}},
            {ID: 2, name: 'Jim Cooper', avatar: {uri: 'https://pluralsight.imgix.net/author/lg/jim-cooper-v1.jpg?w=200'}}],
        levelRequirement: course.levelRequirement,
        releaseDate: course.releaseDate,
        duration: course.duration,
        star: course.star,
        totalVote: course.totalVote,
    };
    const lessons = [
        {
            name: 'Course Overview',
            totalTime: '2:04',
            contentList: [{name: 'Course Overview', time: '2:04'}],
        },
        {
            name: 'Getting Started with Angular',
            totalTime: '38:45',
            contentList: [{name: 'Introduction', time: '2:55'}, {
                name: 'Practise Exercises',
                time: '3:25',
            }, {name: 'Introduction', time: '2:55'}, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }, {name: 'Practise Exercises', time: '3:25'}],
        },
        {
            name: 'Creating and Communcating Between Angular Components',
            totalTime: '38:45',
            contentList: [{name: 'Introduction', time: '2:55'}, {
                name: 'Practise Exercises',
                time: '3:25',
            }, {name: 'Introduction', time: '2:55'}, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }, {name: 'Practise Exercises', time: '3:25'}],
        },
        {
            name: 'Angular Template Syntax',
            totalTime: '38:45',
            contentList: [{name: 'Introduction', time: '2:55'}, {
                name: 'Practise Exercises',
                time: '3:25',
            }, {name: 'Introduction', time: '2:55'}, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }, {name: 'Practise Exercises', time: '3:25'}],
        },
        {
            name: 'Creating Reusable Angular Services',
            totalTime: '38:45',
            contentList: [{name: 'Introduction', time: '2:55'}, {
                name: 'Practise Exercises',
                time: '3:25',
            }, {name: 'Introduction', time: '2:55'}, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }, {name: 'Practise Exercises', time: '3:25'}],
        },
    ];
    return (
        <ScrollView style={{flex: 1}}>
           {/* <VideoPlayer source={{uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
                         navigator={props.navigation}
                         onBack={() => props.navigation.goBack()}/>*/}
            <View style={{flex: 3}}>
                <CourseInfo item={courseInfo} navigator={props.navigation}/>
                <CourseOptionIcon/>
                <View style={{margin: 10}}>
                    <ViewMoreText numberOfLines={3} textStyle={globalStyles.txtItalicSmall}>
                        <Text>This is demo text. This is demo text. This is demo text. This is demo text. This is demo
                            text. This is demo text. This is demo text. This is demo text. This is demo text. This is
                            demo text. This is demo text. This is demo text. This is demo text. This is demo text. This
                            is demo text. This is demo text. This is demo text. </Text>
                    </ViewMoreText>
                </View>
                <View style={{margin: 10}}>
                    <TouchableOpacity style={styles.btnStretch}>
                        <Icon name={'assignment-turned-in'} type={'material-icons'}/>
                        <Text style={[globalStyles.txtDefault, {marginLeft: 10}]}>Take a learning check</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStretch} onPress={() => props.navigation.push(screenName.RelatedPathsAndCoursesScreen)}>
                        <Icon name={'flip-to-front'} type={'material-icons'}/>
                        <Text style={[globalStyles.txtDefault, {marginLeft: 10}]}>View related paths and courses</Text>
                    </TouchableOpacity>
                </View>
                <LessonList item={lessons}/>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    btnStretch:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        padding: 5,
        marginBottom: 10
    }
});
export default CourseDetail;
