import { useState } from "react";
import {View,StyleSheet,Image,Text,Pressable } from "react-native";

export default function ProductCard({photoUri = "", title="Title",price=100})
{
    const [currCount, setCurrCount] = useState(1);
    const [currPrice, setCurrPrice] = useState(price);
  
    const increaseCount = () => {
        setCurrCount(prevCount => {
          const newCount = prevCount + 1;
          setCurrPrice(price * newCount); 
          return newCount;
        });
      };
    
      const decreaseCount = () => {
        setCurrCount(prevCount => {
          if (prevCount > 1) {
            const newCount = prevCount - 1;
            setCurrPrice(price * newCount);
            return newCount;
          }
          return prevCount; 
        });
      };

     const styles = StyleSheet.create({
        main_view: {
            borderWidth:1,
            borderColor:"gray",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          width:300,
          height:"20%",
          flexDirection:"column",
          gap:10

        },
        p_view:{
            flex: 1, 
            justifyContent: "center",
            alignItems: "center",
            flexDirection:"row",
            gap:20
        },
        p_image: {
            width: 100,
            height: 100, 
            resizeMode: "contain",
          },
        p_title:{
            fontWeight:"500",
            color:"black",
            fontSize:16,
            width: "100%", 
            flexShrink: 1,
        },
        inner_view:{
            flexDirection:"row",
            gap:10,
            justifyContent:"flex-start",
          },
        price_text:{
            marginLeft:130,
            fontWeight:800,
            fontSize:20

        }
      });

    return(
        <View style={styles.main_view}>
        <View style={styles.p_view}>
          <Image style={styles.p_image} source={{ uri: photoUri }} />
          <Text style={styles.p_title}>{title}</Text>
        </View>
        <View style={styles.inner_view}>
          <Pressable style={styles.button} onPress={increaseCount}>
            <Text>+</Text>
          </Pressable>
          <Text>{currCount}</Text>
          <Pressable style={styles.button} onPress={decreaseCount}>
            <Text>-</Text>
          </Pressable>
          <Text style={styles.price_text}>{currPrice} $</Text>
        </View>
      </View>
    );
}