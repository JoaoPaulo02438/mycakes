import React from 'react';
import { View, Image, TouchableOpacity} from 'react-native';
import Pedidos from './Pedidos';
import Login from './login';
import {css} from '../assets/css/css';


export default function Home({navigation}){
  
    return(
        <View style={css.iconHome}> 
            
            <TouchableOpacity style= {css.buttonHome} onPress={()=>navigation.navigate(Login)}>
            <Image source={require('../assets/img/buttonlogin.png')}/>
            </TouchableOpacity>
            
            <TouchableOpacity style= {css.buttonHome} onPress={()=>navigation.navigate(Pedidos)}>
            <Image source={require('../assets/img/buttonpedidos.png')}/>
            </TouchableOpacity>
        </View>
    );    
}