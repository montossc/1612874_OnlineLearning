import React from 'react';
import globalStyles from '../../styles';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import PathListItem from './path-list-item';

//props: title, outerBtn: button near the title, item: path list
const PathList = props => {
    props.navigation.setOptions({headerShown: false});
    return (
        <View style={[globalStyles.containerSection, {marginHorizontal: 10}]}>
            <View style={globalStyles.containerHeaderSection}>
                <Text style={[globalStyles.txtDefault, {alignSelf: 'center'}]}>{props.route.params.title}</Text>
                <TouchableOpacity style={globalStyles.btnOuterSection}>
                    <Text
                        style={[globalStyles.txtItalicSmall, {textDecorationLine: 'underline'}]}>{props.route.params.outerBtn}</Text>
                </TouchableOpacity>
            </View>
            <FlatList data={props.route.params.item}
                      renderItem={({item}) => (<PathListItem item={item} navigator={props.navigation}/>)}
            />
        </View>
    );
};

export default PathList;
