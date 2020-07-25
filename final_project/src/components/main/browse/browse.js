import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Avatar, Icon, Tile} from 'react-native-elements';
import globalStyles from '../../global/styles';
import PopularSkills from './popular-skills';
import PathSection from '../../global/mainComponents/pathSection/path-section';
import TopAuthor from './top-author';
import {color, screenName} from '../../global/constant';
import {AuthenticationContext, CoursesContext, ThemeContext, UserProfileContext} from "../../../../App";
import iteduAPI from "../../../API/iteduAPI";

const Browse = props => {
    const userProfileContext = useContext(UserProfileContext);
    const authenContext = useContext(AuthenticationContext);
    /*const recommendTopics= [
        {
            name: 'CONFERENCES',
            background: {uri: 'https://images.pexels.com/photos/2305084/pexels-photo-2305084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
        },
        {
            name: `IT OPS`,
            background: {uri:'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
        },
        {
            name: `SOFTWARE DEVELOPMENT`,
            background: {uri:'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
        },
        {
            name: `INFORMATION AND CYBER SECURITY`,
            background: {uri:'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
        },
        {
            name: `DATA PROFESSIONAL`,
            background: {uri:'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
        },
        {
            name:`BUSINESS PROFESSIONAL`,
            background: {uri:'https://images.pexels.com/photos/3815729/pexels-photo-3815729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
        },
        {
            name: `CREATIVE PROFESSIONAL`,
            background: {uri:'https://images.pexels.com/photos/3435266/pexels-photo-3435266.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
        },
        {
            name: `MANUFACTURING AND DESIGN`,
            background:{uri:'https://images.pexels.com/photos/940019/pexels-photo-940019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
        }]*/
    const temp = [];
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    /*const renderTopicView = () => {
        for (let i = 0; i < recommendTopics.length; i= i + 2) {
            let aboveTopic = recommendTopics[i];
            let belowTopic = recommendTopics[i+1];
            temp.push(
            <View>
                <Tile featured={true}
                      height={80}
                      width={150}
                      caption={aboveTopic.name}
                      imageSrc={aboveTopic.background}
                      containerStyle={{margin: 5}}
                      captionStyle={styles.tileCaption}
                      onPress={() => props.navigation.push(screenName.SubjectDetailScreen, {item: aboveTopic})}
                />
                <Tile featured={true}
                      height={80}
                      width={150}
                      caption={belowTopic.name}
                      imageSrc={belowTopic.background}
                      containerStyle={{margin: 5}}
                      captionStyle={styles.tileCaption}
                      onPress={() => props.navigation.push(screenName.SubjectDetailScreen, {item: belowTopic})}
                />
            </View>);
        }
        return temp;
    }*/
    props.navigation.setOptions({
        headerStyle: {backgroundColor: theme.background},
        headerTitleStyle: {color: theme.foreground},
        headerRight: () => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Avatar rounded={true} source={userProfileContext.userProfile.avatar} size={'small'}
                        onPress={() => props.navigation.navigate(screenName.ProfileScreen)}/>
                <Icon containerStyle={{marginLeft: 150, marginRight: 10}} name={'settings'} type={'material-icons'} color={color.LIGHT_GRAY} onPress={() => props.navigation.navigate(screenName.SettingScreen)}/>
            </View>)
    })

    const [recommendList, setRecommend] = useState([]);
    const [newReleaseList, setNewRelease] = useState([]);

    useEffect(() => {
        iteduAPI.get(`/user/recommend-course/${authenContext.authenState.userInfo.id}/20/0`,{})
            .then((response) => {
                if(response.isSuccess){
                    setRecommend(response.data.payload);
                }
            });
        iteduAPI.post('/course/top-new', {limit: 20, page: 1})
            .then((response) => {
                if(response.isSuccess) {
                    setNewRelease(response.data.payload);
                }
            })
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
            {/*<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginBottom: 10}}>
            {
                renderTopicView()
            }
            </ScrollView>*/}
            <PopularSkills navigator={props.navigation}/>
            {/*<PathSection title={'Paths'} item={recommendPaths} navigator={props.navigation}/>*/}
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
