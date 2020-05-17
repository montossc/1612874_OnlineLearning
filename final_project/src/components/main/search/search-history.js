import React from 'react';
import {FlatList, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import globalStyles from '../../global/styles'
import {Icon} from 'react-native-elements';

const SearchHistory = () => {
    const searchesHistory =['game design', 'react native'];
    return (
        <FlatList data={searchesHistory}
                  renderItem={({item}) =>
                      (<TouchableOpacity style={styles.btnRecentSearch}>
                        <Icon name={'cached'} type={'material-icons'}/>
                        <Text style={[{marginLeft: 10}, globalStyles.txtDefault]}>{item}</Text>
                    </TouchableOpacity>)}
                  ListHeaderComponent={
                      (<View style={[globalStyles.containerHeaderSection, {margin: 10, alignItems: 'center'}]}>
                          <Text style={globalStyles.txtDefault}>Recent searches</Text>
                          <TouchableOpacity>
                              <Text style={[{color: 'blue'}, globalStyles.txtDefault]}>CLEAR ALL</Text>
                          </TouchableOpacity>
                      </View>)}/>
    );
};
const styles = StyleSheet.create({
    btnRecentSearch:{
        alignSelf: 'stretch',
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center'
    }
});
export default SearchHistory;
