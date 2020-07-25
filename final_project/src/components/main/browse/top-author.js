import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import globalStyle from '../../global/styles';
import {Avatar} from 'react-native-elements';
import AuthorsSection from '../../global/mainComponents/authorsSection/authors-section';
import iteduAPI from "../../../API/iteduAPI";

const TopAuthor = props => {
   const [authors, setAuthors] = useState([]);
   useEffect(() => {
       iteduAPI.get('/instructor', {})
           .then((response) => {
               if (response.isSuccess){
                   setAuthors(response.data.payload)
               }
           })
   })
    return (
        <AuthorsSection title={'Authors'} item={authors} navigator={props.navigator}/>
    );
};

export default TopAuthor;
