import React, {useContext, useEffect, useState} from 'react';
import {
    View,
    StyleSheet,
    TextInput, ScrollView, ActivityIndicator,
} from 'react-native';

import {Avatar, Icon} from 'react-native-elements';
import * as ImagePicker from "expo-image-picker";

import globalStyles from '../../../globalVariables/styles';
import AccountChangingSection from './account-changing-section';
import UserTopics from './user-topics';
import SubmitButtonCenter from '../../commonComponents/submit-button-center';
import {screenName} from '../../../globalVariables/constant';
import {AuthenticationContext, ThemeContext, UserAvatarContext} from "../../../../App";
import {getUserInfo, updateUserInfo} from "../../../core/services/user-service";


const Profile = props => {
    const authenContext = useContext(AuthenticationContext);
    const userAvatarContext = useContext(UserAvatarContext);
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const [userInfo, setUserInfo] = useState();
    const [userFullname, setUserFullname] = useState('');
    const [avatar, setAvatar] = useState('');
    const [canEdit, setCanEdit] = useState(false);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        getUserInfo(authenContext.authenState.token).then(setUserInfo)
    }, [])
    useEffect(() => {
        if (userInfo) {
            setUserFullname(userInfo.name);
            setAvatar(userInfo.avatar);
            setLoading(false)
        }
    }, [userInfo])
    useEffect(() => {
        if ((userFullname !== '') && (avatar !== ''))
            updateUserInfo(userFullname, avatar, authenContext.authenState.userInfo.phone, authenContext.authenState.token)
                .then((res) => {userAvatarContext.setUserAvatar(res.avatar)})
    }, [userFullname, avatar])

    const setEditableFullname = () => {
        setCanEdit(!canEdit);
    };
    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });
            if (!result.cancelled) {
                setAvatar(result.uri)
            }

        } catch (E) {
            console.log(E);
        }
    };


    props.navigation.setOptions({
        headerStyle: {backgroundColor: theme.background},
        headerTitleStyle: {color: theme.foreground}
    })

    if (isLoading) {
        return <View style={{flex: 1}}>
            <ActivityIndicator size={'large'} style={{flex: 1, alignContent: 'center'}}/>
        </View>
    }
    else {
        return (
            <ScrollView style={[globalStyles.container, {backgroundColor: theme.background}]}>
                <View style={[styles.infoArea, {borderColor: theme.foreground}]}>
                    <Avatar source={{uri: avatar}} size={'large'} rounded={true} onPress={pickImage}/>
                    <TextInput style={[styles.txtFullname, {color: theme.foreground}]}
                               editable={canEdit}
                               maxLenght={25}
                               value={userFullname}
                               onEndEditing={setEditableFullname}
                               onChangeText={(text) => setUserFullname(text)}
                    />
                    {
                        (canEdit === true) && <Icon name={'edit'} type={'material-icons'} onPress={setEditableFullname}
                                            color={theme.foreground}/>
                    }
                </View>
                <AccountChangingSection navigator={props.navigation}/>
                {(userInfo.favoriteCategories) && <UserTopics navigator={props.navigation} favTopicsID={userInfo.favoriteCategories}/>}
                <View style={styles.containerBtnLogout}>
                    <SubmitButtonCenter name={'Logout'} color={theme.foreground}
                                        onPress={() => props.navigation.navigate(screenName.LoginScreen)}/>
                </View>
            </ScrollView>
        );
    }
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
