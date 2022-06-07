import React from 'react';
import { View, Text, Button} from 'react-native';
import Login from './login';


export default function Home(props){
  
    return(
        <View>
            <Text>Componente Home</Text>
            <Button title='Login' onPress={()=>props.navigation.navigate(Login)}/>
        </View>
    );    
}