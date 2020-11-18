import React from 'react';
import {View, TextInput} from 'react-native';

import {searchbarStyle} from "../styles"
import Icon from 'react-native-vector-icons/MaterialIcons';


const SearchBar = (props) => {
  return (
    <View style={searchbarStyle.container} >
        <Icon name="search" size={30} color="gray" />
        <TextInput
        style={searchbarStyle.input}
        placeholder="Search a City"
        onChangeText={(value)=>props.onSearch(value)}
        />
    
    </View>
  );
};

export {SearchBar};
