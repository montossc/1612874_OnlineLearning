import React from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import globalStyles from '../../styles';
import {Rating} from 'react-native-elements';

//props: item: course
const CoursesListItem = props => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.imgThumbnail} source={props.item.thumbnail}/>
            <View style={styles.containerCourseInfo}>
                <Text style={globalStyles.txtDefault}>{props.item.name}</Text>
                <Text style={globalStyles.txtItalicSmall}>{props.item.author}</Text>
                <Text style={globalStyles.txtItalicSmall}>{`${props.item.levelRequirement} . ${props.item.releaseDate} . ${props.item.duration}`}</Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Rating readonly={true} tintColor={'white'} imageSize={12} startingValue={props.item.star}/>
                    <Text style={[globalStyles.txtItalicSmall, {marginLeft: 5}]}>({props.item.totalVote})</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container:{
        borderBottomWidth: 1,
        marginVertical: 5,
        flexDirection: 'row',
        flex: 1,
        paddingBottom: 10
    },
    containerCourseInfo:{
        alignSelf:'center',
        marginLeft: 10,
        flex: 3
    },
    imgThumbnail:{
        flex: 1,
        resizeMode:'contain'
    }
});
export default CoursesListItem;
