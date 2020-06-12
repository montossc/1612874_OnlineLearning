import React from 'react';
import {ScrollView, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import globalStyles from '../global/styles'
import {Avatar, SocialIcon} from 'react-native-elements';
import {color} from '../global/constant';
import ViewMoreText from 'react-native-view-more-text';
//params: item: author, navigator
const AuthorDetail = props => {
    let author = props.route.params.item;
    return (
        <ScrollView style={globalStyles.container}>
            <View style={styles.containerAuthorInfo}>
                <Avatar rounded={true} size={'large'} source={author.avatar}/>
                <Text style={globalStyles.txtTitle}>{author.name}</Text>
                <TouchableOpacity style={styles.btnFollow} b>
                    <Text style={[globalStyles.txtDefault, {color: 'white', fontWeight: 'bold'}]}>FOLLOW</Text>
                </TouchableOpacity>
                <Text style={globalStyles.txtItalicSmall}>Follow to be notified when new courses are published!</Text>
            </View>
            <View style={{marginVertical: 10}}>
                <ViewMoreText numberOfLines={3} textStyle={globalStyles.txtItalicSmall}>
                    <Text>This is demo text. This is demo text. This is demo text. This is demo text. This is demo
                        text. This is demo text. This is demo text. This is demo text. This is demo text. This is
                        demo text. This is demo text. This is demo text. This is demo text. This is demo text. This
                        is demo text. This is demo text. This is demo text. </Text>
                </ViewMoreText>
            </View>
            <View style={styles.containerIconList}>
                <SocialIcon type={'twitter'} light={true} iconSize={24}/>
                <SocialIcon type={'facebook'} light={true} iconSize={24}/>
                <SocialIcon type={'linkedin'} light={true} iconSize={24}/>
            </View>
        </ScrollView>
    );
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
    }
});
export default AuthorDetail;
