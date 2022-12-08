import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
const serverUrl = "http://192.168.1.135:8800/api/auth/";
import axios from "axios";
const Login = ({ navigation }) => {

    const [msg , setMsg] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const loginHandler = async () => {
       
        try {
        const { data } = await axios.post(
              `${serverUrl}/login`,
              { email, password},
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            if(data){
             navigation.navigate('HomePage')
            AsyncStorage.setItem(
                'user',
                JSON.stringify(data.username+" "+data.accessToken),
                () => {
                  AsyncStorage.mergeItem(
                    'user',
                    JSON.stringify(data.username+" "+data.accessToken),
                   
                  );
                }
              );

             }
         
        } catch (error) {
            console.log(error)
          }

         
        
    }
       return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Text style={{ fontSize: 20, margin: 20 }}>Hello</Text>
            <View style={{ width: "70%" }}>
                <TextInput
                    style={Styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    secureTextEntry
                    style={Styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <Button
                disabled={!email || !password}
                style={Styles.btn}
                onPress={loginHandler}
            >
                <Text style={{ color: "#fff" }}>Login</Text>
            </Button>

            <Text
                style={{
                    marginTop: 20,
                }}
            >
                Or
            </Text>
            <Text>{msg}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text
                    style={{
                        color: "blue",
                        height: 30,
                        margin: 20,
                    }}
                >
                    Sign Up
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default Login


const Styles = StyleSheet.create({

    input: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#b5b5b5",
        padding: 10,
        paddingLeft: 15,
        borderRadius: 5,
        marginVertical: 15,
        fontSize: 15,
    },

    btn: {
        backgroundColor: "blue",
        padding: 5,
        width: "70%",
    },
})