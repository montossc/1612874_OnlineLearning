import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Avatar, Rating} from 'react-native-elements';
import globalStyles from '../global/styles';
import {screenName} from '../global/constant';
import {ThemeContext} from "../../../App";
import iteduAPI from "../../API/iteduAPI";

const CourseInfo = props => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const [author, setAuthor] = useState();
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        iteduAPI.get(`/instructor/detail/${props.item.instructorId}`)
            .then((response) => {
                if (response.isSuccess) {
                    setAuthor(response.data.payload)
                }
            })
    },[])
    useEffect(() => {
        if (author) {
            setLoading(false);
        }
    }, [author])
    if (isLoading === true) {
        return(<View/>)
    }
    else {
        return (
            <View style={{margin: 10}}>
                <Text style={[styles.txtCourseName, {color: theme.foreground}]}>{props.item.title}</Text>
                <View style={styles.containerAuthorList}>
                    <TouchableOpacity style={styles.containerAuthor}
                                      onPress={() => props.navigator.push(screenName.AuthorDetailScreen, {
                                          item: author,
                                          navigator: props.navigator
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
                        style={[globalStyles.txtItalicSmall, {color: theme.foreground}]}>{props.item.createdAt.substr(0, 10)} . {props.item.totalHours} hour(s)</Text>
                    <Rating style={{marginLeft: 20}} readonly={true} tintColor={theme.background} imageSize={12}
                            startingValue={props.item.contentPoint}/>
                    <Text style={[globalStyles.txtItalicSmall, {
                        marginLeft: 5,
                        color: theme.foreground
                    }]}>({props.item.soldNumber})</Text>
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
