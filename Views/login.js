import React, {useState, useEffect} from 'react';
import { Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Platform} from 'react-native';
import { css } from '../assets/css/css';


export default function Login({navigation}){

    const [display, setDisplay] = useState('none');

    return(
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={[css.container, css.darkbg]}>
            
            <View style={css.loginLogomarca}>
            <Image source={require('../assets/img/logomarca.png')}/>
            </View>

            <View>
            <Text style={css.loginMsg(display)}>Usuário ou Senha inválidos!</Text>
            </View>

            <View style={css.loginForm}>
            <TextInput style={css.loginInput} placeholder='Usuario:'/>
            <TextInput style={css.loginInput} placeholder='Senha:' secureTextEntry={true}/>
            <TouchableOpacity style={css.loginButton}>
                <Text style={css.buttonText} onPress={()=>setDisplay('flex')}>Entrar</Text>
            </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
       
    );    
}