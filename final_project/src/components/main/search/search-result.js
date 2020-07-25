/*
import React from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import CoursesList from '../../global/mainComponents/coursesList/courses-list';
import PathList from '../../global/mainComponents/pathList/path-list';
import globalStyles from '../../global/styles';
import {Avatar} from 'react-native-elements';
import globalStyle from '../../global/styles';

const SearchResult = () => {
    const coursesResult = [
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
        }];
    const  pathsResult = [
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
    const authorsResult = [
        {
            name: 'Deborah Kurata',
            avatar: {uri: 'https://avatars2.githubusercontent.com/u/7987365?s=460&v=4'},
            courseNum: 137
        },
        {
            name: 'Scott Allen',
            avatar: {uri: 'https://pluralsight.imgix.net/author/lg/44cb43b3-83e4-4458-9b39-a7ded3411616.jpg'},
            courseNum: 10
        },
        {
            name: 'Deborah Kurata',
            avatar: {uri: 'https://avatars2.githubusercontent.com/u/7987365?s=460&v=4'},
            courseNum: 1
        },
        {
            name: 'Scott Allen',
            avatar: {uri: 'https://pluralsight.imgix.net/author/lg/44cb43b3-83e4-4458-9b39-a7ded3411616.jpg'},
            courseNum: 25
        }];
    return (
        <ScrollView>
            <CoursesList title={'Course'} outerBtn={'See all >'} item={coursesResult}/>
            <PathList title={'Paths'} outerBtn={'See all >'} item={pathsResult}/>
            <View style={[globalStyles.containerSection, {marginHorizontal: 10}]}>
                <View style={globalStyles.containerHeaderSection}>
                    <Text style={[globalStyles.txtDefault, {alignSelf: 'center'}]}>Authors</Text>
                    <TouchableOpacity style={globalStyles.btnOuterSection}>
                        <Text
                            style={[globalStyles.txtItalicSmall, {textDecorationLine: 'underline'}]}>See all ></Text>
                    </TouchableOpacity>
                </View>
                {
                    authorsResult.map(authorResult =>
                        <TouchableOpacity style={styles.container}>
                            <Avatar rounded={true} source={authorResult.avatar} size={'large'}/>
                            <View style={styles.containerAuthorInfo}>
                                <Text style={globalStyle.txtDefault}>{authorResult.name}</Text>
                                <Text style={globalStyles.txtItalicSmall}>{authorResult.courseNum} courses</Text>
                            </View>
                        </TouchableOpacity>)
                }
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        marginVertical: 5,
        flexDirection: 'row',
        flex: 1,
        paddingBottom: 10
    },
    containerAuthorInfo:{
        marginLeft: 10,
        flex: 3,
        alignSelf: 'center'
    },
});
export default SearchResult;
*/
