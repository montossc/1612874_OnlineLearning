import React, {useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CoursesSectionItem from './courses-section-item';
import globalStyles from '../../styles';
import {screenName} from '../../constant';
import {ThemeContext} from "../../../../../App";

//props: title, item: course list
const CoursesSection = props => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    return (
        <View style={globalStyles.containerSection}>
            <View style={globalStyles.containerHeaderSection}>
                <Text style={[globalStyles.txtDefault,{alignSelf:'center', color: theme.foreground}]}>{props.title}</Text>
                <TouchableOpacity style={globalStyles.btnOuterSection} onPress={() => props.navigator.push(screenName.CourseListScreen, {title: props.title, item: props.item, outerBtn: ''})}>
                    <Text style={[globalStyles.txtItalicSmall, {textDecorationLine:'underline', color: theme.foreground}]}>See all ></Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
                props.item.map(course => <CoursesSectionItem item={course} key={course.ID} navigator={props.navigator}></CoursesSectionItem>)
            }
            </ScrollView>
        </View>
    );
};

export default CoursesSection;
