import React from 'react';
import globalStyles from '../../styles';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import PathListItem from './path-list-item';

//props: title, outerBtn: button near the title, item: path list
const PathList = props => {
    return (
        <View style={[globalStyles.containerSection, {marginHorizontal: 10}]}>
            <View style={globalStyles.containerHeaderSection}>
                <Text style={[globalStyles.txtDefault, {alignSelf: 'center'}]}>{props.title}</Text>
                <TouchableOpacity style={globalStyles.btnOuterSection}>
                    <Text
                        style={[globalStyles.txtItalicSmall, {textDecorationLine: 'underline'}]}>{props.outerBtn}</Text>
                </TouchableOpacity>
            </View>
            <FlatList data={props.item}
                      renderItem={({item}) => (<PathListItem item={item}/>)}
            />
        </View>
    );
};

export default PathList;
