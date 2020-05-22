import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import globalStyle from '../../global/styles';
import TopicButton from '../../global/commonComponent/topic-button';
import {color} from '../../global/constant';


const PopularSkills = props => {
    const skills = [{name : 'Angular'}, {name:'JavaScript'}, {name: 'C#'}, {name: 'Java'}, {name: 'Data Analysis'}, {name:'ASP.NET'}, {name: 'Node.js'}, {name: 'Design Pattern'}, {name:'Python'}, {name:'React'}, {name:'.Net'}];
    return (
        <View style={{marginBottom: 10}}>
            <Text style={globalStyle.txtDefault}>Popular Skills</Text>
            <ScrollView style={{marginVertical: 10}} horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    skills.map(skill => <TopicButton item={skill} color={color.LIGHT_BLUE} navigator={props.navigator}/>)
                }
            </ScrollView>
        </View>
    );
};

export default PopularSkills;
