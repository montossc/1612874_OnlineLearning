import React, {useContext} from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import globalStyles from '../global/styles';
import {ButtonGroup} from 'react-native-elements';
import {ThemeContext} from "../../../App";
import SubmitButtonCenter from "../global/commonComponent/submit-button-center";
import {color, screenName} from "../global/constant";

const LessonList = props => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const sections = props.item.section;
    if (sections) {
    return (
        <View style={styles.containerLessonList}>
            <ButtonGroup  buttons={['CONTENTS']}/>
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
                                          <TouchableOpacity style={styles.containerContent}>
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
                <SubmitButtonCenter name={'Buy this course'} color={theme.foreground}/>
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
