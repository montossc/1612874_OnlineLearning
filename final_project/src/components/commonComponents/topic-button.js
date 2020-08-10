import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {screenName} from '../../globalVariables/constant';
import iteduAPI from "../../API/iteduAPI";
import {getCategoryCourses} from "../../core/services/category-service";

//props: name, color
const TopicButton = props => {
    const mainColor = props.color;
    const [cateCourseList, setCateCourses] = useState([]);
    useEffect(() => {
        getCategoryCourses(props.item.id).then(setCateCourses)
    },[])
    return (
        <TouchableOpacity style={[styles.icon, {borderColor: mainColor}]} onPress={() => props.navigator.push(screenName.CourseListScreen, {title: props.item.name, outerBtn: '', item: cateCourseList})}>
            <Text style={[styles.txt, {color: mainColor}]}>{props.item.name}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    icon: {
        margin: 5,
        borderWidth: 1,
        borderRadius: 60,
        height: 30,
        justifyContent: 'center',
        alignItems:'center',
        padding: 10
    },
    txt:{
        fontSize: 12,
    }
});
export default TopicButton;
