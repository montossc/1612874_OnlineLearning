import React, {useContext} from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity, Linking} from 'react-native';

import {ButtonGroup} from 'react-native-elements';

import globalStyles from '../../globalVariables/styles';
import {AuthenticationContext, ThemeContext} from "../../../App";
import SubmitButtonCenter from "../commonComponents/submit-button-center";
import {color, screenName} from "../../globalVariables/constant";
import iteduAPI from "../../API/iteduAPI";
import {getLessonVideo} from "../../core/services/lesson-service";

const LessonList = (props) => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const sections = props.item.section;
    const coursePrice = props.item.price;
    const authenContext = useContext(AuthenticationContext);

    const onPressLesson = (content) => {
        getLessonVideo(props.item.id, content.id, authenContext.authenState.token).then(props.setVideo)
    }
    const coursePayment = () => {
        if (coursePrice === 0) {
            iteduAPI.post('/payment/get-free-courses', {courseId: props.item.id}, authenContext.authenState.token)
                .then((response) => {
                    if (response.isSuccess){

                        props.navigator.push(screenName.CourseDetailScreen, {item: props.item.id, navigator: props.navigator})
                    }
                })
        }
        else {
            Linking.openURL(`https://itedu.me/payment/${props.item.id}`);
        }
    }
    if (sections) {
    return (
        <View style={styles.containerLessonList}>

            <FlatList
                      data={sections}
                      renderItem={({item}) =>
                          <View style={[styles.containerLesson, {borderColor: theme.foreground}]}>
                              <View style={[styles.containerLessonInfo]}>
                                  <Text style={[globalStyles.txtDefault, {color: theme.foreground}]}>{item.name}</Text>
                                  {/*<Text style={[globalStyles.txtItalicSmall, {color: theme.foreground}]}>{item.totalTime}</Text>*/}
                              </View>
                              <View style={styles.containerContentList}>
                                  {
                                      item.lesson.map((content) =>
                                          <TouchableOpacity style={styles.containerContent} onPress={() => {onPressLesson(content)}}>
                                              <Text style={[globalStyles.txtItalicSmall, {color: theme.foreground}]}>{content.name}</Text>
                                              <Text style={[globalStyles.txtItalicSmall, {color: theme.foreground}]}>{content.hours}</Text>
                                          </TouchableOpacity>)
                                  }
                              </View>
                          </View>}
            />
        </View>
    );
    }
    else {
        return (
            <View style={[styles.containerLessonList, {paddingVertical: 50}]}>
                <Text style={[globalStyles.txtItalicSmall, {textAlign: 'center', padding: 10, color: color.LIGHT_RED}]}>You have not owned this course to view the content!</Text>
                <SubmitButtonCenter name={ coursePrice === 0 ? 'Get it free!':'Buy this course'} color={theme.foreground} onPress={coursePayment}/>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    containerLessonList: {
        padding: 10,
    },
    containerLesson: {
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    containerLessonInfo: {
        marginBottom: 10,
    },
    containerContentList: {
        marginLeft: 10,
    },
    containerContent: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
export default LessonList;
