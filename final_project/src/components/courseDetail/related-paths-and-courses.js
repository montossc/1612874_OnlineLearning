import React from 'react';
import CoursesList from '../mainComponents/coursesList/courses-list';
import {ScrollView} from 'react-native';
import globalStyles from '../../globalVariables/styles';

const RelatedPathsAndCourses = props => {
    const relaPaths = [
        {
            name: 'Node.js Developer on Microsoft Azure',
            thumbnail: {uri:'https://www.logitech.com/content/dam/logitech/vc/en/rightsense/logos/microsoft.png.imgo.png'},
            courseNum: 3
        },
        {
            name: 'Salesforce Certified Administrator',
            thumbnail: {uri:'https://cdn.magenest.com/wp-content/uploads/2019/08/CRM-Salesforce-Logo-1200x840.png'},
            courseNum: 10
        },
        {
            name: 'Design Patterns in C#',
            thumbnail: {uri:'https://st.quantrimang.com/photos/image/2019/03/11/ly-do-hoc-csharp-1.jpg'},
            courseNum: 15
        },
        {
            name: 'Building Web Application with Blazor',
            thumbnail: {uri:'https://danpatrascu.com/wp-content/uploads/2019/05/blazorms-675x360.jpg'},
            courseNum: 6
        }
    ];
    const relaCourses = [
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

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={globalStyles.container}>
        <CoursesList title={'Courses'} outerBtn={''} item={relaCourses} navigator={props.navigation}/>
        </ScrollView>
    );
};

export default RelatedPathsAndCourses;
