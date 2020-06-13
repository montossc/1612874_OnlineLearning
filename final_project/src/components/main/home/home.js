import React, {cloneElement, useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import globalStyles from '../../global/styles';
import CoursesSection from '../../global/mainComponents/coursesSection/courses-section'
import {Avatar, Icon} from 'react-native-elements';
import {color, screenName} from '../../global/constant';
import {CoursesContext, ThemeContext, UserProfileContext} from "../../../../App";

const Home = props => {
    const userProfileContext = useContext(UserProfileContext);
    const coursesContext = useContext(CoursesContext);
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const welcomeText = 'Karueein is name of the firsr university in the world! With Karueein, you can build and apply skills in top technologies. Hope you enjoy this app!';
    const courseList = coursesContext.allCourses;
    const bookmarkedCoursesList = coursesContext.bookmarkedCourses;
    const recommendFields = [
        {
            ID: 1,
            title: 'Your bookmark',
            courses: bookmarkedCoursesList
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
        headerStyle: {backgroundColor: theme.background},
        headerTitleStyle: {color: theme.foreground},
        headerRight: () => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Avatar rounded={true} source={userProfileContext.userProfile.avatar} size={'small'}
                        onPress={() => props.navigation.navigate(screenName.ProfileScreen)}/>
                <Icon containerStyle={{marginLeft: 150, marginRight: 10}} name={'settings'} type={'material-icons'} color={color.LIGHT_GRAY} onPress={() => props.navigation.navigate(screenName.SettingScreen)}/>
            </View>)
    })
    return (
        <ScrollView style={[globalStyles.container, {backgroundColor: theme.background}]}
                    showsVerticalScrollIndicator={false}>
            <Text style={[globalStyles.txtItalicSmall, {color: theme.foreground}]}>Welcome to Karueein!</Text>
            <Text style={[globalStyles.txtDefault, {marginTop: 10, color: theme.foreground}]}>{welcomeText}</Text>
            {
                recommendFields.map(field => <CoursesSection key={field.ID} title={field.title} item={field.courses}
                                                             navigator={props.navigation}/>)

            }
        </ScrollView>
    );
};
export default Home;
