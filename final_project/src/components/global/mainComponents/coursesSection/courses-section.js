import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CoursesSectionItem from './courses-section-item';
import globalStyles from '../../styles';

//props: title, item: course list
const CoursesSection = props => {
    return (
        <View style={globalStyles.containerSection}>
            <View style={globalStyles.containerHeaderSection}>
                <Text style={[globalStyles.txtDefault,{alignSelf:'center'}]}>{props.title}</Text>
                <TouchableOpacity style={globalStyles.btnOuterSection}>
                    <Text style={[globalStyles.txtItalicSmall, {textDecorationLine:'underline'}]}>See all ></Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
                props.item.map(course => <CoursesSectionItem item={course}></CoursesSectionItem>)
            }
            </ScrollView>
        </View>
    );
};

export default CoursesSection;
