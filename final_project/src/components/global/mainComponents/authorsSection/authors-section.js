import React, {useContext} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import globalStyle from '../../styles';
import {Avatar} from 'react-native-elements';
import {screenName} from '../../constant';
import {ThemeContext} from "../../../../../App";

//props: title, item: authors list
const AuthorsSection = props => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    return (
        <View>
            <Text style={[globalStyle.txtDefault, {color: theme.foreground}]}>{props.title}</Text>
            <ScrollView style={styles.containerAuthorList} horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    props.item.map(author =>
                        <TouchableOpacity style={styles.containerAuthor} onPress={() => props.navigator.push(screenName.AuthorDetailScreen, {item: author, navigator: props.navigator})}>
                            <Avatar rounded={true} source={{uri: `${author['user.avatar']}`}} size={'large'}/>
                            <Text style={[globalStyle.txtDefault,{textAlign:'center', color: theme.foreground}]}>{author['user.name']}</Text>
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
