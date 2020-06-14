import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View, StyleSheet, ScrollView} from 'react-native';
import globalStyles from '../../global/styles'
import {Icon, SearchBar} from 'react-native-elements';
import {ThemeContext} from "../../../../App";
import {color} from "../../global/constant";
import {getSearchCourses, getSearchHistory} from "../../../core/services/search-service";
import CoursesList from "../../global/mainComponents/coursesList/courses-list";

const SearchHistory = props => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const [value, setValue] = useState('');
    const [searchesHistory, setSearchHisory] = useState(getSearchHistory);

    const renderSearchResul = () => {
        if (value === '') {
            return (<FlatList data={searchesHistory}
                              renderItem={({item}) =>
                                  (<TouchableOpacity style={styles.btnRecentSearch} onPress={() => setValue(`${item}`)}>
                                      <Icon name={'cached'} type={'material-icons'} color={theme.foreground}/>
                                      <Text style={[{
                                          marginLeft: 10,
                                          color: theme.foreground
                                      }, globalStyles.txtDefault]}>{item}</Text>
                                  </TouchableOpacity>)}
                              ListHeaderComponent={
                                  (<View
                                      style={[globalStyles.containerHeaderSection, {margin: 10, alignItems: 'center'}]}>
                                      <Text style={[globalStyles.txtDefault, {color: theme.foreground}]}>Recent
                                          searches</Text>
                                      <TouchableOpacity>
                                          <Text style={[{color: color.LIGHT_BLUE}, globalStyles.txtDefault]} onPress={() => setSearchHisory([])}>CLEAR
                                              ALL</Text>
                                      </TouchableOpacity>
                                  </View>)}/>)
        } else {
            const resultCourses = getSearchCourses(value);
            return (
                <ScrollView>
                    <CoursesList title={'Courses'} outerBtn={'See all >'} item={resultCourses} navigator={props.navigation}/>
                </ScrollView>
            );
        }
    }
    return (
        <View style={{backgroundColor: theme.background, flex: 1}}>
            <SearchBar placeholder={'Search...'}
                       onChangeText={(text) => setValue(text)}
                       value={value}
                        onEndEditing={() => searchesHistory.push(value)}/>
            {renderSearchResul()}
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
export default SearchHistory;
