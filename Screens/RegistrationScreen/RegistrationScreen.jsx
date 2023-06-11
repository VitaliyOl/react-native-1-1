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
  const {height, width} = useWindowDimensions();


  const handleSubmit = () => {
console.log('we are here');
  }
  return (
   
    <ImageBackground   source={require('../../assets/img/bgImage.jpg')}
       style={{ position: 'absolute', width: width, height: height }}>
     
       <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.container}
              
            >

<View style={styles.thumb}>

<View style={styles.thumbAvatar}>
                <Image style={styles.avatar} />               
                <AntDesign name="pluscircleo" size={25} color="black" style={styles.addAvatar}/>                 
                {/* <AntDesign name="closecircleo" size={25} color="black" style={styles.addAvatar}/> */}                
              </View>
      <View >  
      
    <Text style={[styles.title, styles.titleRegistration]}>Реєстрація</Text>
      <TextInput style={styles.input} placeholder="Логін" />
      <TextInput style={styles.input} placeholder="Адреса електронної пошти" />
      <TextInput style={styles.input} placeholder="Пароль" secureTextEntry={true} />

      <TouchableOpacity  style={styles.button} onPress={handleSubmit}>      
      <Text style={styles.buttonTitle}>Зареєстуватися</Text>
      </TouchableOpacity>
      
      </View>
      </View>
      </KeyboardAvoidingView>
      
      </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  container: {    
    flex: 1, 
    // justifyContent: 'flex-end',   
  },
  thumb: {
    marginTop: 263,
    paddingHorizontal: 16,   
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: '67%',

    // paddingTop: 92,
    // paddingBottom: 78,
    // paddingHorizontal: 16,
    // borderTopStartRadius: 25,
    // borderTopEndRadius: 25,
    // backgroundColor: '#FFFFFF',
  },
  thumbAvatar: {
    position: 'absolute',
    top: -60,
    alignSelf: 'center', 
   
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#f6f6f6',
   
  },
  addAvatar: {
    position: 'absolute',
    bottom: 14,
    right: -12, 
    color: '#ff6c00',    
  },
  title: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
  },
  titleRegistration: {
    marginBottom: 32,
    marginTop: 92,
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
  buttonTitle: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
  },
});

export default RegistrationScreen;
