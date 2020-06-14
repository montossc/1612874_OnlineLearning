import React, {useContext} from 'react';
import {ScrollView} from 'react-native';
import globalStyles from '../global/styles';
import PathSection from '../global/mainComponents/pathSection/path-section';
import CoursesList from '../global/mainComponents/coursesList/courses-list';
import CoursesSection from '../global/mainComponents/coursesSection/courses-section';
import AuthorsSection from '../global/mainComponents/authorsSection/authors-section';
import {ThemeContext} from "../../../App";
//params: item: subject,
const SubjectDetail = props => {
    const subPaths = [
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
    const subCourses = [
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
    const authors = [
        {
            name: 'Deborah Kurata',
            avatar: {uri: 'https://avatars2.githubusercontent.com/u/7987365?s=460&v=4'}
        },
        {
            name: 'Scott Allen',
            avatar: {uri: 'https://pluralsight.imgix.net/author/lg/44cb43b3-83e4-4458-9b39-a7ded3411616.jpg'}
        },
        {
            name: 'Deborah Kurata',
            avatar: {uri: 'https://avatars2.githubusercontent.com/u/7987365?s=460&v=4'}
        },
        {
            name: 'Scott Allen',
            avatar: {uri: 'https://pluralsight.imgix.net/author/lg/44cb43b3-83e4-4458-9b39-a7ded3411616.jpg'}
        },
        {
            name: 'Deborah Kurata',
            avatar: {uri: 'https://avatars2.githubusercontent.com/u/7987365?s=460&v=4'}
        },
        {
            name: 'Scott Allen',
            avatar: {uri: 'https://pluralsight.imgix.net/author/lg/44cb43b3-83e4-4458-9b39-a7ded3411616.jpg'}
        },
        {
            name: 'Deborah Kurata',
            avatar: {uri: 'https://avatars2.githubusercontent.com/u/7987365?s=460&v=4'}
        },
        {
            name: 'Scott Allen',
            avatar: {uri: 'https://pluralsight.imgix.net/author/lg/44cb43b3-83e4-4458-9b39-a7ded3411616.jpg'}
        }
    ];
    let subName = props.route.params.item.name;
    props.navigation.setOptions({title: subName});
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    return (
        <ScrollView style={[globalStyles.container, {backgroundColor: theme.background, flex: 1}]}>
            <PathSection title={`Paths in ${subName}`} item={subPaths} navigator={props.navigation}/>
            <CoursesSection title={`New in ${subName}`} item={subCourses} navigator={props.navigation}/>
            <CoursesSection title={`Trending in ${subName}`} item={subCourses} navigator={props.navigation}/>
            <AuthorsSection title={`Top authors in ${subName}`} item={authors} navigator={props.navigation}/>
        </ScrollView>
    );
};

export default SubjectDetail;
