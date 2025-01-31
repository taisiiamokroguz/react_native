import {View, Text, Image} from "react-native"
export default function BbcComponent({photoUri = "", title="Title", date = "21 Jan 2024", country="Ukraine" }){
 return(
    <View style={{width:"45%", height:"15%", flexDirection:"row"}}>
        <Image source={{uri:photoUri}} style={{ width: '100%', height: '100%' }}></Image>
        <View style={{flexDirection:"column"}}>
        <Text style={{marginLeft:15, fontWeight:"bold"}}>{title}</Text>
        </View>
    </View>
 );
}