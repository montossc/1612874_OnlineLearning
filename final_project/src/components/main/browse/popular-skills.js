import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import globalStyle from '../../global/styles';


const PopularSkills = () => {
    const skills = ['Angular', 'JavaScript', 'C#', 'Java', 'Data Analysis', 'ASP.NET', 'Node.js', 'Design Pattern', 'Python', 'React', '.Net'];
    return (
        <View style={{marginBottom: 10}}>
            <Text style={globalStyle.txtDefault}>Popular Skills</Text>
            <ScrollView style={{marginVertical: 10}} horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    skills.map(skill =>
                        <TouchableOpacity style={styles.iconInterest}>
                            <Text style={styles.txtInterest}>{skill}</Text>
                        </TouchableOpacity>)
                }
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    iconInterest: {
        margin: 5,
        borderWidth: 2,
        borderRadius: 60,
        height: 30,
        borderColor: 'rgba(55,190,245,0.7)',
        justifyContent: 'center',
        alignItems:'center',
        padding: 10
    },
    txtInterest:{
        fontSize: 12,
        color: 'rgba(55,190,245,0.7)',
    }
});
export default PopularSkills;
