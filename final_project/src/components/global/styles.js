import {Dimensions, StyleSheet} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
export default StyleSheet.create({
    userInput: {
        width: WINDOW_WIDTH - 50,
        height: 50,
        marginLeft: 25,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 25,
        paddingLeft: 50,
    },
    btnSummit: {
        alignSelf: 'center',
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'black',
    },
    btnImage:{
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgButtonImage:{
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    listHideButton:{
        borderBottomWidth: 1,
        paddingBottom: 10,
        alignItems: 'stretch'
    },
    txtDefault:{
        fontSize: 17,
    },
    txtItalicSmall:{
        fontSize: 12,
        fontStyle: 'italic'
    }
})
