import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import globalStyles from '../global/styles';

const CourseOptionIcon = () => {
    return (
        <View style={styles.containerOptionIcon}>
            <TouchableOpacity style={{alignItems:'center'}}>
                <Icon name={'bookmark'} type={'material-icons'} size={30}
                      containerStyle={styles.containerIcon}/>
                <Text style={globalStyles.txtDefault}>Bookmark</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center'}}>
                <Icon name={'playlist-add'} type={'material-icons'} size={30}
                      containerStyle={styles.containerIcon}/>
                <Text style={globalStyles.txtDefault}>Add to Channel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center'}}>
                <Icon name={'cloud-download'} type={'material-icons'} size={30}
                      containerStyle={styles.containerIcon}/>
                <Text style={globalStyles.txtDefault}>Download</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    containerOptionIcon: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
    },
    containerIcon: {
        backgroundColor: 'lightgray',
        borderRadius: 90,
        padding: 5
    },
});
export default CourseOptionIcon;
