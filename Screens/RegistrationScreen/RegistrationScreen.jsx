import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet , Text, ImageBackground, Dimensions, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Image, useWindowDimensions} from 'react-native';


const registrationState = {
  login: '',
  email: '',
  password: '',
}

const RegistrationScreen = () => {
  const [state, setState] = useState(registrationState)
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  
  const {height, width} = useWindowDimensions();

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  

  const handleSubmit = () => {
setState(registrationState)
  }


  return (
   
    <ImageBackground   source={require('../../assets/img/bgImage.jpg')}
       style={{ position: 'absolute', width: width, height: height }}>
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>


     
       <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.container}             
            >
            <View style={styles.thumb}>

<View style={styles.thumbUser}>
                <Image style={styles.userFoto} />               
                <AntDesign name="pluscircleo" size={25} color="black" style={styles.addFoto}/>                 
                {/* <AntDesign name="closecircleo" size={25} color="black" style={styles.addAvatar}/>                 */}
              </View>
      <View >  

    <Text style={[styles.title, styles.titleRegistration]}>Реєстрація</Text>
      <TextInput style={styles.input} placeholder="Логін" value={state.login}
                onChangeText={(value) =>
                  setState((prev) => ({ ...prev, login: value }))
                }               
                />
      <TextInput style={styles.input} placeholder="Адреса електронної пошти"  value={state.email}
       onChangeText={(value) => {
          setState(prev => ({
              ...prev, email : value
          }))
        }} />
     <View style={styles.passwordContainer}>
     <TextInput style={styles.input} placeholder="Пароль" secureTextEntry={secureTextEntry} value={state.password}
        onChangeText={(value) => {
          setState(prev => ({
              ...prev, password : value
          }))
        }} />

  <TouchableOpacity  style={styles.passwordButton}onPress={toggleSecureTextEntry}>      
      <Text style={styles.passwordTitle}>{secureTextEntry ? 'Показати' : 'Приховати'}</Text>
      </TouchableOpacity>
     </View>

      <TouchableOpacity  style={styles.button} onPress={handleSubmit}>      
      <Text style={styles.registerTitle}>Зареєстуватися</Text>
      </TouchableOpacity>

      <TouchableOpacity >      
      <Text style={styles.loginTitle}>Вже є акаунт? Увійти</Text>
      </TouchableOpacity>
      
      
      </View>
      </View>
      </KeyboardAvoidingView>
     
      </TouchableWithoutFeedback>
      
      </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  container: {  
    // backgroundColor:'tomato', 
    
    flex: 1, 
    justifyContent: 'flex-end',   
  },
  thumb: {
    // marginTop: 263,
    // paddingHorizontal: 16,   
    // backgroundColor: '#fff',
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
    // height: '67%',
    paddingTop: 92,
    paddingBottom: 78,
    paddingHorizontal: 16,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: '#FFFFFF',
  },
  thumbUser: {
    position: 'absolute',
    top: -60,
    alignSelf: 'center', 
   
  },
  userFoto: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#f6f6f6',
   
  },
  addFoto: {
    position: 'absolute',
    bottom: 14,
    right: -12, 
    color: '#ff6c00',    
  },
  title: {
    fontFamily: 'Roboto-Regular',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
  },
  titleRegistration: {
    // marginBottom: 32,
    // marginTop: 92,

    marginBottom: 32,
    fontSize: 30,
    fontFamily: 'Roboto-Medium',
    lineHeight: 35,
    textAlign: 'center',
  },
  input: {
    height: 50,
    fontSize: 16,
    padding: 16,
    marginBottom: 16,
    color: '#212121',
    backgroundColor: '#f6f6f6',
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 8,
  }, 
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginBottom: 16,
    borderRadius: 100,
    backgroundColor: '#FF6C00',
  },
  registerTitle: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
  },
  passwordContainer: {
    position: 'relative',
  },

  passwordButton: {
    position: 'absolute',
    top: 15,
    right: 12,
  },
  passwordTitle: {
  fontSize: 16,
  fontFamily: 'Roboto-Regular',
  color: '#1B4371',
 },
 loginTitle: {
  textAlign: 'center',
  fontSize: 16,
  fontFamily: 'Roboto-Regular',
  lineHeight: 19,
  color: '#1B4371',
},
});

export default RegistrationScreen;
