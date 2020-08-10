import React, {useEffect, useState} from "react";
import {Dimensions, TextInput, View, StyleSheet} from "react-native";

import {Icon} from "react-native-elements";



const WINDOW_WIDTH = Dimensions.get('window').width;
const InputBox = ({containerStyle, placeholder, changeTextEvent, value,
                      secureText, iconName, iconType, iconOnPress}) => {
    const [hasIcon, setHasIcon] = useState(true)
    useEffect(() => {
        if (iconName === '')
            setHasIcon(false)
    }, [])
    return(
        <View style={containerStyle}>
            {hasIcon && <Icon name={iconName} type={iconType} onPress={iconOnPress} containerStyle={styles.symbol}/>}
            <TextInput
                style={styles.txtInput}
                placeholder={placeholder}
                onChangeText={changeTextEvent}
                value={value}
                secureTextEntry={secureText}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    containerTxtInput:{
        width: WINDOW_WIDTH - 100,
        alignSelf:'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        marginVertical: 10
    },
    txtInput:{
        padding: 10,
        paddingLeft: 50
    },
    symbol:{
        position: 'absolute',
        marginLeft: 20
    }
})
InputBox.defaultProps = {
    containerStyle: styles.containerTxtInput,
    secureText: false,
    iconName: '',
    iconType: '',
};
export default InputBox
