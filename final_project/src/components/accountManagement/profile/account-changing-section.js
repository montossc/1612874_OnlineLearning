import React from 'react';
import globalStyles from '../../global/styles';
import {Text, TouchableOpacity, View} from 'react-native';

const AccountChangingSection = () => {
    return (
        <View style={globalStyles.listHideButton}>
            <TouchableOpacity>
                <Text style={[globalStyles.txtDefault,{marginTop: 10}]}>Change password</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={[globalStyles.txtDefault,{marginTop: 10}]}>Change username</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AccountChangingSection;
