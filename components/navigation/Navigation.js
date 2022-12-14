import React,{useEffect, useState} from "react";
import Login from "../login/Login";
import Register from "../register/register";
// import Camera from "../camera/camera"
import {NavigationContainer , DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../home/Home";
import Ti from "../../secondComponent/Ti"
import Man from "../../secondComponent/Man"
import Gp from "../../secondComponent/Gp"
import Elec from "../../secondComponent/Elec"
import Mec from "../../secondComponent/Mec"
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from "../load/Loader";

const Stack = createNativeStackNavigator();

const Navigation = () => {


const[loading  , setLoading] = useState(false)
const[isValide , setIsValide]=useState(false)
const [isFind , setFound] = useState(false)

useEffect(()=>{
  AsyncStorage.getItem('user', (err, result) => {
  console.log(result)
if(result){
setLoading(true);
console.log(isValide)
setIsValide(true)
setFound(true);
const data = result.split(" ");
const name = data[0]
const token= data [1]
const n1 = name.replace('"',"")
const t1 = token.replace('"',"")
console.log(n1)
console.log(t1)
 }


  })
  
})
 

  return (
    // loading ? <Loader />  :
     <NavigationContainer >
    <Stack.Navigator initialRouteName={isValide ? "HomePage" :"Home"}>
      <Stack.Screen
        name="Home"
        component={Login}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen 
          name="Register"
          component={Register}
        />
      {/* <Stack.Screen 
          name="Camera"
          component={Camera}
        />
         */}
      <Stack.Screen 
          name="HomePage"
          component={Home}
        />
      <Stack.Screen 
          name="ti"
          component={Ti}
        />
      <Stack.Screen 
          name="man"
          component={Man}
        />
      <Stack.Screen 
          name="mec"
          component={Mec}
        />
      <Stack.Screen 
          name="elec"
          component={Elec}
        />
      <Stack.Screen 
          name="gp"
          component={Gp}
        />
      
    </Stack.Navigator>
    
  </NavigationContainer>
 
  );
}

export default Navigation;

