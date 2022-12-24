import React, {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, TextInput, StyleSheet, TouchableOpacity , ImageBackground , Image} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-paper';
import Loading from "../load/Loader"
import Navigation from '../navigation/Navigation';

const Home = ({navigation}) => {

const [msg , setMsg] = useState('');
useEffect(()=>{
  AsyncStorage.getItem('user', (err, result) => {
  console.log(result)
if(result){
const data = result.split(" ");
const name = data[0]
const token= data [1]
const n1 = name.replace('"',"")
const t1 = token.replace('"',"")
    console.log(n1)
    console.log(t1)
    setMsg(n1)
}}); 
})

//Lo
const Logout = () =>{
  AsyncStorage.removeItem("user")
  navigation.replace("Home")
}

return (
    
    <View >
     
      <Button onPress={Logout} style={{"marginLeft":280,
    "backgroundColor":"red",
    "marginTop":10,
    "width":100
    
    }} ><Text style={{"color":"white"}}  >Logout</Text></Button>
  <Image
        style={Styles.tinyLogo}
        source={{
          uri:'data:image/png;base64,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',
        }}
      />
     <Text style={Styles.title}>Welcome back {msg} to iset kebili</Text>
     <View style={Styles.btn}>
    <Button style={Styles.bou} onPress={() => navigation.navigate("ti")}><Text style={{"fontSize":12}}>ti</Text></Button>
    <Button style={Styles.bou}onPress={() => navigation.navigate("man")}><Text style={{"fontSize":12}}>mangement</Text></Button>
    <Button style={Styles.bou} onPress={() => navigation.navigate("gp")}><Text style={{"fontSize":12}}>gp</Text></Button>
    <Button style={Styles.bou} onPress={() => navigation.navigate("mec")}><Text style={{"fontSize":12}}>
      mecanique</Text></Button>
    <Button style={Styles.bou} onPress={() => navigation.navigate("elec")}><Text style={{"fontSize":12}}>electrique</Text></Button>

     </View>
  </View>


  );
};



export default Home;

const Styles = StyleSheet.create({

  title: {
      color:"blue",
      textAlign:"center",
      fontSize:20
 },
 tinyLogo : {
    width: 50,
    height: 50,
    marginTop:20,
    marginLeft:20
 },
 btn : {
  marginTop:50,
  width:"100%",
  backgroundColor:"#F0FFFF",
  flexDirection:"row",
  height:70,
  alignItems:"center"
 },
 bou : {
 fontSize:10,
 width:"19%",
 height:40,
 backgroundColor:"#F0F8FF",
 marginLeft:3
 }

})