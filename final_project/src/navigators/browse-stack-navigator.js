import React from "react";

import {createStackNavigator} from "@react-navigation/stack";

import {screenName} from "../globalVariables/constant";
import AuthorDetail from "../components/authorDetail/author-detail";
import Browse from "../components/main/browse/browse";
import CourseDetail from "../components/courseDetail/course-detail";
import CoursesList from "../components/mainComponents/coursesList/courses-list";
import PasswordChanging from "../components/accountManagement/profile/accountChanging/passwordChanging";
import Pricing from "../components/accountManagement/profile/pricing/pricing";
import Profile from "../components/accountManagement/profile/profile";
import RelatedPathsAndCourses from "../components/courseDetail/related-paths-and-courses";
import Setting from "../components/accountManagement/setting/setting";
import Feedback from "../components/accountManagement/setting/feedback";

const screenStack = createStackNavigator();
export const browseStack = () => {
    return (
        <screenStack.Navigator initialRouteName={screenName.BrowseScreen} mode={'modal'}>
            <screenStack.Screen name={screenName.BrowseScreen} component={Browse}/>
            <screenStack.Screen name={screenName.CourseDetailScreen} component={CourseDetail}
                                options={{headerShown: false}}/>
            <screenStack.Screen name={screenName.CourseListScreen} component={CoursesList}/>
            <screenStack.Screen name={screenName.AuthorDetailScreen} component={AuthorDetail}
                                options={{title: 'Author'}}/>
            <screenStack.Screen name={screenName.RelatedPathsAndCoursesScreen} component={RelatedPathsAndCourses}/>
            <screenStack.Screen name={screenName.ProfileScreen} component={Profile}/>
            <screenStack.Screen name={screenName.ChangePasswordScreen} component={PasswordChanging}/>
            <screenStack.Screen name={screenName.PricingScreen} component={Pricing}/>
            <screenStack.Screen name={screenName.SettingScreen} component={Setting}/>
            <screenStack.Screen name={screenName.FeedbackScreen} component={Feedback}/>
        </screenStack.Navigator>
    );
};
