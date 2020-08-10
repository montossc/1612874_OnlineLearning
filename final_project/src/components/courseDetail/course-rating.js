import React, {useContext, useEffect, useState} from "react";
import {ScrollView, Text, TextInput, View, StyleSheet} from "react-native";

import globalStyles from '../../globalVariables/styles'
import {color} from "../../globalVariables/constant";
import {Avatar, Rating} from "react-native-elements";
import {ThemeContext} from "../../../App";
import SubmitButtonCenter from "../commonComponents/submit-button-center";
import {getUsersRateCourse, getYourRateCourse, rateCourse} from "../../core/services/courses-service";

const CourseRating = ({courseDetail, token}) => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const [yourRating, setYourRating] = useState(0)
    const [comment, setComment] = useState('')
    const [courseRatings, setCourseRatings] = useState([])
    const [updateRateTimes, setUpdateRateTimes] = useState(0)

    useEffect(() => {
        getYourRateCourse(courseDetail.id, token).then((res) => {
            setYourRating(res.rating)
            setComment(res.comment)
        })
        getUsersRateCourse(courseDetail.id).then(setCourseRatings)
    },[updateRateTimes])

    const onRatingCompleted = async () => {
        await rateCourse(courseDetail.id, yourRating, comment, token).then(() => {
            setUpdateRateTimes(updateRateTimes + 1);
        })
    }
    return (<ScrollView style={globalStyles.container}>
        <View style={globalStyles.containerTextButton}>
            <Text style={[globalStyles.txtDefault, {color: theme.foreground}]}>Your rating: </Text>
            <Rating tintColor={theme.background} imageSize={36} showRating={true}
                    startingValue={yourRating} onFinishRating={setYourRating} fractions={1} style={styles.rateContainer}/>
            <TextInput placeholder={'Comment...'} onChangeText={setComment} value={comment} multiline={true} style={[styles.commentContainer,{color: theme.foreground}]}/>
            <SubmitButtonCenter name={'Rate!'} onPress={onRatingCompleted} color={color.LIGHT_BLUE}/>
        </View>

        <View style={globalStyles.containerTextButton}>
            <Text style={[globalStyles.txtDefault, {color: theme.foreground}]}>Other users's rating: </Text>
            {
                courseRatings.map(rating =>
                    <View style={styles.rowContainer}>
                        <View style={styles.userRateInfoContainer}>
                            <Avatar rounded={true} source={{uri: rating.userAvatar}} size={'small'}/>
                            <Text style={[globalStyles.txtItalicSmall, styles.txtRateUserName, {color: theme.foreground}]}>{rating.userName}</Text>
                        </View>
                        <View>
                            <Rating readonly={true} tintColor={theme.background} imageSize={12}
                                    startingValue={rating.rate} fractions={1}/>
                            <Text style={[globalStyles.txtItalicSmall, {color: theme.foreground}]}>{rating.comment}</Text>
                        </View>
                    </View>)
            }
        </View>
    </ScrollView>);
}
const styles = StyleSheet.create({
    commentContainer:{
        borderWidth: 1,
        padding: 10,
    },
    rateContainer: {
        marginBottom: 20
    },
    rowContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    userRateInfoContainer: {
        marginRight: 30,
        alignItems: 'center',
        width: 70
    },
    txtRateUserName: {
        textAlign: 'center'
    }
})
export default CourseRating;
