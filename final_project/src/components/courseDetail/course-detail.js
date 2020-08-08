import React, {useContext, useEffect, useRef, useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView, ActivityIndicator, Dimensions, Image
} from 'react-native';

import {Icon} from 'react-native-elements';
import ViewMoreText from 'react-native-view-more-text';
import YoutubePlayer from 'react-native-youtube-iframe';
import getYouTubeID from 'get-youtube-id';
import {Video} from "expo-av";

import CourseInfo from './course-info';
import globalStyles from '../../globalVariables/styles';
import LessonList from './lesson-list';
import {AuthenticationContext, ThemeContext} from "../../../App";
import iteduAPI from "../../API/iteduAPI";
import {checkOwnedCourse, getCourseDetail, getCourseLikedStatus} from "../../core/services/courses-service";

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
                <CourseInfo courseDetail={courseDetail} navigator={props.navigation}/>
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
