import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ccc', 
      alignItems: 'center',
      justifyContent: 'center',
    },

    textPage:{
        backgroundColor: 'orange',
        padding: 20
    },

    iconHome:{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },

    buttonHome:{
      margin: 20
    },

    darkbg:{
      backgroundColor: 'black'
    },

    loginMsg:(text='nome')=>({
      fontWeight:'bold',
      fontSize: 20,
      color: 'red',
      marginTop: 10,
      marginBottom: 15,
      display: text
    }),

    loginForm:{
      width: '80%'
    },

    loginInput:{
      backgroundColor: '#fff',
      fontSize: 19,
      padding: 7,
      marginBottom: 15
    },

    loginButton:{
      padding: 12,
      backgroundColor: 'orange',
      alignSelf: 'center',
      borderRadius: 5
    },

    buttonText:{
      fontWeight:'bold',
      fontSize: 20,
      color: '#333'
    },


  });

  export {css};