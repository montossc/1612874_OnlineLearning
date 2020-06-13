import React, {useContext} from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import globalStyles from '../../styles';
import {Rating} from 'react-native-elements';
import {screenName} from '../../constant';
import {ThemeContext} from "../../../../../App";

//props: item: course
const CoursesListItem = props => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.navigator.push(screenName.CourseDetailScreen, {item: props.item})}>
            <Image style={[styles.imgThumbnail]} source={props.item.thumbnail}/>
            <View style={styles.containerCourseInfo}>
                <Text style={[globalStyles.txtDefault, {color: theme.foreground}]}>{props.item.name}</Text>
                <Text style={[globalStyles.txtItalicSmall, {color: theme.foreground}]}>{props.item.author}</Text>
                <Text style={[globalStyles.txtItalicSmall, {color: theme.foreground}]}>{`${props.item.levelRequirement} . ${props.item.releaseDate} . ${props.item.duration}`}</Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Rating readonly={true} tintColor={theme.background} imageSize={12} startingValue={props.item.star}/>
                    <Text style={[globalStyles.txtItalicSmall, {marginLeft: 5, color: theme.foreground}]}>({props.item.totalVote})</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container:{
        borderBottomWidth: 1,
        marginVertical: 5,
        flexDirection: 'row',
        flex: 1,
        paddingBottom: 10
    },
    containerCourseInfo:{
        alignSelf:'center',
        marginLeft: 10,
        flex: 3
    },
    imgThumbnail:{
        flex: 1,
        resizeMode:'contain'
    }
});
export default CoursesListItem;
