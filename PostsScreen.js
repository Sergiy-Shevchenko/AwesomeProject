import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Button
} from "react-native";
import log from './assets/log-out.png'

export default function Posts() {

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Публікації</Text>
                
                <TouchableOpacity style={styles.button}>
                    <Image source={require('./assets/log-out.png')}/>
                </TouchableOpacity>
            </View>
            <View></View>
            <View></View>
            
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    header: {
        // flex:2,
        // display: "flex",
        flexDirection: 'row',
        //  position: 'absolute',  
        borderBottom: '2px',
        borderBottomColor: "#E6E6E6",
        paddingTop: 50
    },
    title: {      
             
        fontSize: 17,
        fontWeight: 500,
        alignItems: "center", 
        justifyContent: "center"   
    },
    button: {
        position: 'absolute',
top: 50,
left: 200
    }
    
})