import React, {useContext} from 'react';
import globalStyles from '../../../globalVariables/styles';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CoursesListItem from './courses-list-item';
import {ThemeContext} from "../../../../App";

//params or props: title, outerBtn: button near the title, item: list of courses
const CoursesList = props => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    let data;
    let currentNavigator;
    let topMargin;

    if (props.navigation){
        props.navigation.setOptions({headerShown: false});
        data = props.route.params;
        currentNavigator = props.navigation;
    }
    else {
        data = props;
        currentNavigator = props.navigator;
    }
    if (!props.topMargin){topMargin = 50}
    else {topMargin = props.topMargin}

    return (
        <View style={[globalStyles.containerSection, styles.container, {backgroundColor: theme.background}]}>
            <View style={[globalStyles.containerHeaderSection, {marginTop: topMargin}]}>
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
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flex: 1
    }
})
export default CoursesList;
