import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles from '../../styles';
import PathSectionItem from './path-section-item';

//props: title, item: path list
const PathSection = props => {
    return (
        <View style={globalStyles.containerSection}>
            <View style={globalStyles.containerHeaderSection}>
                <Text style={[globalStyles.txtDefault,{alignSelf:'center'}]}>{props.title}</Text>
                <TouchableOpacity style={globalStyles.btnOuterSection}>
                    <Text style={[globalStyles.txtItalicSmall, {textDecorationLine:'underline'}]}>See all ></Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    props.item.map(path => <PathSectionItem item={path}></PathSectionItem>)
                }
            </ScrollView>
        </View>
    );
};

export default PathSection;
