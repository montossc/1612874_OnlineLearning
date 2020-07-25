import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View, StyleSheet, ScrollView} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {ThemeContext} from "../../../../App";
import CoursesList from "../../global/mainComponents/coursesList/courses-list";
import iteduAPI from "../../../API/iteduAPI";
import globalStyles from "../../global/styles";

const Search = props => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const [value, setValue] = useState('');
    const [resultCourses, setResultCourses] = useState([]);

    useEffect(() => {
            if (value !== '') {
                iteduAPI.post('/course/search',{
                    keyword: `${value}`,
                    limit: 20,
                    offset: 0
                }).then((response) => {
                    if (response.isSuccess) {
                        setResultCourses(response.data.payload);
                    }
            })
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
