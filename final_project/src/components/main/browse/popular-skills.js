import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import globalStyle from '../../global/styles';
import TopicButton from '../../global/commonComponent/topic-button';
import {color} from '../../global/constant';
import {ThemeContext} from "../../../../App";
import iteduAPI from "../../../API/iteduAPI";


const PopularSkills = props => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const [categoryList, setCategoryList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        iteduAPI.get('/category/all', {})
            .then((response) => {
                if(response.isSuccess){
                    setCategoryList(response.data.payload);
                }
            })
        if (categoryList != []){
            setLoading(false);
        }
    })
    if (isLoading) {
        return <View style={{flex: 1}}>
            <ActivityIndicator size={'large'} style={{flex: 1, alignContent: 'center'}}/>
        </View>
    }
    else {
        return (
            <View style={{marginBottom: 10}}>
                <Text style={[globalStyle.txtDefault, {color: theme.foreground}]}>Categories</Text>
                <ScrollView style={{marginVertical: 10}} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        categoryList.map(skill => <TopicButton item={skill} color={color.LIGHT_BLUE}
                                                         navigator={props.navigator}/>)
                    }
                </ScrollView>
            </View>
        );
    }
};

export default PopularSkills;
