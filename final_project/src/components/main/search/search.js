import React, {useContext, useEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView, Picker} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {AuthenticationContext, ThemeContext} from "../../../../App";
import CoursesList from "../../mainComponents/coursesList/courses-list";
import globalStyles from "../../../globalVariables/styles";
import {searchCourses} from "../../../core/services/search-service";
import AuthorsSection from "../../mainComponents/authorsSection/authors-section";
import SearchHistory from "./search-history";
import {color} from "../../../globalVariables/constant";

const Search = props => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const authenContext = useContext(AuthenticationContext)
    const [value, setValue] = useState('');
    const [searchContent, setSearchContent] = useState('')
    const [searchResults, setsearchResults] = useState([]);
    const [reload, setReload] = useState(0)
    const [isLoading, setLoading] = useState(true)
    const [showCourseResult, setShowCourseResult] = useState(true)
    const [showAuthorResult, setShowAuthorResult] = useState(true)
    const [pickerSelected, setPickerSelected] = useState('all')

    useEffect(() => {
        if (value === '') {
            setLoading(true);
            setSearchContent('')
            setReload(reload + 1)
        }
    }, [value])
    useEffect(() => {
        if (searchContent !== '') {
            searchCourses(value, authenContext.authenState.token).then((res) => {
                setsearchResults(res)
                setLoading(false)
            })
        }
    }, [searchContent])
    const enterSearch = () => {
        if (value !== '') {
            setSearchContent(value)
        }
    }
    const onPickerSelect = (item) => {
        setPickerSelected(item)
        if (item === 'all') {
            setShowCourseResult(true)
            setShowAuthorResult(true)
        }
        else if (item === 'courses') {
            setShowCourseResult(true)
            setShowAuthorResult(false)
        }
        else {
            setShowCourseResult(false)
            setShowAuthorResult(true)
        }
    }
    return (
        <View style={{backgroundColor: theme.background, flex: 1}}>
            <SearchBar placeholder={'Search...'}
                       onChangeText={(text) => setValue(text)}
                       value={value}
                       onSubmitEditing={enterSearch}
            />
            {
                (isLoading === true) ?
                    <SearchHistory reload={reload} setReload={setReload} setValue={setValue}
                                   setSearchContent={setSearchContent}/> :
                    <ScrollView>
                        <Text
                            style={[globalStyles.txtItalicSmall, globalStyles.container, {color: theme.foreground}]}>Found {searchResults.courses.total} course(s)
                            and {searchResults.instructors.total} author(s)</Text>
                        <Picker style={[styles.pickerStyle, {borderColor: theme.foreground}]} selectedValue={pickerSelected} itemStyle={{color: theme.foreground}}
                                onValueChange={(itemValue, itemIndex) => {
                                    onPickerSelect(itemValue)
                                }}>
                            <Picker.Item label={'All'} value={'all'} />
                            <Picker.Item label={'Courses'} value={'courses'} />
                            <Picker.Item label={'Authors'} value={'authors'} />
                        </Picker>
                        {(searchResults.instructors.total !== 0) && (showAuthorResult) &&
                        <AuthorsSection title={'Result authors'} item={searchResults.instructors.data}
                                        navigator={props.navigation}/>}
                        {(searchResults.courses.total !== 0) && (showCourseResult) &&
                        <CoursesList title={'Result courses'} outerBtn={''} item={searchResults.courses.data}
                                     navigator={props.navigation} topMargin={5}/>}
                    </ScrollView>
            }

        </View>
    );
};
const styles = StyleSheet.create({
    pickerStyle: {
        marginBottom: 30,
        height: 50,
        width: 130
    }
})
export default Search;
