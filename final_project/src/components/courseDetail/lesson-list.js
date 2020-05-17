import React from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import globalStyles from '../global/styles';
import {ButtonGroup} from 'react-native-elements';

const LessonList = props => {
    return (
        <View style={styles.containerLessionList}>
            <ButtonGroup  buttons={['CONTENTS', 'TRANSCRIPT']}/>
            <FlatList
                      data={props.item}
                      renderItem={({item}) =>
                          <View style={styles.containerLesson}>
                              <View style={styles.containerLessonInfo}>
                                  <Text style={globalStyles.txtDefault}>{item.name}</Text>
                                  <Text style={globalStyles.txtItalicSmall}>{item.totalTime}</Text>
                              </View>
                              <View style={styles.containerContentList}>
                                  {
                                      item.contentList.map((content) =>
                                          <TouchableOpacity style={styles.containerContent}>
                                              <Text style={globalStyles.txtItalicSmall}>{content.name}</Text>
                                              <Text style={globalStyles.txtItalicSmall}>{content.time}</Text>
                                          </TouchableOpacity>)
                                  }
                              </View>
                          </View>}
            />
        </View>
    );
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
