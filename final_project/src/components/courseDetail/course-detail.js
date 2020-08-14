import React, {useContext, useEffect, useRef, useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView, ActivityIndicator, Dimensions, Image, Share
} from 'react-native';

import {ButtonGroup, colors, Icon} from 'react-native-elements';
import ViewMoreText from 'react-native-view-more-text';
import YoutubePlayer from 'react-native-youtube-iframe';
import getYouTubeID from 'get-youtube-id';
import {Video} from "expo-av";

import CourseInfo from './course-info';
import globalStyles from '../../globalVariables/styles';
import LessonList from './lesson-list';
import {AuthenticationContext, ThemeContext} from "../../../App";
import iteduAPI from "../../API/iteduAPI";
import {
    checkOwnedCourse,
    getCourseDetail,
    getCourseLikedStatus, getLastWatchedLesson,
    getRalatedCourses
} from "../../core/services/courses-service";
import {color} from "../../globalVariables/constant";
import CourseRating from "./course-rating";
import CoursesList from "../mainComponents/coursesList/courses-list";
import {setVideoIsFinished, setVideoTime} from "../../core/services/video-service";

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
    const [isOwned, setOwn] = useState([]);
    const [curLessonID, setCurLessonID] = useState([]);
    const [video, setVideo] = useState([]);
    const [hadUpdatedTime, setHadUpdatedTime] = useState(false)
    const [showVideo,setShowVideo] = useState(false)
    const [isYoutube, setYoutube] = useState(false)
    const [buttonGroupID, setButtonGroupID] = useState(0);
    const [relatedCourses, setRelatedCourses] = useState([])
    const videoRef = useRef(null);

    useEffect(() => {
        checkOwnedCourse(courseID, authenContext.authenState.token).then(setOwn)
        getCourseLikedStatus(courseID, authenContext.authenState.token).then(setBookmarkedStatus)
    }, [])

    useEffect(() => {
        if (bookmarkedStatus){
            setIconBookmarkName('book');
            setBookmarkText('Remove bookmark');
        }
        else {
            setIconBookmarkName('bookmark');
            setBookmarkText('Bookmark');
        }
    }, [bookmarkedStatus])

    useEffect(() => {
        getCourseDetail(isOwned, courseID, authenContext.authenState.token).then((res) => {
            setCourseDetail(res.data)
            setLoading(res.loading)
        })
    }, [isOwned])

    useEffect(() => {
        if (courseDetail !== []) {
            getRalatedCourses(courseID, authenContext.authenState.token).then(setRelatedCourses)
            getLastWatchedLesson(courseID, authenContext.authenState.token).then((res) => {
                if(res.video.currentTime !== 0){
                    setCurLessonID(res.lessonId)
                    setVideo(res.video)
                }
            })
        }
    }, [courseDetail])
    useEffect(()=>{
        if((video.videoUrl !== '')&&(video.videoUrl !== undefined)&&(video.videoUrl !== null)){
            setShowVideo(true);
            setYoutube(video.videoUrl.includes('youtu'))
        }
    },[video])


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
    const shareCourse = async () => {
        try {
            const result = await Share.share({
                message: `https://itedu.me/course-detail/${courseID}`,
                url: `https://itedu.me/course-detail/${courseID}`
            });
        } catch (e) {
            alert(e.message)
        }
    }
    const setSelectedID = (id) => {
        setButtonGroupID(id)
    }

    const onChangeYoutubeVideoState = async (state) => {
        if (state === 'paused'){
            await videoRef.current.getCurrentTime().then((res) => {
                const curTime = Number((res).toFixed(0))
                if (curTime !== 0){
                    setVideoTime(curLessonID, curTime, authenContext.authenState.token).then()
                }
            })
        }
        else if (state === 'ended'){
           await setVideoIsFinished(curLessonID, authenContext.authenState.token).then()
        }
        else if (state === 'unstarted'){
            await videoRef.current.seekTo(video.currentTime, true)
        }
    }
    const onUpdateAVStatus = async (status) => {
        if (!status.isPlaying) {
            if (status.didJustFinish){
                await setVideoIsFinished(curLessonID, authenContext.authenState.token).then()
            }
            else if ((status.positionMillis !== '0') && (status.positionMillis !== status.durationMillis) && (!hadUpdatedTime)){
               await setVideoTime(curLessonID, status.positionMillis, authenContext.authenState.token).then(() => {
                   setHadUpdatedTime(true)
               })
            }
        }
        else {
            setHadUpdatedTime(false)
        }
    }

    const renderButtonGroupContent = () => {
        if (buttonGroupID === 0) {
            return (<LessonList item={courseDetail} setVideo={setVideo} curLessonID={curLessonID} setCurLessonID={setCurLessonID} navigator={props.route.params.navigator}/>)
        }
        if (buttonGroupID === 1) {
            return (<CourseRating courseDetail={courseDetail} token={authenContext.authenState.token}/> )
        }
        if (buttonGroupID === 2) {
            return (<CoursesList title={''} outerBtn={''} item={relatedCourses} topMargin={5} navigator={props.route.params.navigator}/>)
        }
    }
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
                    (isYoutube === true) ?
                        <YoutubePlayer ref={videoRef}
                                       height={300}
                                       width={Dimensions.get('window').width}
                                       videoId={getYouTubeID(video.videoUrl)}
                                       play={true}
                                       onChangeState={(state) => {onChangeYoutubeVideoState(state).then()}}
                                       /> :
                        <Video source={{uri: video.videoUrl}}
                               rate={1.0} volume={1.0} isMuted={false} resizeMode="cover"
                               shouldPlay isLooping
                               style={{width: Dimensions.get('window').width, height: 300}}
                               useNativeControls={true}
                               progressUpdateIntervalMillis={5000}
                               positionMillis={video.currentTime}
                               onPlaybackStatusUpdate={(stt) => {
                                    onUpdateAVStatus(stt).then()
                               }}
                        />
            }
            <ScrollView  style={{flex: 3}}>
                <CourseInfo courseDetail={courseDetail} navigator={props.navigation}/>
                <View style={styles.containerOptionIcon}>
                    <TouchableOpacity style={{alignItems:'center'}} onPress={changeBookmarkStatus}>
                        <Icon name={iconBookmarkName} type={'material-icons'} size={30}
                              containerStyle={styles.containerIcon}/>
                        <Text style={[globalStyles.txtDefault, {color: theme.foreground}]}>{bookmarkText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center'}} onPress={() => {shareCourse().then()}}>
                        <Icon name={'share'} type={'material-icons'} size={30}
                              containerStyle={styles.containerIcon}/>
                        <Text style={[globalStyles.txtDefault, {color: theme.foreground}]}>Share</Text>
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
                <ButtonGroup  buttons={['CONTENTS', 'RATING', 'COURSES LIKE THIS']} onPress={setSelectedID} selectedIndex={buttonGroupID} selectedButtonStyle={{backgroundColor: color.LIGHT_BLUE}}/>
                {renderButtonGroupContent()}
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
