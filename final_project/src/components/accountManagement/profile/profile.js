import React, {useContext, useEffect, useState} from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput, Text, ScrollView,
} from 'react-native';
import globalStyles from '../../global/styles';
import AccountChangingSection from './account-changing-section';
import UserTopics from './user-topics';
import SubscriptionInfo from './subscription-info';
import {Avatar, Icon} from 'react-native-elements';
import SubmitButtonCenter from '../../global/commonComponent/submit-button-center';
import AuthorsSection from '../../global/mainComponents/authorsSection/authors-section';
import {screenName} from '../../global/constant';
import {UserProfileContext} from "../../../../App";

const Profile = props => {
    const userProfileContext = useContext(UserProfileContext);
    const followingAuthors = [
        {
            name: 'Deborah Kurata',
            avatar: {uri: 'https://avatars2.githubusercontent.com/u/7987365?s=460&v=4'}
        },
        {
            name: 'Scott Allen',
            avatar: {uri: 'https://pluralsight.imgix.net/author/lg/44cb43b3-83e4-4458-9b39-a7ded3411616.jpg'}
        }];
    const [userFullname, setUserFullname] = useState(userProfileContext.userProfile.fullname);
    const [avatar, setAvatar] = useState(userProfileContext.userProfile.avatar);
    const [canEdit, setCanEdit] = useState(false);
    const setEditableFullname = () => {
        setCanEdit(!canEdit);
    };

    useEffect(() => {
        const userProfileTemp = userProfileContext.userProfile;
        userProfileTemp.avatar = avatar;
        userProfileTemp.fullname = userFullname;
        userProfileContext.setUserProfile(userProfileTemp);
    }, [userFullname, avatar])
    return (
        <ScrollView style={globalStyles.container}>
            <View style={styles.infoArea}>
                <Avatar source={avatar} size={'large'} rounded={true}/>
                <TextInput style={styles.txtFullname}
                           editable={canEdit}
                           maxLenght={25}
                           value={userFullname}
                           onChageText={text => setUserFullname(text)}
                           onEndEditing={setEditableFullname}

                />
                <Icon name={'edit'} type={'material-icons'} onPress={setEditableFullname}/>
            </View>
            <AccountChangingSection navigator={props.navigation}/>
            <SubscriptionInfo item={userProfileContext.userProfile.subscription} navigator={props.navigation}/>
            <UserTopics item={userProfileContext.userProfile.topics} navigator={props.navigation}/>
            <View style={globalStyles.containerTextButton}>
                <AuthorsSection title={'Following'} item={followingAuthors} navigator={props.navigation}/>
            </View>
            <View style={styles.containerBtnLogout}>
            <SubmitButtonCenter name={'Logout'} color={'black'} onPress={() => props.navigation.navigate(screenName.LoginScreen)}/>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    infoArea: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingBottom: 10,
        alignItems: 'center'
    },
    btnAvatar: {
        borderRadius: 90,
        height: 70, width: 70,
    },
    txtFullname: {
        alignSelf: 'center',
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 20,
    },
    btnEditFullname: {
        height: 20,
        width: 20,
        alignSelf: 'center',
        borderWidth: 0,
    },
    containerBtnLogout: {
        marginVertical: 100
    }
});
export default Profile;
