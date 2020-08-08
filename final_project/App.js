import React, {createContext, useEffect, useReducer, useState} from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {authenReducer} from "./src/core/reducers/authentication-reducer";
import {screenName, themes} from './src/globalVariables/constant';
import {getTheme} from "./src/core/services/setting-service";
import {login} from "./src/core/services/authentication-service";
import {tabNavigator} from "./src/navigators/app-tab-navigator";
import Login from './src/components/authentication/login/login';
import PasswordRecovery from './src/components/authentication/passwordRecovery/password-recovery';
import Register from './src/components/authentication/register/register';
import SplashScreen from './src/components/splash-screen/splash-screen';


/*const downloadStack = () => {
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
};*/

const loginStack = createStackNavigator();

export const AuthenticationContext = createContext();
export const UserAvatarContext = createContext();
export const ThemeContext = createContext();

const initAuthenState = {
    isAuthenticated: false,
    userInfo: null,
    token: null,
    message: ''
}
export default function App() {
    const [authenState, dispatch] = useReducer(authenReducer, initAuthenState);
    const [userAvatar, setUserAvatar] = useState('');
    const [bookmarkedCourses, setBookmarkedCourses] = useState([]);
    const [ownedCourses, setOwnedCourses] = useState(null);

    const [theme, setTheme] = useState(getTheme() === 'light' ? themes.light : themes.dark);
    useEffect(() => {
        if (authenState.userInfo) {
            setUserAvatar(authenState.userInfo.avatar)
        }
    }, [authenState.userInfo])
    return (
        <AuthenticationContext.Provider value={{authenState, login: login(dispatch)}}>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <UserAvatarContext.Provider value={{userAvatar, setUserAvatar}}>
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
                </UserAvatarContext.Provider>
            </ThemeContext.Provider>
        </AuthenticationContext.Provider>
    );
}
