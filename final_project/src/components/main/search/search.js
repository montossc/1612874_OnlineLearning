import React, {useContext, useEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Icon, SearchBar} from 'react-native-elements';
import {AuthenticationContext, ThemeContext} from "../../../../App";
import CoursesList from "../../mainComponents/coursesList/courses-list";
import globalStyles from "../../../globalVariables/styles";
import {delSearchHistory, getSearchHistory, searchCourses} from "../../../core/services/search-service";
import {color} from "../../../globalVariables/constant";

const Search = props => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const authenContext = useContext(AuthenticationContext)
    const [value, setValue] = useState('');
    const [resultCourses, setResultCourses] = useState([]);
    const [searchHis, setSearchHis] = useState([])
    const [reload, setReload] = useState(0)

    useEffect(() => {
        getSearchHistory(authenContext.authenState.token).then(setSearchHis)
    }, [reload])
    useEffect(() => {
        if (value !== '') {
            searchCourses(value).then(setResultCourses)
        }
    }, [value])

    const onDeleteHistory = (historyID) => {
        delSearchHistory(historyID, authenContext.authenState.token).then(() => {
            setReload(reload + 1);
        })
    }
    const onSearchAgain = (content) => {
        setValue(content)
    }
    const onClearAll = () => {
        searchHis.forEach(search => {
            delSearchHistory(search.history, authenContext.authenState.token).then()
        })
        setReload(reload + 1);
    }

    const renderSearchHistory = () => {
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
                        <Icon name={'clear'} type={'material-icons'} color={theme.foreground}
                              onPress={onDeleteHistory(search.id)}/>
                        <TouchableOpacity onPress={onSearchAgain(search.content)}>
                            <Icon name={'history'} type={'material-icons'} color={theme.foreground}/>
                            <Text style={[globalStyles.txtDefault, {color: theme.foreground}]}>{search.content}</Text>
                        </TouchableOpacity>
                    </View>
                )
                }
            </ScrollView>
        )

    }
    return (
        <View style={{backgroundColor: theme.background, flex: 1}}>
            <SearchBar placeholder={'Search...'}
                       onChangeText={(text) => setValue(text)}
                       value={value}
            />
            {
                (value === '') ?
                    renderSearchHistory() :
                    <ScrollView>
                        <Text
                            style={[globalStyles.txtItalicSmall, globalStyles.container]}>Found {resultCourses.count} result(s)</Text>
                        <CoursesList title={'Result courses'} outerBtn={''} item={resultCourses.rows}
                                     navigator={props.navigation}/>
                    </ScrollView>
            }

        </View>
    );
};
const styles = StyleSheet.create({
    containerRecentSearchHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerRecentSearchItem: {
        flexDirection: 'row-reverse',
        paddingVertical: 10
    }
});
export default Search;
