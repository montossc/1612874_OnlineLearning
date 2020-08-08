import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import globalStyle from '../../../globalVariables/styles';
import {Avatar} from 'react-native-elements';
import AuthorsSection from '../../mainComponents/authorsSection/authors-section';
import iteduAPI from "../../../API/iteduAPI";
import {getAllAuthor} from "../../../core/services/author-service";

const TopAuthor = props => {
   const [authors, setAuthors] = useState([]);
   useEffect(() => {
       getAllAuthor().then(setAuthors)
   }, [])
    return (
        <AuthorsSection title={'Authors'} item={authors} navigator={props.navigator}/>
    );
};

export default TopAuthor;
