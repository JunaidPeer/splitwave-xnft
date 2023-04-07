import { View, StyleSheet, StyleProp, ViewStyle, Button } from "react-native";

export function Navbar() {
    return (
        <View style={styles.container}>
        <Button title="press me" color="#0000" />
        <text style={{color: "#f1f1f1f1"}}>SplitWave 🌊🌊</text>
        </View>
    );
    }
const styles = StyleSheet.create({
    container: {        
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12,
        backgroundColor: "#202737",
       borderRadius: 10,
      width: 350,
      height: 56,
        fontSize: 20,
        fontFamily: "sans-serif",
    },  
   
});