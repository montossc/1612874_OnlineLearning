import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, View, StyleSheet, Text, ActivityIndicator} from 'react-native';

import {Avatar, SocialIcon} from 'react-native-elements';
import ViewMoreText from 'react-native-view-more-text';

import globalStyles from '../../globalVariables/styles'
import {color} from '../../globalVariables/constant';
import {ThemeContext} from "../../../App";
import CoursesSection from "../mainComponents/coursesSection/courses-section";
import {getAuthorDetail} from "../../core/services/author-service";

//params: item: author, navigators
const AuthorDetail = props => {
    const authorProp = props.route.params.item;
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const [author, setAuthor] = useState();
    const [isLoadding, setLoading] = useState(true);
    useEffect(() => {
        getAuthorDetail(authorProp.id).then((res) => {
            if (res.loading === false) {
                setAuthor(res.data)
                setLoading(res.loading);
            }
        })
        getAuthorDetail(authorProp['user.id']).then((res) => {
            if (res.loading === false) {
                setAuthor(res.data)
                setLoading(res.loading)
            }
        })
    },[])

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
                <CoursesSection title={"Author's courses"} courses={author.courses} navigator={props.route.params.navigator}/>
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
