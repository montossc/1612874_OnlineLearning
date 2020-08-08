import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import globalStyle from '../../../globalVariables/styles';
import TopicButton from '../../commonComponents/topic-button';
import {color} from '../../../globalVariables/constant';
import {ThemeContext} from "../../../../App";
import iteduAPI from "../../../API/iteduAPI";
import {getCategories} from "../../../core/services/category-service";


const PopularSkills = props => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const [categoryList, setCategoryList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
       getCategories().then((res) => {
           setCategoryList(res.data)
           setLoading(res.loading)
       })
    },[])
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
