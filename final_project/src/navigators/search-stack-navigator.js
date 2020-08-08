import React from "react";

import {createStackNavigator} from "@react-navigation/stack";

import {screenName} from "../globalVariables/constant";
import AuthorDetail from "../components/authorDetail/author-detail";
import CourseDetail from "../components/courseDetail/course-detail";
import CoursesList from "../components/mainComponents/coursesList/courses-list";
import RelatedPathsAndCourses from "../components/courseDetail/related-paths-and-courses";


const screenStack = createStackNavigator();
export const searchStack = () => {

    return (
        <screenStack.Navigator initialRouteName={screenName.SearchScreen}
                               screenOptions={{headerShown: false}}>
            <screenStack.Screen name={screenName.CourseDetailScreen} component={CourseDetail}
                                options={{headerShown: false}}/>
            <screenStack.Screen name={screenName.CourseListScreen} component={CoursesList}/>
            <screenStack.Screen name={screenName.AuthorDetailScreen} component={AuthorDetail}
                                options={{title: 'Author'}}/>
            {/*<screenStack.Screen name={screenName.RelatedPathsAndCoursesScreen} component={RelatedPathsAndCourses}/>

                                options={{headerShown: false}}/>*/}
        </screenStack.Navigator>
    );
};
