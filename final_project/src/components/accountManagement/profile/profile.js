import React, {useState} from 'react';
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

const Profile = () => {
    const userInfo = {
        avatar: {uri: 'https://ephoto360.com/uploads/worigin/2020/03/23/tao-avatar-mac-dinh-facebook-thay-nen-cuc-hot5e7838ae39057_96eb8aef68a3aa00523448390b49fbcb.jpg'},
        fullname: 'Phan Thanh Nam',
        subscription: 'Yearly, expire at 15/05/2021',
        topics: ['React Native', 'Java', 'C#', 'Unity', 'Game Design'],
        username: 'montossc',
        password: '290398',
    };
    const followingAuthors = [
        {
            name: 'Deborah Kurata',
            avatar: {uri: 'https://avatars2.githubusercontent.com/u/7987365?s=460&v=4'}
        },
        {
            name: 'Scott Allen',
            avatar: {uri: 'https://pluralsight.imgix.net/author/lg/44cb43b3-83e4-4458-9b39-a7ded3411616.jpg'}
        }];
    const [userFullname, setUserFullname] = useState(userInfo.fullname);
    const [avatar, setAvatar] = useState(userInfo.avatar);
    const [canEdit, setCanEdit] = useState(false);
    const setEditableFullname = () => {
        setCanEdit(!canEdit);
    };
    return (
        <ScrollView style={globalStyles.container}>
            <View style={styles.infoArea}>
                <Avatar source={userInfo.avatar} size={'large'} rounded={true}/>
                <TextInput style={styles.txtFullname}
                           editable={canEdit}
                           maxLenght={25}
                           onChageText={text => setUserFullname(text)}
                           onEndEditing={setEditableFullname}
                           defaultValue={userFullname}
                />
                <Icon name={'edit'} type={'material-icons'} onPress={setEditableFullname}/>
            </View>
            <AccountChangingSection/>
            <SubscriptionInfo item={userInfo.subscription}/>
            <UserTopics item={userInfo.topics}/>
            <View style={globalStyles.containerTextButton}>
                <AuthorsSection title={'Following'} item={followingAuthors}/>
            </View>
            <View style={styles.containerBtnLogout}>
            <SubmitButtonCenter name={'Logout'} color={'black'}/>
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
