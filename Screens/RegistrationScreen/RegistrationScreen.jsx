import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, TextInput, Button, StyleSheet , Text, ImageBackground, Dimensions, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Image} from 'react-native';


const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
    <ImageBackground   source={require('../../assets/img/bgImage.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.thumb}>
       <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={{width: '100%'}}
            >

<View style={styles.thumbAvatar}>
                <Image style={styles.avatar} />               
                <AntDesign name="pluscircleo" size={25} color="black" style={styles.addAvatar}/>                 
                {/* <AntDesign name="closecircleo" size={25} color="black" style={styles.addAvatar}/> */}                
              </View>
      <View >  
      
    <Text style={[styles.title, styles.titleRegistration]}>Реєстрація</Text>
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      
      <Button title="Register" onPress={() => console.log('Registration pressed')} />
      
      </View>
      </KeyboardAvoidingView>
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {    
    flex: 1,    
  },
  thumb: {
    paddingHorizontal: 16,   
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: '60%',
  },
  thumbAvatar: {
    position: 'absolute',
    top: -60,
    alignSelf: 'center', 
    backgroundColor: '#f6f6f6',
    borderRadius: 16,
  },
  avatar: {
    width: 120,
    height: 120,
  },
  addAvatar: {
    position: 'absolute',
    bottom: 14,
    right: -12.5, 
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
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default RegistrationScreen;
