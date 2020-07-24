import React, {cloneElement, useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import globalStyles from '../../global/styles';
import CoursesSection from '../../global/mainComponents/coursesSection/courses-section'
import {Avatar, Icon} from 'react-native-elements';
import {color, screenName} from '../../global/constant';
import {AuthenticationContext, CoursesContext, ThemeContext, UserProfileContext} from "../../../../App";
import iteduAPI from "../../../API/iteduAPI";

const Home = props => {
    const userProfileContext = useContext(UserProfileContext);
    const coursesContext = useContext(CoursesContext);
    const themeContext = useContext(ThemeContext);
    const authenContext = useContext(AuthenticationContext);
    const theme = themeContext.theme;
    const [isLoading, setLoading] = useState(true);

    const [topSellCourses, setTopSellCourses] = useState([]);
    const [topRatedCourses, setTopRatedCourses] = useState([]);
    const [processingCourses, setProcessingCourses] = useState([]);

    const welcomeText = 'Karueein is name of the firsr university in the world! With Karueein, you can build and apply skills in top technologies. Hope you enjoy this app!';

    useEffect(() => {
        iteduAPI.get('/user/get-favorite-courses', {}, authenContext.authenState.token)
            .then((response) => {
                if (response.isSuccess) {

                    coursesContext.setBookmarkedCourses(response.data.payload);
                }
            });
        iteduAPI.post('/course/top-sell', {limit: 10, page: 1})
            .then((response) => {

                if (response.isSuccess){

                    setTopSellCourses(response.data.payload);
                }
            });
        iteduAPI.post('/course/top-rate', {limit: 10, page: 1})
            .then((response) => {
                if (response.isSuccess){
                    setTopRatedCourses(response.data.payload);
                }
            })
        iteduAPI.get('/user/get-process-courses', {}, authenContext.authenState.token)
            .then((response) => {
                if (response.isSuccess){
                    setProcessingCourses(response.data.payload);
                }
            })
        if ((coursesContext.bookmarkedCourses != []) && (topSellCourses != []) && (topRatedCourses != []) && (processingCourses != [])){
            setLoading(false);
        }
    }, [])

    const recommendFields = [
        {
            ID: 1,
            title: 'Your bookmark',
            courses: coursesContext.bookmarkedCourses
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
                <Avatar rounded={true} source={userProfileContext.userProfile.avatar} size={'small'}
                        onPress={() => props.navigation.navigate(screenName.ProfileScreen)}/>
                <Icon containerStyle={{marginLeft: 150, marginRight: 10}} name={'settings'} type={'material-icons'} color={color.LIGHT_GRAY} onPress={() => props.navigation.navigate(screenName.SettingScreen)}/>
            </View>)
    })

    if (isLoading) {
        return <View style={{flex: 1}}>
            <ActivityIndicator size={'large'} style={{flex: 1, alignContent: 'center'}}/>
        </View>
    }
    else {
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
    }
};
export default Home;
