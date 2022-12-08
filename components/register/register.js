import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Button } from 'react-native-paper'
import axios from 'axios';

const Register = ({ navigation, route }) => {


    // const [avatar, setAvatar] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(name , email , password)
   const registerHandler = async () => {
       
    
    try {
        await axios.post("http://192.168.1.61:8800/api/auth/register", { 
            name,
            email,
            password
         });
        // history.push("/register");
      } catch (err) {}
        

        
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
            <Text style={{ fontSize: 20, margin: 20 }}>Register Here</Text>
           

            <View style={{ width: "70%" }}>
                <TextInput
                    style={Styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />
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
                disabled={
                    !email || !password || !name
                }
                style={Styles.btn}
                onPress={registerHandler}
            >
                <Text style={{ color: "#fff" }}>Register</Text>
            </Button>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text
                    style={{
                        color: "blue",
                        height: 30,
                        margin: 20,
                    }}
                >
                    Login Here If you have an account
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Register



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