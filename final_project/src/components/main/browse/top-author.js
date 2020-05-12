import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import globalStyle from '../../global/styles';
import {Avatar} from 'react-native-elements';

const TopAuthor = () => {
    const authors = [
        {
            name: 'Deborah Kurata',
            avatar: {uri: 'https://avatars2.githubusercontent.com/u/7987365?s=460&v=4'}
        },
        {
            name: 'Scott Allen',
            avatar: {uri: 'https://pluralsight.imgix.net/author/lg/44cb43b3-83e4-4458-9b39-a7ded3411616.jpg'}
        },
        {
            name: 'Deborah Kurata',
            avatar: {uri: 'https://avatars2.githubusercontent.com/u/7987365?s=460&v=4'}
        },
        {
            name: 'Scott Allen',
            avatar: {uri: 'https://pluralsight.imgix.net/author/lg/44cb43b3-83e4-4458-9b39-a7ded3411616.jpg'}
        },
        {
            name: 'Deborah Kurata',
            avatar: {uri: 'https://avatars2.githubusercontent.com/u/7987365?s=460&v=4'}
        },
        {
            name: 'Scott Allen',
            avatar: {uri: 'https://pluralsight.imgix.net/author/lg/44cb43b3-83e4-4458-9b39-a7ded3411616.jpg'}
        },
        {
            name: 'Deborah Kurata',
            avatar: {uri: 'https://avatars2.githubusercontent.com/u/7987365?s=460&v=4'}
        },
        {
            name: 'Scott Allen',
            avatar: {uri: 'https://pluralsight.imgix.net/author/lg/44cb43b3-83e4-4458-9b39-a7ded3411616.jpg'}
        }
    ];
    return (
        <View style={{marginBottom: 10}}>
            <Text style={globalStyle.txtDefault}>Top authors</Text>
            <ScrollView style={{margin:10, marginLeft:0}} horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    authors.map(author =>
                        <TouchableOpacity style={{alignItems:'center',width:85}}>
                            <Avatar rounded={true} source={author.avatar} size={'large'}/>
                            <Text style={[globalStyle.txtDefault,{textAlign:'center'}]}>{author.name}</Text>
                        </TouchableOpacity>)
                }
            </ScrollView>
        </View>
    );
};

export default TopAuthor;
