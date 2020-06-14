import React, {useContext} from 'react';
import CoursesList from '../../global/mainComponents/coursesList/courses-list';
import {color, screenName} from '../../global/constant';
import {View} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import {CoursesContext, ThemeContext, UserProfileContext} from "../../../../App";

const Download = props => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const userProfileContext = useContext(UserProfileContext);
    const downloadedCourses = useContext(CoursesContext).downloadedCourses;
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
        <CoursesList title={''} outerBtn={''} item={downloadedCourses} navigator={props.navigation}/>

    );
};

export default Download;
