import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CoursesSectionItem from './courses-section-item';
import globalStyles from '../../styles';

const CoursesSection = props => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={[globalStyles.txtDefault,{alignSelf:'center'}]}>{props.title}</Text>
                <TouchableOpacity style={styles.btnSeeAll}>
                    <Text style={[globalStyles.txtItalicSmall, {textDecorationLine:'underline'}]}>See all ></Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
                props.item.map(course => <CoursesSectionItem item={course}></CoursesSectionItem>)
            }
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20,
    },
    btnSeeAll: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default CoursesSection;
