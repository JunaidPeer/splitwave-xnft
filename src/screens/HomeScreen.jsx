
import tw from "twrnc";
import React from 'react';

import { View, StyleSheet, StyleProp, ViewStyle, Button } from "react-native";
import style from "../App.module.css"

import { Screen } from "../components/Screen";
import { Navbar } from "../components/Navbar";

export function HomeScreen() {
 
  return (
    <Screen>
      <Navbar />
      
  <Button title="hehe" style={style.homepage}>
    
  </ Button> 
  <View style={style.main}>
            <View>
             
            </View>
            </View>
    </Screen>

  );
}

