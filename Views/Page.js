import React from 'react';
import { View, Text } from 'react-native';
import {css} from '../assets/css/css';

export default function Page(props){

    
    return (
        <View style={css.textPage}>
            <Text>Empresa {props.empresa} Desenvolvedor {props.name}</Text>
        </View>
    );

}