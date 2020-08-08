import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {Avatar, Rating} from 'react-native-elements';

import globalStyles from '../../globalVariables/styles';
import {screenName} from '../../globalVariables/constant';
import {ThemeContext} from "../../../App";
import {getAuthorDetail} from "../../core/services/author-service";

const CourseInfo = ({courseDetail, navigator}) => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const [author, setAuthor] = useState();
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        getAuthorDetail(courseDetail.instructorId).then((res) => {
            setAuthor(res.data)
            setLoading(res.loading)
        })
    },[])


    if (isLoading === true) {
        return(<View/>)
    }
    else {
        return (
            <View style={{margin: 10}}>
                <Text style={[styles.txtCourseName, {color: theme.foreground}]}>{courseDetail.title}</Text>
                <View style={styles.containerAuthorList}>
                    <TouchableOpacity style={styles.containerAuthor}
                                      onPress={() => navigator.push(screenName.AuthorDetailScreen, {
                                          item: author,
                                          navigator: navigator
                                      })}>
                        <Avatar rounded={true} size={'small'} source={{uri:author.avatar}}/>
                        <Text style={[globalStyles.txtDefault, {
                            marginLeft: 5,
                            color: theme.foreground
                        }]}>{author.name}</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.containerAuthorList}>
                    <Text
                        style={[globalStyles.txtItalicSmall, {color: theme.foreground}]}>{courseDetail.createdAt.substr(0, 10)} . {courseDetail.totalHours} hour(s)</Text>
                    <Rating style={{marginLeft: 20}} readonly={true} tintColor={theme.background} imageSize={12}
                            startingValue={courseDetail.contentPoint}/>
                    <Text style={[globalStyles.txtItalicSmall, {
                        marginLeft: 5,
                        color: theme.foreground
                    }]}>({courseDetail.soldNumber})</Text>
                </View>

            </View>
        );
    }
};
const styles = StyleSheet.create({
    txtCourseName:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    containerAuthorList:{
        flexDirection: 'row'
    },
    containerAuthor:{
        margin: 10,
        marginLeft: 0,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 45,
        padding: 2,
        borderColor:'rgba(55,190,245,0.7)'
    }
});
export default CourseInfo;
