import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function NewUser(props) {
    var email,pwd,confirmPwd;
  return (
    <ImageBackground
    source={require("../assets/photo1.jpeg")}
    style={styles.container}>
      <View style={{
        backgroundColor:"#0005",
        height:300,
        width:'98%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
      }}>
      <Text
        style={{
          fontSize :32,
          fontWeight: 'bold',
          fontStyle:'italic',
          color:'yellow',
        }}>
        Bienvenue
      </Text>
      <TextInput
      onChangeText={(txt)=>(
        email=txt
      )}
      keyboardType='email.address'
      placeholder='email@gmail.com'
      style={styles.textInputStyle}></TextInput>
      <TextInput
      onChangeText={(txt)=>(
        pwd=txt
      )}
      placeholder='password'
      secureTextEntry={true}
      style={styles.textInputStyle}></TextInput>

      <TextInput
      onChangeText={(txt)=>(
        confirmPwd=txt
      )}
      placeholder='Confirm password'
      secureTextEntry={true}
      style={styles.textInputStyle}></TextInput>

      <View>
        <View style={{flexDirection:'row',gap:15,}}>
      <Button title='submit'
      onPress={()=>{
        props.navigation.navigate("Home");
      }}
      ></Button>
        <Button
        onPress={()=>{
            props.navigation.goBack();
        }}
        title='Back'
      ></Button>
      </View>
      </View>
    
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   // alignItems:'flex-end', //align horize
   // justifyContent:'flex-start' //align vert
  },
  textInputStyle:{
    height:50 ,
    width:'90%',
    backgroundColor:'white',
    marginBottom:10,
  }
});
