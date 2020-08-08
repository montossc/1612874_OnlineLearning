import React, {Component} from 'react';

import globalStyles from '../../globalVariables/styles';
import {Image, Text, View, StyleSheet} from 'react-native';
import {screenName} from '../../globalVariables/constant';

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: 0}
    }
    componentDidMount() {
        this.timer = setInterval(() =>{
            const newLoadingValue = this.state.loading + 1;
            this.setState({loading: newLoadingValue})
        }, 50);
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        if (this.state.loading >= 100){
            clearInterval(this.timer);
            this.props.navigation.navigate(screenName.LoginScreen);
        }
    }


    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
           <View style={[globalStyles.container, styles.containerPos]}>
               <Image style={styles.imgLogo} source={require('../../../assets/logo/background_logo.png')}/>
               <Text style={styles.txtLoading}>Loading.... {`${this.state.loading}`}%</Text>
           </View>
        );
    }
}
const styles = StyleSheet.create({
    imgLogo:{
        alignSelf: 'center'
    },
    txtLoading:{
        alignSelf: 'center'
    },
    containerPos:{
        marginTop: 200
    }
});
export default SplashScreen;
