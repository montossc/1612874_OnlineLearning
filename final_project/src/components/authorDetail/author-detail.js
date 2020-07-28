import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, View, StyleSheet, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import globalStyles from '../global/styles'
import {Avatar, SocialIcon} from 'react-native-elements';
import {color} from '../global/constant';
import ViewMoreText from 'react-native-view-more-text';
import {ThemeContext} from "../../../App";
import iteduAPI from "../../API/iteduAPI";
import CoursesSection from "../global/mainComponents/coursesSection/courses-section";
//params: item: author, navigator
const AuthorDetail = props => {
    const authorProp = props.route.params.item;
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const [author, setAuthor] = useState();
    const [isLoadding, setLoading] = useState(true);
    useEffect(() => {
        iteduAPI.get(`/instructor/detail/${authorProp.id}`)
            .then((response) => {
                if (response.isSuccess) {
                    setAuthor(response.data.payload)
                }
            })
        iteduAPI.get(`/instructor/detail/${authorProp['user.id']}`)
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
    if (isLoadding === true) {
        return <View style={{flex: 1}}>
            <ActivityIndicator size={'large'} style={{flex: 1, alignContent: 'center'}}/>
        </View>
    }
    else {
        return (
            <ScrollView style={[globalStyles.container, {backgroundColor: theme.background}]}>
                <View style={styles.containerAuthorInfo}>
                    <Avatar rounded={true} size={'large'} source={{uri: author.avatar}}/>
                    <Text style={[globalStyles.txtTitle, {color: theme.foreground}]}>{author.name}</Text>
                    {/*<TouchableOpacity style={styles.btnFollow} b>
                    <Text style={[globalStyles.txtDefault, {color: 'white', fontWeight: 'bold'}]}>FOLLOW</Text>
                </TouchableOpacity>*/}
                    {/*<Text style={[globalStyles.txtItalicSmall, {color: theme.foreground}]}>Follow to be notified when new courses are published!</Text>*/}
                </View>
                <View style={{marginVertical: 10}}>
                    <ViewMoreText numberOfLines={3}>
                    <Text style={[globalStyles.txtItalicSmall, styles.txtInfo]}>{author.major}{'\n\n'}{author.intro}{'\n\n'}</Text>
                    <Text style={[globalStyles.txtItalicSmall, styles.txtInfo, {fontWeight: 'bold'}]}>Skills:{'\n'}</Text>
                    {

                        author.skills.map((skill) => <Text style={[globalStyles.txtItalicSmall, styles.txtInfo, {paddingLeft: 40}]}>{skill} {'\n'}</Text>)
                    }
                    </ViewMoreText>
                </View>
                <CoursesSection title={"Author's courses"} item={author.courses} navigator={props.route.params.navigator}/>
                {/*<View style={styles.containerIconList}>
                <SocialIcon type={'twitter'} light={true} iconSize={24}/>
                <SocialIcon type={'facebook'} light={true} iconSize={24}/>
                <SocialIcon type={'linkedin'} light={true} iconSize={24}/>
            </View>*/}
            </ScrollView>
        );
    }
};
const styles = StyleSheet.create({
    containerAuthorInfo:{
        marginTop: 10,
        alignItems: 'center'
    },
    btnFollow: {
        marginVertical: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: color.LIGHT_BLUE
    },
    containerIconList:{
        flexDirection: 'row',
        marginVertical: 10
    },
    txtInfo: {
        paddingHorizontal: 30
    }
});
export default AuthorDetail;
