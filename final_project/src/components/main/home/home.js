import React, {useContext, useEffect, useState} from 'react';
import {Text, ScrollView, View, ActivityIndicator} from 'react-native';

import {Avatar, Icon} from 'react-native-elements';

import globalStyles from '../../../globalVariables/styles';
import CoursesSection from '../../mainComponents/coursesSection/courses-section'
import {color, screenName} from '../../../globalVariables/constant';
import {
    AuthenticationContext,
    ThemeContext,
    UserAvatarContext,
} from "../../../../App";
import {
    getBookmarkedCourses,
    getProcessingCourses,
    getTopRatedCourse,
    getTopSellCourses
} from "../../../core/services/courses-service";

const Home = props => {
        const userAvatarContext = useContext(UserAvatarContext);
        const themeContext = useContext(ThemeContext);
        const authenContext = useContext(AuthenticationContext);
        const theme = themeContext.theme;
        const [isLoading, setLoading] = useState(true);
        const [bookmarkedCourses, setBookmarkedCourses] = useState([])
        const [topSellCourses, setTopSellCourses] = useState([]);
        const [topRatedCourses, setTopRatedCourses] = useState([]);
        const [processingCourses, setProcessingCourses] = useState([]);

        const welcomeText = 'Karueein is name of the firsr university in the world! With Karueein, you can build and apply skills in top technologies. Hope you enjoy this app!';

        useEffect(() => {
            getBookmarkedCourses(authenContext.authenState.token).then(setBookmarkedCourses)
            getTopSellCourses().then(setTopSellCourses)
            getTopRatedCourse().then(setTopRatedCourses)
            getProcessingCourses(authenContext.authenState.token).then(setProcessingCourses)

        }, [])

        useEffect(() => {
                if ((topSellCourses !== undefined) && (topRatedCourses !== undefined)) {
                    if ((topSellCourses.length !== 0) && (topRatedCourses.length !== 0)) {
                        setLoading(false);
                    }
                }
            }, [topSellCourses, topRatedCourses]
        )

        const recommendFields = [
            {
                ID: 1,
                title: 'Your bookmark',
                courses: bookmarkedCourses
            },
            {
                ID: 2,
                title: 'Continue learning',
                courses: processingCourses
            },
            {
                ID: 3,
                title: 'Best sellers',
                courses: topSellCourses
            },
            {
                ID: 4,
                title: 'Top-rated courses',
                courses: topRatedCourses
            }];
        props.navigation.setOptions({
            headerStyle: {backgroundColor: theme.background},
            headerTitleStyle: {color: theme.foreground},
            headerRight: () => (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Avatar rounded={true} source={{uri: userAvatarContext.userAvatar}} size={'small'}
                            onPress={() => props.navigation.navigate(screenName.ProfileScreen)}/>
                    <Icon containerStyle={{marginLeft: 150, marginRight: 10}} name={'settings'} type={'material-icons'}
                          color={color.LIGHT_GRAY} onPress={() => props.navigation.navigate(screenName.SettingScreen)}/>
                </View>)
        })

        if (isLoading) {
            return <View style={{flex: 1}}>
                <ActivityIndicator size={'large'} style={{flex: 1, alignContent: 'center'}}/>
            </View>
        } else {
            return (
                <ScrollView style={[globalStyles.container, {backgroundColor: theme.background}]}
                            showsVerticalScrollIndicator={false}>
                    <Text style={[globalStyles.txtItalicSmall, {color: theme.foreground}]}>Welcome to Karueein!</Text>
                    <Text style={[globalStyles.txtDefault, {marginTop: 10, color: theme.foreground}]}>{welcomeText}</Text>
                    {
                        recommendFields.map(field => <CoursesSection title={field.title} courses={field.courses}
                                                                     navigator={props.navigation}/>)

                    }
                </ScrollView>
            );
        }
    }
;
export default Home;
