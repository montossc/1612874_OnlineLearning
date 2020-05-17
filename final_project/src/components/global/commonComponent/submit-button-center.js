import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

//props: name, onPress, color
const SubmitButtonCenter = props => {
    const mainColor = props.color;
    return (
        <TouchableOpacity style={[styles.btnCenterSubmit, {borderColor: mainColor}]} onPress={props.onPress}>
            <Text style={[styles.txtBtnSubmit, {color: mainColor}]}>{props.name}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    btnCenterSubmit: {
        alignSelf: 'center',
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderWidth: 2
    },
    txtBtnSubmit: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});
export default SubmitButtonCenter;
