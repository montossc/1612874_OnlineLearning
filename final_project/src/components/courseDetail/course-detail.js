import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CourseInfo from './course-info';
import {Icon} from 'react-native-elements';
import globalStyles from '../global/styles';
import ViewMoreText from 'react-native-view-more-text';

import LessonList from './lesson-list';
import {screenName} from '../global/constant';
import {CoursesContext, ThemeContext} from "../../../App";
import VideoPlayer from "react-native-video-controls";

//params: item: course
const CourseDetail = props => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
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
    const coursesContext = useContext(CoursesContext);
    const [iconBookmarkName, setIconBookmarkName] = useState(course.bookmarked === true ? 'book' : 'bookmark');
    const [bookmarkText, setBookmarkText] = useState(course.bookmarked === true ? 'Remove bookmark' : 'Bookmark');
    const [iconDownloadName, setIconDownloadName] = useState(course.downloaded === true ? 'remove-from-queue' : 'cloud-download');
    const [downloadText, setDownloadText] = useState(course.downloaded === true ? 'Remove from device' : 'Download');

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
    const changeBookmarkStatus = () => {
        if (course.bookmarked ===true){
            course.bookmarked = false;
            setIconBookmarkName('bookmark');
            setBookmarkText('Bookmark');

        }else {
            course.bookmarked = true;
            coursesContext.bookmarkedCourses.push(course);

            setIconBookmarkName('book');
            setBookmarkText('Remove bookmark');
        }
    }

    const changeDownloadStatus = () => {
        if (course.downloaded === true){
            course.downloaded = false;
            setIconDownloadName('cloud-download');
            setDownloadText('Download');
        } else {
            course.bookmarked = true;
            coursesContext.downloadedCourses.push(course);

            setIconDownloadName('remove-from-queue');
            setDownloadText('Remove from device');
        }
    }

    /*useEffect(() => {
        for (let i = 0; i < coursesContext.bookmarkedCourses.length; i++)
        {
            const index = coursesContext.allCourses.findIndex(element => element.ID === coursesContext.bookmarkedCourses[i]);
            if (index) {
                coursesContext.allCourses[index].bookmarked = coursesContext.bookmarkedCourses[i].bookmarked;
            }
        }
    }, [coursesContext.bookmarkedCourses])*/
    return (
        <ScrollView style={{flex: 1, backgroundColor: theme.background}}>
            {/*<VideoPlayer source={{uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
                         navigator={props.navigation}
                         onBack={() => props.navigation.goBack()}/>*/}
            <View style={{flex: 3}}>
                <CourseInfo item={courseInfo} navigator={props.navigation}/>
                <View style={styles.containerOptionIcon}>
                    <TouchableOpacity style={{alignItems:'center'}} onPress={changeBookmarkStatus}>
                        <Icon name={iconBookmarkName} type={'material-icons'} size={30}
                              containerStyle={styles.containerIcon}/>
                        <Text style={[globalStyles.txtDefault, {color: theme.foreground}]}>{bookmarkText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center'}} onPress={changeDownloadStatus}>
                        <Icon name={iconDownloadName} type={'material-icons'} size={30}
                              containerStyle={styles.containerIcon}/>
                        <Text style={[globalStyles.txtDefault, {color: theme.foreground}]}>{downloadText}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{margin: 10}}>
                    <ViewMoreText numberOfLines={3} textStyle={globalStyles.txtItalicSmall}>
                        <Text style={{color: theme.foreground}}>This is demo text. This is demo text. This is demo text. This is demo text. This is demo
                            text. This is demo text. This is demo text. This is demo text. This is demo text. This is
                            demo text. This is demo text. This is demo text. This is demo text. This is demo text. This
                            is demo text. This is demo text. This is demo text. </Text>
                    </ViewMoreText>
                </View>
                <View style={{margin: 10}}>
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
    },
    containerOptionIcon: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
    },
    containerIcon: {
        backgroundColor: 'lightgray',
        borderRadius: 90,
        padding: 5
    },
});
export default CourseDetail;
