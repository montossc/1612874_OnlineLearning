import 'react-native-gesture-handler';
import React, {createContext, useContext, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {color, screenName, themes} from './src/components/global/constant';
import Login from './src/components/authentication/login/login';
import Register from './src/components/authentication/register/register';
import PasswordRecovery from './src/components/authentication/passwordRecovery/password-recovery';
import Home from './src/components/main/home/home';
import Download from './src/components/main/download/download';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Avatar, Icon, SearchBar} from 'react-native-elements';
import Browse from './src/components/main/browse/browse';
import SearchHistory from './src/components/main/search/search-history';
import CourseDetail from './src/components/courseDetail/course-detail';
import CoursesList from './src/components/global/mainComponents/coursesList/courses-list';
import AuthorDetail from './src/components/authorDetail/author-detail';
import RelatedPathsAndCourses from './src/components/courseDetail/related-paths-and-courses';
import SubjectDetail from './src/components/subjectDetail/subject-detail';
import PathList from './src/components/global/mainComponents/pathList/path-list';
import PathDetail from './src/components/pathDetail/path-detail';
import SearchResult from './src/components/main/search/search-result';
import Profile from './src/components/accountManagement/profile/profile';
import UsernameChanging from './src/components/accountManagement/profile/accountChanging/username-changing';
import PasswordChanging from './src/components/accountManagement/profile/accountChanging/passwordChanging';
import Pricing from './src/components/accountManagement/profile/pricing/pricing';
import SplashScreen from './src/components/splash-screen/splash-screen';
import {getAllCourses, getBookmarkedCourses} from "./src/core/services/courses-service";
import {getTheme} from "./src/core/services/setting-service";
import Setting from "./src/components/accountManagement/setting/setting";

const loginStack = createStackNavigator();
const mainTab = createBottomTabNavigator();
const screenStack = createStackNavigator();


