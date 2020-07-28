import React, {useContext, useEffect, useRef, useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView, ActivityIndicator, Dimensions, Image
} from 'react-native';
import CourseInfo from './course-info';
import {Icon} from 'react-native-elements';
import globalStyles from '../global/styles';
import ViewMoreText from 'react-native-view-more-text';

import LessonList from './lesson-list';
import {screenName} from '../global/constant';
import {AuthenticationContext, CoursesContext, ThemeContext} from "../../../App";
import VideoPlayer from "react-native-video-controls";
import iteduAPI from "../../API/iteduAPI";
import {Video} from "expo-av";
import YoutubePlayer from 'react-native-youtube-iframe';
import getYouTubeID from 'get-youtube-id';

//params: item: course
const CourseDetail = props => {
    const themeContext = useContext(ThemeContext);
    const authenContext = useContext(AuthenticationContext);
    const theme = themeContext.theme;
    const courseID = props.route.params.item;
    const [courseDetail, setCourseDetail] = useState([]);
    const [bookmarkedStatus, setBookmarkedStatus] = useState('');
    const [iconBookmarkName, setIconBookmarkName] = useState('');
    const [bookmarkText, setBookmarkText] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [isOwned, setOwn] = useState();
    const [video, setVideo] = useState([]);
    const [showVideo,setShowVideo] = useState(false)
    const [isYoutube, setYoutube] = useState(false)
    //const [videoRef] = useRef();
    useEffect(() => {
        iteduAPI.get(`/user/check-own-course/${courseID}`, {}, authenContext.authenState.token)
            .then((response) => {
                if (response.isSuccess) {
                    if (response.data.payload.isUserOwnCourse) {
                        setOwn(true)
                    }
                    else {
                        setOwn(false)
                    }
                }
            })

        iteduAPI.get(`/user/get-course-like-status/${courseID}`,{}, authenContext.authenState.token)
            .then((response) => {
                if (response.isSuccess){
                    setBookmarkedStatus(response.data.likeStatus);
                    if (bookmarkedStatus){
                        setIconBookmarkName('book');
                        setBookmarkText('Remove bookmark');
                    }
                    else {
                        setIconBookmarkName('bookmark');
                        setBookmarkText('Bookmark');
                    }
                }
            });
    }, [])
    useEffect(() => {
        if (isOwned === true) {
            iteduAPI.get(`/course/detail-with-lesson/${courseID}`, {}, authenContext.authenState.token)
                .then((response) => {
                    if (response.isSuccess) {
                        setCourseDetail(response.data.payload);
                    }
                    setLoading(false);
                });
        }
        else if (isOwned === false) {
            iteduAPI.get(`/course/get-course-info?id=${courseID}`, {}, authenContext.authenState.token)
                .then((response) => {
                    if (response.isSuccess) {
                        setCourseDetail(response.data.payload);
                    }
                    setLoading(false);
                });
        }
    }, [isOwned])

    const changeBookmarkStatus = () => {
        if (bookmarkedStatus){
            setBookmarkedStatus(false);
            iteduAPI.post('/user/like-course', {courseId: `${courseID}`}, authenContext.authenState.token)
                .then()
            setIconBookmarkName('bookmark');
            setBookmarkText('Bookmark');

        }else {
            setBookmarkedStatus(true);
            iteduAPI.post('/user/like-course', {courseId: `${courseID}`}, authenContext.authenState.token)
                .then()
            setIconBookmarkName('book');
            setBookmarkText('Remove bookmark');
        }
    }

    useEffect(()=>{
        if((video.videoUrl !== '')&&(video.videoUrl !== undefined)&&(video.videoUrl !== null)){
            setShowVideo(true);
            setYoutube(video.videoUrl.includes('youtu'))
        }
    },[video])

    if (isLoading) {
        return <View style={{flex: 1}}>
            <ActivityIndicator size={'large'} style={{flex: 1, alignContent: 'center'}}/>
        </View>
    }
    else {
    return (
        <View style={{flex: 1, backgroundColor: theme.background}}>
            {
                (showVideo === false) ?
                    <Image source={{uri: courseDetail.imageUrl}} style={{width: Dimensions.get('window').width, height: 300}} resizeMode={'contain'}/> :
                    (isYoutube) ?
                        <YoutubePlayer height={300}
                                       width={Dimensions.get('window').width}
                                       videoId={getYouTubeID(video.videoUrl)}
                                       play={true}
                                       /> :
                        <Video source={{uri: video.videoUrl}} rate={1.0}
                           volume={1.0}
                           isMuted={false}
                           resizeMode="cover"
                           shouldPlay
                           isLooping
                           style={{width: Dimensions.get('window').width, height: 300}}
                           useNativeControls={true}/>
            }
            <ScrollView  style={{flex: 3}}>
                <CourseInfo item={courseDetail} navigator={props.navigation}/>
                <View style={styles.containerOptionIcon}>
                    <TouchableOpacity style={{alignItems:'center'}} onPress={changeBookmarkStatus}>
                        <Icon name={iconBookmarkName} type={'material-icons'} size={30}
                              containerStyle={styles.containerIcon}/>
                        <Text style={[globalStyles.txtDefault, {color: theme.foreground}]}>{bookmarkText}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{margin: 10}}>
                    <ViewMoreText numberOfLines={3} textStyle={globalStyles.txtItalicSmall}>
                        <Text style={{color: theme.foreground, fontWeight: 'bold'}}>Description: </Text>
                        <Text style={{color: theme.foreground}}>{courseDetail.description} {'\n'}</Text>
                        <Text style={{color: theme.foreground, fontWeight: 'bold'}}>Content: {'\n'}</Text>
                        {
                            courseDetail.learnWhat.map(content => <Text style={{color: theme.foreground}}>{content} {'\n'}</Text>)
                        }
                        <Text style={{color: theme.foreground, fontWeight: 'bold'}}>Requirement: {'\n'}</Text>
                        {
                            courseDetail.requirement.map(req => <Text style={{color: theme.foreground}}>{req} {'\n'}</Text>)
                        }
                    </ViewMoreText>
                </View>
                {/*<View style={{margin: 10}}>
                    <TouchableOpacity style={styles.btnStretch} onPress={() => props.navigation.push(screenName.RelatedPathsAndCoursesScreen)}>
                        <Icon name={'flip-to-front'} type={'material-icons'}/>
                        <Text style={[globalStyles.txtDefault, {marginLeft: 10}]}>View related paths and courses</Text>
                    </TouchableOpacity>
                </View>*/}
                <LessonList item={courseDetail} setVideo={setVideo} navigator={props.route.params.navigator}/>
            </ScrollView>
        </View>
    );}
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
