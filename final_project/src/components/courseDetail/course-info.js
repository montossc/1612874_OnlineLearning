import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Avatar, Rating} from 'react-native-elements';
import globalStyles from '../global/styles';

const CourseInfo = props => {
    return (
        <View style={{margin: 10}}>
            <Text style={styles.txtCourseName}>{props.item.name}</Text>
            <View style={styles.containerAuthorList}>
                {
                    props.item.author.map(item =>
                        <TouchableOpacity style={styles.containerAuthor}>
                            <Avatar rounded={true} size={'small'} source={item.avatar}/>
                            <Text style={[globalStyles.txtDefault, {marginLeft: 5}]}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
            <View style={styles.containerAuthorList}>
                <Text style={globalStyles.txtItalicSmall}>{props.item.levelRequirement}  .  {props.item.releaseDate}  .  {props.item.duration}</Text>
                <Rating style={{marginLeft: 20}} readonly={true} tintColor={'white'} imageSize={12} startingValue={props.item.star}/>
                <Text style={[globalStyles.txtItalicSmall, {marginLeft: 5}]}>({props.item.totalVote})</Text>
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    txtCourseName:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    containerAuthorList:{
        flexDirection: 'row'
    },
    containerAuthor:{
        margin: 10,
        marginLeft: 0,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 45,
        padding: 2,
        borderColor:'rgba(55,190,245,0.7)'
    }
});
export default CourseInfo;
