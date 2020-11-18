import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {cityStyle} from "../styles"



const City = (props) => {
    return (
        <TouchableOpacity style={cityStyle.container}>
            <Icon name="apartment" size={20} color="gray"/>
            <Text style={cityStyle.text}>{props.value}</Text>
        </TouchableOpacity>
    )
};

export { City };
