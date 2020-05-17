import React from 'react';
import globalStyles from '../../styles';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import CoursesListItem from './courses-list-item';

//props: title, outerBtn: button near the title, item: list of courses
const CoursesList = props => {
    return (
        <View style={[globalStyles.containerSection, {marginHorizontal: 10}]}>
            <View style={globalStyles.containerHeaderSection}>
                <Text style={[globalStyles.txtDefault, {alignSelf: 'center'}]}>{props.title}</Text>
                <TouchableOpacity style={globalStyles.btnOuterSection}>
                    <Text
                        style={[globalStyles.txtItalicSmall, {textDecorationLine: 'underline'}]}>{props.outerBtn}</Text>
                </TouchableOpacity>
            </View>
            <FlatList data={props.item}
                      renderItem={({item}) => (<CoursesListItem item={item}/>)}
            />
        </View>
    );
};

export default CoursesList;
