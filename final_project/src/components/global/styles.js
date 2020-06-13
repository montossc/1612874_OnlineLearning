import {Dimensions, StyleSheet} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
export default StyleSheet.create({
    container:{
        padding: 10,
        flex: 1
    },
    containerTxtInput:{
        width: WINDOW_WIDTH - 100,
        alignSelf:'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20
    },
    containerTextButton:{
        borderBottomWidth: 1,
        paddingVertical: 10,
        alignItems: 'stretch'
    },
    txtTitle:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    txtSmallTitle: {
        fontSize: 20
    },
    txtDefault:{
        fontSize: 17,
    },
    txtItalicDefault: {
        fontSize: 17,
        fontStyle: 'italic'
    },
    txtItalicSmall:{
        fontSize: 12,
        fontStyle: 'italic'
    },
    containerSection: {
        paddingVertical: 20
    },
    btnOuterSection: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerHeaderSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    }
});
