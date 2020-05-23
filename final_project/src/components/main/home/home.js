import React from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import globalStyles from '../../global/styles';
import CoursesSection from '../../global/mainComponents/coursesSection/courses-section'
import {Avatar} from 'react-native-elements';
import {screenName} from '../../global/constant';
const Home = props => {
    const userInfo = {
        avatar: {uri: 'https://ephoto360.com/uploads/worigin/2020/03/23/tao-avatar-mac-dinh-facebook-thay-nen-cuc-hot5e7838ae39057_96eb8aef68a3aa00523448390b49fbcb.jpg'},
        fullname: 'Phan Thanh Nam',
        subscription: 'Yearly, expire at 15/05/2021',
        topics: ['React Native', 'Java', 'C#', 'Unity', 'Game Design'],
        username: 'montossc',
        password: '290398',
    };
    const welcomeText='Karueein is name of the firsr university in the world! With Karueein, you can build and apply skills in top technologies. Hope you enjoy this app!';
    const courseList = [
        {
            ID: 1,
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
            ID: 2,
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
            ID: 3,
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
            ID: 4,
            thumbnail:{uri: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-130726,resizemode-1,msid-72918780/code-decode-newer-challenges-for-professional-coders.jpg'},
            name: 'Spring: The Big Picture',
            author: 'Dustin Schultz',
            levelRequirement: 'Beginner',
            releaseDate: 'May 2018',
            duration: '1h 15m',
            star: 5,
            totalVote: 352
        }];
    const recommendFields = [
        {
            ID: 1,
            title: 'Software development',
            courses: courseList
        },
        {
            ID: 2,
            title: 'IT opearation',
            courses: courseList
        },
        {
            ID: 3,
            title: 'Data professinal',
            courses: courseList
        },
        {
            ID: 4,
            title: 'Security professional',
            courses: courseList
        }];
    props.navigation.setOptions({
        headerRight: () => (<View style={{flexDirection: 'row'}}>
            <Avatar rounded={true} source={userInfo.avatar} size={'small'}
                    onPress={() => props.navigation.navigate(screenName.ProfileScreen)}/>
        </View>)
    })
    return (
        <ScrollView style={globalStyles.container} showsVerticalScrollIndicator={false}>
            <Text style={globalStyles.txtItalicSmall}>Welcome to Karueein!</Text>
            <Text style={[globalStyles.txtDefault,{marginTop: 10}]}>{welcomeText}</Text>
            {
                recommendFields.map(field => <CoursesSection key={field.ID} title={field.title} item={field.courses} navigator={props.navigation}/>)

            }
        </ScrollView>
    );
};
export default Home;
