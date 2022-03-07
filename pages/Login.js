
import React,{Component, useState} from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  Alert

}from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView'


const Login = ({navigation}) => {
  const Data={"email":"Jeothankach@gmail.com","password":"1234"}
  const [emailstatus,setEmailValidError]=useState("")
  const[passwordstatus,setPasswordValidError]=useState("")
 
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("") 

  
  
   const handleValidEmail = (val) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    
    if (val.length === 0) {
      setEmailValidError('Email address must be enter');
    } else if (reg.test(val) === false) {
      setEmailValidError('Enter valid email address');
    } else if (reg.test(val) === true) {
      setEmailValidError('');
      
    }
    };

    const checkDetails=()=>{
      if(Data["email"]!=email && Data["password"]!=password)
      {
        if(email.length==0 && password.length==0){
          alert('Enter value')
          setEmailValidError('Email address must be enter')
          setPasswordValidError('Password must enter')
        }
        else{
        alert('Email id or password incorrect')
        setPasswordValidError('')
        };
    
      }
      else if (Data["email"] === email && Data["password"] === password){
        navigation.navigate('Home')
        setPasswordValidError('')
        
      }
     
    }
   
      

    
  
    return(
      <KeyboardAvoidingView>

          <View style={styles.container2}>
               <Image source= {require('../Assets/logo2.png')}
                 style={styles.logostyle} underlayColor='transparent'>

              </Image>
              <Text style={styles.tview3}>Welcome Back,</Text>
              <Text style={styles.tview6}>Sign in to continue</Text>
               <View style={styles.inputview2}>
                 <Text  style={styles.tview}>Email</Text>
                 <TextInput style ={styles.inputview}
                   placeholder = 'jeothankachan98@gmail.com'
                   placeholderTextColor = 'gray'
                   
                   onChangeText={value => {
                    setEmail(value);
                    handleValidEmail(value);
                  }}>
                 </TextInput>
               </View>

              <Text style={styles.Alerttext}>{emailstatus}</Text>

               <View style={styles.inputview2}>
                 <Text style={styles.tview}>Password</Text>
                 <TextInput style ={styles.inputview}

                    onChangeText={(Text)=>setPassword(Text)}
                    placeholder = '* * * * * *'
                    placeholderTextColor = 'gray'
                    secureTextEntry >
                 </TextInput>
               </View>
              <Text style={styles.Alerttext}>{passwordstatus}</Text>
               <TouchableHighlight style={styles.bottonview}
                  underlayColor = 'transparent'
                  onPress = {()=> {checkDetails()}} >
                  <Text style={styles.bottontext}>Login</Text>
                </TouchableHighlight>

              
            </View> 
            </KeyboardAvoidingView>
    );
  
}
export default Login;
const styles = StyleSheet.create({

  container2 :  {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingLeft: 30
  },
  tview : {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000'
  },
  tview2 : {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',  
  },
  tview3: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 50,
      marginTop: 20,
      color: '#000'    
  },
  tview4: {
      fontWeight: 'bold',
      color: '#000'
  },
  tview5: {
     color: 'red',
     fontWeight: 'bold',
     marginTop: 5

  },
  tview6: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: -40,
    marginBottom: 20
    

 },
  inputview : {
    width : '100%',
    height : 45,
    borderWidth : 1,
    borderColor : '#fff', 
    backgroundColor: '#fff',
    
  },
  inputview2 : {
    width : '80%',
    height : 75,
    borderWidth : 1,
    borderColor : '#fff',
    marginTop : 10,
    paddingTop: 5,
    backgroundColor: '#fff',
    borderBottomColor: '#000'
  },
 
  bottonview : {
    width : '90%',
    height: 55,
    backgroundColor: '#be0ec7',
    marginTop: 30,
    borderRadius: 20,
    alignItems : 'center',
    justifyContent : 'center'
  },
  bottontext : {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white'
  },
  logostyle : {
    height: 100,
    width: 100,  
  },
  Alerttext : {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red',
    fontStyle: 'italic'
  }
})