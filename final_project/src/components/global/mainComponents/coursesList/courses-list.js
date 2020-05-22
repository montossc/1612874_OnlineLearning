import React from 'react';
import globalStyles from '../../styles';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import CoursesListItem from './courses-list-item';

//params or props: title, outerBtn: button near the title, item: list of courses
const CoursesList = props => {
    let data;
    let currentNavigator;
    if (props.navigation){
        props.navigation.setOptions({headerShown: false});
        data = props.route.params;
        currentNavigator = props.navigation;
    }
    else {
        data = props;
        currentNavigator = props.navigator;
    }
    return (
        <View style={[globalStyles.containerSection, {marginHorizontal: 10}]}>
            <View style={globalStyles.containerHeaderSection}>
                <Text style={[globalStyles.txtDefault, {alignSelf: 'center'}]}>{data.title}</Text>
                <TouchableOpacity style={globalStyles.btnOuterSection}>
                    <Text
                        style={[globalStyles.txtItalicSmall, {textDecorationLine: 'underline'}]}>{data.outerBtn}</Text>
                </TouchableOpacity>
            </View>
            <FlatList data={data.item}
                      renderItem={({item}) => (<CoursesListItem item={item} navigator={currentNavigator}/>)}
                      keyExtractor={item => item.ID}
            />
        </View>
    );
};

export default CoursesList;
