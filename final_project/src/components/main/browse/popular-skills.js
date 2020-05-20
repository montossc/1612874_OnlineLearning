import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import globalStyle from '../../global/styles';
import TopicButton from '../../global/commonComponent/topic-button';
import {color} from '../../global/constant';


const PopularSkills = () => {
    const skills = ['Angular', 'JavaScript', 'C#', 'Java', 'Data Analysis', 'ASP.NET', 'Node.js', 'Design Pattern', 'Python', 'React', '.Net'];
    return (
        <View style={{marginBottom: 10}}>
            <Text style={globalStyle.txtDefault}>Popular Skills</Text>
            <ScrollView style={{marginVertical: 10}} horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    skills.map(skill => <TopicButton name={skill} color={color.LIGHT_BLUE}/>)
                }
            </ScrollView>
        </View>
    );
};

export default PopularSkills;
