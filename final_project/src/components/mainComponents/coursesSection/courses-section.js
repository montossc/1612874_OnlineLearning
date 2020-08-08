import React, {useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import CoursesSectionItem from './courses-section-item';
import globalStyles from '../../../globalVariables/styles';
import {screenName} from '../../../globalVariables/constant';
import {ThemeContext} from "../../../../App";

const CoursesSection = ({title, courses, navigator}) => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const isEmpty = (courses.length === 0);

    if (isEmpty === true) {
        return(<View></View>);
    }
    else {
    return (
        <View style={globalStyles.containerSection}>
            <View style={globalStyles.containerHeaderSection}>
                <Text style={[globalStyles.txtDefault,{alignSelf:'center', color: theme.foreground}]}>{title}</Text>
                <TouchableOpacity style={globalStyles.btnOuterSection} onPress={() => navigator.push(screenName.CourseListScreen, {title: title, item: courses, outerBtn: ''})}>
                    <Text style={[globalStyles.txtItalicSmall, {textDecorationLine:'underline', color: theme.foreground}]}>See all ></Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
                courses.map(course => <CoursesSectionItem courseInformation={course} navigator={navigator}></CoursesSectionItem>)
            }
            </ScrollView>
        </View>
    );
    }
};

export default CoursesSection;
