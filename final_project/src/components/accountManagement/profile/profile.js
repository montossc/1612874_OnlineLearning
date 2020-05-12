import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput, Text,
} from 'react-native';
import globalStyles from '../../global/styles';
import AccountChangingSection from './account-changing-section';
import UserTopics from './user-topics';
import SubscriptionInfo from './subscription-info';

const Profile = () => {
    const userInfo = {
        avatar: {uri: 'https://ephoto360.com/uploads/worigin/2020/03/23/tao-avatar-mac-dinh-facebook-thay-nen-cuc-hot5e7838ae39057_96eb8aef68a3aa00523448390b49fbcb.jpg'},
        fullname: 'Phan Thanh Nam',
        subscription: 'Yearly, expire at 15/05/2021',
        topics: ['React Native', 'Java', 'C#', 'Unity', 'Game Design'],
        username: 'montossc',
        password: '290398'
    };
    const [userFullname, setUserFullname] = useState(userInfo.fullname);
    const [avatar, setAvatar] = useState(userInfo.avatar);
    const [canEdit, setCanEdit] = useState(false);
    const setEditableFullname = () => {
        setCanEdit(!canEdit);
    };
    return (
        <View style={{padding: 10}}>
            <View style={styles.infoArea}>
                <TouchableOpacity style={[globalStyles.btnImage, styles.btnAvatar]}>
                    <Image style={[globalStyles.imgButtonImage, {borderRadius: 150}]} source={avatar}/>
                </TouchableOpacity>
                <TextInput style={styles.txtFullname}
                           editable={canEdit}
                           maxLenght={25}
                           onChageText={text => setUserFullname(text)}
                           onEndEditing={setEditableFullname}
                           defaultValue={userFullname}
                    />
                <TouchableOpacity style={[globalStyles.btnImage, styles.btnEditFullname]} onPress={setEditableFullname}>
                    <Image style={globalStyles.imgButtonImage} source={require('../../../../assets/icon/edit.png')}/>
                </TouchableOpacity>
            </View>
            <AccountChangingSection/>
            <SubscriptionInfo item={userInfo}/>
            <UserTopics item={userInfo}/>
            <Text>Các khoá học (chưa làm)</Text>
            <TouchableOpacity style={[globalStyles.btnSummit, {marginTop:100}]}>
                <Text style={{fontWeight: 'bold'}}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    infoArea: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingBottom: 10,
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

});
export default Profile;
