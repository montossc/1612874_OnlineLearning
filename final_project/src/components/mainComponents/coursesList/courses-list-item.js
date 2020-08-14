import React, {useContext} from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import globalStyles from '../../../globalVariables/styles';
import {Rating} from 'react-native-elements';
import {color, screenName} from '../../../globalVariables/constant';
import {ThemeContext} from "../../../../App";
import ProgressBar from "../../commonComponents/progress-bar";

//props: item: course
const CoursesListItem = props => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.navigator.push(screenName.CourseDetailScreen, {item: props.item.id, navigator: props.navigator})}>
            {
                (props.item.imageUrl) ?
                    <Image style={{flex: 1}} source={{uri: props.item.imageUrl}}/> :
                    <Image style={{flex: 1}} source={{uri: props.item.courseImage}}/>

            }
            <View style={styles.containerCourseInfo}>
                <Text style={[globalStyles.txtDefault, {color: theme.foreground}]}>{(props.item.title) ? props.item.title : props.item.courseTitle}</Text>
                <Text style={[globalStyles.txtItalicSmall, {color: theme.foreground}]}>{(props.item['instructor.user.name']) ? props.item['instructor.user.name'] : props.item.instructorName}</Text>
                {/*<Text style={[globalStyles.txtItalicSmall, {color: theme.foreground}]}>{`${props.item.levelRequirement} . ${props.item.releaseDate} . ${props.item.duration}`}</Text>*/}
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Rating readonly={true} tintColor={theme.background} imageSize={12} startingValue={(props.item.contentPoint) ? props.item.contentPoint : props.item.courseAveragePoint}/>
                    <Text style={[globalStyles.txtItalicSmall, {marginLeft: 5, color: theme.foreground}]}>({(props.item.soldNumber) ? props.item.soldNumber : props.item.courseSoldNumberr})</Text>
                </View>
                {
                    props.item.price != null ?
                        <Text style={[globalStyles.txtItalicSmall, styles.txtPrice]}>{props.item.price} VND</Text> :
                        props.item.coursePrice != null ?
                            <Text style={[globalStyles.txtItalicSmall, styles.txtPrice]}>{props.item.coursePrice} VND</Text> :
                            <ProgressBar percentage={Math.round(props.item.process)}/>
                }
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container:{
        marginTop: 10,
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
    },
    txtPrice: {
        flex:1,
        color: color.LIGHT_RED,
        fontWeight: 'bold'
    }
});
export default CoursesListItem;
