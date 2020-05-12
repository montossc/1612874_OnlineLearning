import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles from '../../styles';
import PathSectionItem from './path-section-item';

const PathSection = props => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={[globalStyles.txtDefault,{alignSelf:'center'}]}>{props.title}</Text>
                <TouchableOpacity style={styles.btnSeeAll}>
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
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20,
    },
    btnSeeAll: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default PathSection;
