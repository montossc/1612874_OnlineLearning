import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import globalStyles from "../../../globalVariables/styles";
import {color} from "../../../globalVariables/constant";
import {Icon} from "react-native-elements";
import React, {useContext, useEffect, useState} from "react";
import {delSearchHistory, getSearchHistory} from "../../../core/services/search-service";
import {AuthenticationContext, ThemeContext} from "../../../../App";

const SearchHistory = ({reload, setReload, setValue, setSearchContent}) => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const authenContext = useContext(AuthenticationContext)
    const [searchHis, setSearchHis] = useState([])

    useEffect(() => {
        getSearchHistory(authenContext.authenState.token).then(setSearchHis)
    }, [reload])

    const onDeleteHistory = (historyID) => {
        delSearchHistory(historyID, authenContext.authenState.token).then(() => {
            setReload(reload + 1);
        })
    }
    const onSearchAgain = (content) => {
        setValue(content)
        setSearchContent(content)
    }
    const onClearAll = async () => {
        await searchHis.forEach(search => {
            delSearchHistory(search.id, authenContext.authenState.token).then()
        })
        setReload(reload + 1)
    }
    return (
        <ScrollView style={[globalStyles.container, {backgroundColor: theme.background}]}>
            <View style={styles.containerRecentSearchHeader}>
                <Text style={[globalStyles.txtDefault, {color: theme.foreground}]}>Search history</Text>
                <TouchableOpacity onPress={onClearAll}>
                    <Text style={[globalStyles.txtDefault, {color: color.LIGHT_BLUE}]}>CLEAR ALL</Text>
                </TouchableOpacity>
            </View>
            {(searchHis !== []) &&
            searchHis.map(search =>
                <View style={styles.containerRecentSearchItem}>
                    <Icon name={'clear'} type={'material-icons'} color={theme.foreground} onPress={() => {onDeleteHistory(search.id)}}/>
                    <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => {onSearchAgain(search.content)}}>
                        <Icon name={'history'} type={'material-icons'} color={theme.foreground}/>
                        <Text style={[globalStyles.txtDefault, {color: theme.foreground, paddingLeft: 10}]}>{search.content}</Text>
                    </TouchableOpacity>
                </View>
            )
            }
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    containerRecentSearchHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerRecentSearchItem: {
        flexDirection: 'row-reverse',
        paddingVertical: 10,
        justifyContent: 'space-between'
    }
});
export default SearchHistory
