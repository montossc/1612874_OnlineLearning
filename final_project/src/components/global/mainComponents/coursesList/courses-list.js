import React, {useContext} from 'react';
import globalStyles from '../../styles';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import CoursesListItem from './courses-list-item';
import {ThemeContext} from "../../../../../App";

//params or props: title, outerBtn: button near the title, item: list of courses
const CoursesList = props => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
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
        <View style={[globalStyles.containerSection, {paddingHorizontal: 10, backgroundColor: theme.background, flex: 1}]}>
            <View style={[globalStyles.containerHeaderSection, {paddingTop: 50}]}>
                <Text style={[globalStyles.txtDefault, {alignSelf: 'center', color: theme.foreground, fontWeight: 'bold'}]}>{data.title}</Text>
                <TouchableOpacity style={globalStyles.btnOuterSection}>
                    <Text
                        style={[globalStyles.txtItalicSmall, {textDecorationLine: 'underline', color: theme.foreground}]}>{data.outerBtn}</Text>
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