const homeStack = () => {
    return (
        <screenStack.Navigator mode={'modal'} initialRouteName={screenName.HomeScreen}>
            <screenStack.Screen name={screenName.HomeScreen} component={Home}/>
            <screenStack.Screen name={screenName.CourseDetailScreen} component={CourseDetail}
                                options={{headerShown: false}}/>
            <screenStack.Screen name={screenName.CourseListScreen} component={CoursesList}/>
            <screenStack.Screen name={screenName.AuthorDetailScreen} component={AuthorDetail}
                                options={{title: 'Author'}}/>
            <screenStack.Screen name={screenName.RelatedPathsAndCoursesScreen} component={RelatedPathsAndCourses}/>
            <screenStack.Screen name={screenName.SubjectDetailScreen} component={SubjectDetail}/>
            <screenStack.Screen name={screenName.PathListScreen} component={PathList}/>
            <screenStack.Screen name={screenName.PathDetailScreen} component={PathDetail}
                                options={{headerShown: false}}/>
            <screenStack.Screen name={screenName.ProfileScreen} component={Profile}/>
            <screenStack.Screen name={screenName.ChangeUsernameScreen} component={UsernameChanging}/>
            <screenStack.Screen name={screenName.ChangePasswordScreen} component={PasswordChanging}/>
            <screenStack.Screen name={screenName.PricingScreen} component={Pricing}/>
            <screenStack.Screen name={screenName.SettingScreen} component={Setting}/>
        </screenStack.Navigator>
    );
};
const downloadStack = () => {
    return (
        <screenStack.Navigator initialRouteName={screenName.DownloadScreen}>
            <screenStack.Screen name={screenName.DownloadScreen} component={Download}/>
            <screenStack.Screen name={screenName.CourseDetailScreen} component={CourseDetail}
                                options={{headerShown: false}}/>
            <screenStack.Screen name={screenName.CourseListScreen} component={CoursesList}/>
            <screenStack.Screen name={screenName.AuthorDetailScreen} component={AuthorDetail}
                                options={{title: 'Author'}}/>
            <screenStack.Screen name={screenName.RelatedPathsAndCoursesScreen} component={RelatedPathsAndCourses}/>
            <screenStack.Screen name={screenName.SubjectDetailScreen} component={SubjectDetail}/>
            <screenStack.Screen name={screenName.PathListScreen} component={PathList}/>
            <screenStack.Screen name={screenName.PathDetailScreen} component={PathDetail}
                                options={{headerShown: false}}/>
            <screenStack.Screen name={screenName.ProfileScreen} component={Profile}/>
            <screenStack.Screen name={screenName.ChangeUsernameScreen} component={UsernameChanging}/>
            <screenStack.Screen name={screenName.ChangePasswordScreen} component={PasswordChanging}/>
            <screenStack.Screen name={screenName.PricingScreen} component={Pricing}/>
            <screenStack.Screen name={screenName.SettingScreen} component={Setting}/>
        </screenStack.Navigator>
    );
};
const browseStack = () => {
    return (
        <screenStack.Navigator initialRouteName={screenName.DownloadScreen} mode={'modal'}>
            <screenStack.Screen name={screenName.BrowseScreen} component={Browse}/>
            <screenStack.Screen name={screenName.CourseDetailScreen} component={CourseDetail}
                                options={{headerShown: false}}/>
            <screenStack.Screen name={screenName.CourseListScreen} component={CoursesList}/>
            <screenStack.Screen name={screenName.AuthorDetailScreen} component={AuthorDetail}
                                options={{title: 'Author'}}/>
            <screenStack.Screen name={screenName.RelatedPathsAndCoursesScreen} component={RelatedPathsAndCourses}/>
            <screenStack.Screen name={screenName.SubjectDetailScreen} component={SubjectDetail}/>
            <screenStack.Screen name={screenName.PathListScreen} component={PathList}/>
            <screenStack.Screen name={screenName.PathDetailScreen} component={PathDetail}
                                options={{headerShown: false}}/>
            <screenStack.Screen name={screenName.ProfileScreen} component={Profile}/>
            <screenStack.Screen name={screenName.ChangeUsernameScreen} component={UsernameChanging}/>
            <screenStack.Screen name={screenName.ChangePasswordScreen} component={PasswordChanging}/>
            <screenStack.Screen name={screenName.PricingScreen} component={Pricing}/>
            <screenStack.Screen name={screenName.SettingScreen} component={Setting}/>
        </screenStack.Navigator>
    );
};
const searchStack = () => {
    let [value, setValue] = useState('');
    return (
        <screenStack.Navigator initialRouteName={screenName.SearchHistoryScreen}
                               screenOptions={{
                                   headerTitle: () => (<SearchBar placeholder={'Search...'}
                                                                  onChangeText={(text) => setValue(text)}
                                                                  value={value}/>),
                               }}>
            <screenStack.Screen name={screenName.SearchHistoryScreen} component={SearchHistory}/>
            <screenStack.Screen name={screenName.SearchResultScreen} component={SearchResult}/>
            <screenStack.Screen name={screenName.CourseDetailScreen} component={CourseDetail}
                                options={{headerShown: false}}/>
            <screenStack.Screen name={screenName.CourseListScreen} component={CoursesList}/>
            <screenStack.Screen name={screenName.AuthorDetailScreen} component={AuthorDetail}
                                options={{title: 'Author'}}/>
            <screenStack.Screen name={screenName.RelatedPathsAndCoursesScreen} component={RelatedPathsAndCourses}/>
            <screenStack.Screen name={screenName.SubjectDetailScreen} component={SubjectDetail}/>
            <screenStack.Screen name={screenName.PathListScreen} component={PathList}/>
            <screenStack.Screen name={screenName.PathDetailScreen} component={PathDetail}
                                options={{headerShown: false}}/>
        </screenStack.Navigator>
    );
};
const tabNavigator = () => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    return (
        <mainTab.Navigator initialRouteName={screenName.HomeScreen}
                           screenOptions={({route}) => ({
                               tabBarIcon: ({color, size}) => {
                                   let iconName;

                                   if (route.name === screenName.HomeScreen) {
                                       iconName = 'home';
                                   } else if (route.name === screenName.DownloadScreen) {
                                       iconName = 'get-app';
                                   } else if (route.name === screenName.BrowseScreen) {
                                       iconName = 'explore';
                                   } else if (route.name === screenName.SearchHistoryScreen) {
                                       iconName = 'search';
                                   }
                                   return <Icon name={iconName} type={'material-icons'} size={size} color={color}/>;
                               },
                           })}
                           tabBarOptions={{
                               activeTintColor: color.LIGHT_BLUE,
                               inactiveTintColor: color.LIGHT_GRAY,
                               style: {backgroundColor: theme.background}
                           }}


        >
            <mainTab.Screen name={screenName.HomeScreen} component={homeStack}/>
            <mainTab.Screen name={screenName.DownloadScreen} component={downloadStack}/>
            <mainTab.Screen name={screenName.BrowseScreen} component={browseStack}/>
            <mainTab.Screen name={screenName.SearchHistoryScreen} component={searchStack} options={{title: 'Search'}}/>
        </mainTab.Navigator>
    );
};

export const UserProfileContext = createContext();
export const CoursesContext = createContext();
export const ThemeContext = createContext();
export default function App() {
    const [userProfile, setUserProfile] = useState(null);
    const [allCourses] = useState(getAllCourses);
    const [bookmarkedCourses, setBookmarkedCourses] = useState(getBookmarkedCourses);
    const [theme, setTheme] = useState(getTheme() === 'light' ? themes.light : themes.dark);
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
        <UserProfileContext.Provider value={{userProfile, setUserProfile}}>
            <CoursesContext.Provider
                value={{allCourses, bookmarkedCourses, setBookmarkedCourses/*, downloadedCourses, setDownloadedCourses*/}}>
                <NavigationContainer>
                    <loginStack.Navigator initialRouteName={screenName.SplashScreen}
                                          screenOptions={{headerShown: false}}>
                        <loginStack.Screen name={screenName.SplashScreen} component={SplashScreen}/>
                        <loginStack.Screen name={screenName.LoginScreen} component={Login}/>
                        <loginStack.Screen name={screenName.RegisterScreen} component={Register}/>
                        <loginStack.Screen name={screenName.PasswordRecoveryScreen} component={PasswordRecovery}/>
                        <loginStack.Screen name={screenName.Tab} component={tabNavigator}/>
                    </loginStack.Navigator>
                </NavigationContainer>
            </CoursesContext.Provider>
        </UserProfileContext.Provider>
        </ThemeContext.Provider>
    );
}
