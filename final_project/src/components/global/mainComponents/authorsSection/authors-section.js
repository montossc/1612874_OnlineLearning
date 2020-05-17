import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import globalStyle from '../../styles';
import {Avatar} from 'react-native-elements';

//props: title, item: authors list
const AuthorsSection = props => {
    return (
        <View>
            <Text style={globalStyle.txtDefault}>{props.title}</Text>
            <ScrollView style={styles.containerAuthorList} horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    props.item.map(author =>
                        <TouchableOpacity style={styles.containerAuthor}>
                            <Avatar rounded={true} source={author.avatar} size={'large'}/>
                            <Text style={[globalStyle.txtDefault,{textAlign:'center'}]}>{author.name}</Text>
                        </TouchableOpacity>)
                }
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    containerAuthorList:{
        margin:10,
        marginLeft:0
    },
    containerAuthor:{
        alignItems:'center',
        width:85
    }
});
export default AuthorsSection;
