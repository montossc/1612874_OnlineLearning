import React from 'react';
import globalStyles from '../global/styles';
import {Text, View, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';
import ViewMoreText from 'react-native-view-more-text';
//import ProgressBar from 'react-native-progress/Bar';
import CoursesList from '../global/mainComponents/coursesList/courses-list';

const PathDetail = props => {
    let path = props.route.params.item;
    const pathInfo = {
        name: path.name,
        thumbnail: path.thumbnail,
        courseNum: path.courseNum,
        totalTime: 7,
        description: 'This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. This is demo text. ',
        progress: 20,
    };
    const coursesInList = [
        {
            thumbnail:{uri: 'https://www.mcreelearningcenter.com/blog/wp-content/uploads/2016/07/cpc_certified_professional_medical_coder.jpg'},
            name: 'Angular Fundamentals',
            author: 'Joe Eames',
            levelRequirement: 'Intermediate',
            releaseDate: 'Feb 2019',
            duration: '9h 35m',
            star: 4.5,
            totalVote: 819,
        },
        {
            thumbnail: {uri:'https://c8.alamy.com/comp/KHRM9N/back-view-of-highly-professional-coder-looking-at-wristwatch-while-KHRM9N.jpg'},
            name: 'C# Fundamentals',
            author: 'Scott Allen',
            levelRequirement: 'Beginner',
            releaseDate: 'Apr 2019',
            duration: '6h 5m',
            star: 4.5,
            totalVote: 446,
        },
        {
            thumbnail:{uri: 'https://inteng-storage.s3.amazonaws.com/img/iea/nZwX0xjxwv/sizes/coder_resize_md.jpg'},
            name: 'Managing AWS Operation',
            author: 'Andru Estes',
            levelRequirement: 'Intermediate',
            releaseDate: 'May 2019',
            duration: '3h 3m',
            star: 4,
            totalVote: 13,
        },
        {
            thumbnail:{uri: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-130726,resizemode-1,msid-72918780/code-decode-newer-challenges-for-professional-coders.jpg'},
            name: 'Spring: The Big Picture',
            author: 'Dustin Schultz',
            levelRequirement: 'Beginner',
            releaseDate: 'May 2018',
            duration: '1h 15m',
            star: 5,
            totalVote: 352
        }];
    return (
        <View style={globalStyles.container}>
            <View style={styles.containerPathInfo}>
                <Avatar size={'large'} source={pathInfo.thumbnail}/>
                <View style={styles.containerPathName}>
                    <Text style={globalStyles.txtTitle}>{pathInfo.name}</Text>
                    <Text style={globalStyles.txtDefault}>{pathInfo.courseNum} courses  .  {pathInfo.totalTime} hours</Text>
                </View>
            </View>
            <ViewMoreText numberOfLines={3} textStyle={globalStyles.txtItalicSmall} style={{paddingVertical: 10}}>
                <Text>{pathInfo.description}</Text>
            </ViewMoreText>
            <View style={{paddingVertical:10}}>
                <Text style={globalStyles.txtDefault}>Your Progress: {pathInfo.progress}%</Text>
                {/*<ProgressBar progress={pathInfo.progress/100} width={200} color={'rgba(55,190,245,0.7)'}/>*/}
            </View>
            <CoursesList title={'Demo'} item={coursesInList} navigator={props.navigation}/>
        </View>
    );
};
const styles = StyleSheet.create({
    containerPathInfo:{
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center'
    },
    containerPathName:{
        marginLeft: 10
    }
});
export default PathDetail;
