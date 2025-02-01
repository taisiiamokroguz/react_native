
import { View,Text, Button, StyleSheet, Pressable } from "react-native";
import ProductCard from "./components/ProductCard";

export default function App() {
  const styles = StyleSheet.create({
    my_view: {
      flex: 1, 
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      gap:20,
      width:"100%",
      height:"auto",
      backgroundColor:"lightblue"

    },
    
  })
  return(
    <View style={styles.my_view}>
      <ProductCard photoUri="https://ronin.in.ua/content/images/12/600x600l80mc0/33196887128631.webp" title="Миша безпровідна Bluetooth або USB Logitech M350 Pebble Wireless Sand"></ProductCard>
     
    </View>
  );
}


