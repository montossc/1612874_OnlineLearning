import React from 'react';
import globalStyles from '../../global/styles';
import {Text, TouchableOpacity, View} from 'react-native';

const SubscriptionInfo = props => {
    return (
        <View style={globalStyles.listHideButton}>
            <Text style={[globalStyles.txtDefault, {fontStyle: 'italic', marginTop: 10}]}>Subscription:</Text>
            <Text style={[globalStyles.txtItalicSmall, {marginTop:5, marginLeft: 30}]}>{props.item.subscription}</Text>
            <TouchableOpacity>
                <Text style={[globalStyles.txtDefault, {marginTop: 10}]}>Change plan</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SubscriptionInfo;
