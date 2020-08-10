import React, {useContext, useEffect, useState} from "react";
import {Text, View, StyleSheet} from "react-native";

import {ThemeContext} from "../../../../App";
import globalStyles from "../../../globalVariables/styles";
import {color} from "../../../globalVariables/constant";
import TopicButton from "../../commonComponents/topic-button";
import {getCategoryByID} from "../../../core/services/category-service";

const UserTopics = ({favTopicsID, navigator}) => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const [favTopics, setFavTopics] = useState([])

    useEffect(() => {
        if (favTopicsID.length !== 0) {
            favTopicsID.forEach(topicID => {
                getCategoryByID(topicID).then((res) => {
                    setFavTopics(favTopics.concat(res))
                })
            })
        }
    },[])
    if (favTopicsID.length === 0) {
        return <View></View>
    }
    else {
        return (
            <View style={[globalStyles.containerTextButton, {borderColor: theme.foreground}]}>
                <Text
                    style={[globalStyles.txtItalicDefault, styles.containerTxt, {color: theme.foreground}]}>Interest:</Text>
                <View style={styles.containerInterestIcon}>
                    {
                        favTopics.map(topic => <TopicButton item={topic} color={color.LIGHT_BLUE}
                                                            navigator={navigator}/>)
                    }
                </View>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    containerInterestIcon:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    containerTxt:{
        marginTop: 10
    }

});
export default UserTopics;
