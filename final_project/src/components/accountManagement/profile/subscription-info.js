import React from 'react';
import globalStyles from '../../global/styles';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const SubscriptionInfo = props => {
    return (
        <View style={globalStyles.containerTextButton}>
            <Text style={globalStyles.txtItalicDefault}>Subscription:</Text>
            <Text style={[globalStyles.txtItalicSmall, styles.txtContent]}>{props.item}</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={globalStyles.txtDefault}>Change plan</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    txtContent: {
        marginTop:5,
        marginLeft: 30
    },
    btn:{
        marginTop: 20
    }
});
export default SubscriptionInfo;
