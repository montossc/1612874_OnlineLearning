import React from "react";
import {Text, View, StyleSheet} from "react-native";

import {color} from "../../globalVariables/constant";
import globalStyles from "../../globalVariables/styles";

const fullBarWidth = 170;
const ProgressBar = ({percentage}) => {
    return (
        <View style={styles.container}>
            <View style={styles.progressBarContainer}>
                <View style={[styles.progressBar, {width: percentage / 100 * fullBarWidth}]}/>
            </View>
            <Text style={[globalStyles.txtItalicSmall, {color: color.GREEN}]}> {percentage}%</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: fullBarWidth + 30,
        justifyContent: 'space-between'
    },
    progressBarContainer: {
        height: 10,
        width: fullBarWidth,
        borderRadius: 30,
        backgroundColor: color.LIGHT_GRAY,
        borderWidth: 1,
    },
    progressBar: {
        height: 10,
        borderRadius: 30,
        backgroundColor: color.GREEN
    }
})

export default ProgressBar
