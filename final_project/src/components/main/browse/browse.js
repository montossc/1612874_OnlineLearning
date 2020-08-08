import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {Avatar, Icon, Tile} from 'react-native-elements';

import globalStyles from '../../../globalVariables/styles';
import PopularSkills from './popular-skills';
import TopAuthor from './top-author';
import {color, screenName} from '../../../globalVariables/constant';
import {
    AuthenticationContext,
    ThemeContext,
    UserAvatarContext,
} from "../../../../App";
import {getNewCourses, getRecommendCourses} from "../../../core/services/courses-service";

const Browse = props => {
    const userAvatarContext = useContext(UserAvatarContext);
    const authenContext = useContext(AuthenticationContext);
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const [recommendList, setRecommend] = useState([]);
    const [newReleaseList, setNewRelease] = useState([]);

    const temp = [];


    props.navigation.setOptions({
        headerStyle: {backgroundColor: theme.background},
        headerTitleStyle: {color: theme.foreground},
        headerRight: () => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Avatar rounded={true} source={{uri: userAvatarContext.userAvatar}} size={'small'}
                        onPress={() => props.navigation.navigate(screenName.ProfileScreen)}/>
                <Icon containerStyle={{marginLeft: 150, marginRight: 10}} name={'settings'} type={'material-icons'} color={color.LIGHT_GRAY} onPress={() => props.navigation.navigate(screenName.SettingScreen)}/>
            </View>)
    })


    useEffect(() => {
        getRecommendCourses(authenContext.authenState.userInfo.id).then(setRecommend)
        getNewCourses().then(setNewRelease)
    }, [])

    return (
        <ScrollView style={[globalStyles.container, {backgroundColor: theme.background}]} showsVerticalScrollIndicator={false}>
            <Tile featured={true}
                  height={100}
                  title={`NEW\nRELEASE`}
                  imageSrc={require('../../../../assets/image/new_release_background.jpg')}
                  containerStyle={styles.tileContainer}
                  onPress={() => props.navigation.push(screenName.CourseListScreen, {title: 'New Release', outerBtn:'', item: newReleaseList})}

            />
            <Tile featured={true}
                  height={100}
                  title={`RECOMMENDED\nFOR YOU`}
                  imageSrc={require('../../../../assets/image/recommend_background.jpg')}
                  containerStyle={styles.tileContainer}
                  onPress={() => props.navigation.push(screenName.CourseListScreen, {title: 'Recommend for you', outerBtn:'', item: recommendList})}
            />
            <PopularSkills navigator={props.navigation}/>
            <TopAuthor navigator={props.navigation}/>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    tileContainer:{
        marginBottom: 10,
    },
    tileCaption:{
        fontSize: 12,
        fontWeight: 'bold',
        color:'white',
        alignSelf: 'center',
        bottom: 20
    }
});
export default Browse;
