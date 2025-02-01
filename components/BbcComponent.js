import {View, Text, Image, StyleSheet} from "react-native"
export default function BbcComponent({photoUri = "", title="Title", date = "21 Jan 2024", category="Ukraine" }){
     const styles = StyleSheet.create({
        n_view:{ 
          padding:10,
          borderWidth:1,
          borderColor:"grey",
          width:300, 
          height:"auto", 
          flexDirection:"row",
          alignItems: "flex-start"
        },
        n_photo:{
            width: 100, 
            height: 100
        },
        inner_view:{
            flexDirection:"column",
            flex: 1,
            justifyContent: "center",
            marginLeft: 10 
        },
        n_title:{ 
            fontWeight:"bold",
            fontSize:16,
            width: "100%", 
            flexShrink: 1,
            flexWrap: "wrap",
            overflow: "hidden"
        },
        n_info:{
            color:"#a0a0a0",
            width: "100%", 
            flexShrink: 1,
            flexWrap: "wrap",
            overflow: "hidden",
            marginTop: "auto"

        }
      });
 return(
    <View style={styles.n_view}>
        <Image source={{uri:photoUri}} style={styles.n_photo}></Image>
        <View style={styles.inner_view}>
        <Text style={styles.n_title}>{title}</Text>
        <Text style={styles.n_info}>{date} | {category}</Text>
        </View>
    </View>
 );
}