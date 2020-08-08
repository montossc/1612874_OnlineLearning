import React, {useContext, useEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {ThemeContext} from "../../../../App";
import CoursesList from "../../mainComponents/coursesList/courses-list";
import globalStyles from "../../../globalVariables/styles";
import {searchCourses} from "../../../core/services/search-service";

const Search = props => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const [value, setValue] = useState('');
    const [resultCourses, setResultCourses] = useState([]);

    useEffect(() => {
            if (value !== '') {
                searchCourses(value).then(setResultCourses)
            }
    }, [value])

    return (
        <View style={{backgroundColor: theme.background, flex: 1}}>
            <SearchBar placeholder={'Search...'}
                       onChangeText={(text) => setValue(text)}
                       value={value}
                        />
            {
                (value === '') ?
                    <ScrollView></ScrollView> :
            <ScrollView>
                <Text style={[globalStyles.txtItalicSmall, globalStyles.container]}>Found {resultCourses.count} result(s)</Text>
                <CoursesList title={'Result courses'} outerBtn={''} item={resultCourses.rows} navigator={props.navigation}/>
            </ScrollView>
            }

        </View>
    );
};
const styles = StyleSheet.create({
    btnRecentSearch: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center'
    }
});
export default Search;
