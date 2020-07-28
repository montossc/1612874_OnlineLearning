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
import {AuthenticationContext, ThemeContext, UserAvatarContext, UserProfileContext} from "../../../../App";
import iteduAPI from "../../../API/iteduAPI";

const Profile = props => {
    const authenContext = useContext(AuthenticationContext);
    const userAvatarContext = useContext(UserAvatarContext);
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;

    const [userInfo, setUserInfo] = useState();
    const [userFullname, setUserFullname] = useState('');
    const [avatar, setAvatar] = useState('');
    const [canEdit, setCanEdit] = useState(false);
    const setEditableFullname = () => {
        setCanEdit(!canEdit);
    };

    useEffect(() => {
        iteduAPI.get('/user/me', {}, authenContext.authenState.token)
            .then((response) => {
                if(response.isSuccess){
                    setUserInfo(response.data.payload);
                }
            })
    }, [])
    useEffect(() => {
        if (userInfo) {
            setUserFullname(userInfo.name);
            setAvatar(userInfo.avatar);
        }
    }, [userInfo])
    useEffect(() => {
        if ((userFullname !== '') && (avatar !== ''))
        iteduAPI.put('/user/update-profile', {name: userFullname, avatar: avatar, phone: authenContext.authenState.userInfo.phone}, authenContext.authenState.token)
            .then((response) => {
                if (response.isSuccess){
                    console.log('profile, doi thanh cong')
                    userAvatarContext.setUserAvatar(avatar);
                }
            })
    }, [userFullname, avatar])
    return (
        <ScrollView style={[globalStyles.container, {backgroundColor: theme.background}]}>
            <View style={[styles.infoArea, {borderColor: theme.foreground}]}>
                <Avatar source={{uri: avatar}} size={'large'} rounded={true}/>
                <TextInput style={[styles.txtFullname, {color: theme.foreground}]}
                           editable={canEdit}
                           maxLenght={25}
                           value={userFullname}
                           onChageText={ (text) => {setUserFullname(text)}}
                           onEndEditing={setEditableFullname}

                />
                {
                    (!canEdit) ?
                    <Icon name={'edit'} type={'material-icons'} onPress={setEditableFullname} color={theme.foreground}/> :
                        <View></View>
                }
            </View>
            <AccountChangingSection navigator={props.navigation}/>
            {/*<SubscriptionInfo item={userProfileContext.userProfile.subscription} navigator={props.navigation}/>*/}
            {/*<UserTopics navigator={props.navigation}/>*/}
            {/*<View style={[globalStyles.containerTextButton, {borderColor: theme.foreground}]}>
                <AuthorsSection title={'Following'} item={followingAuthors} navigator={props.navigation}/>
            </View>*/}
            <View style={styles.containerBtnLogout}>
            <SubmitButtonCenter name={'Logout'} color={theme.foreground} onPress={() => props.navigation.navigate(screenName.LoginScreen)}/>
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
