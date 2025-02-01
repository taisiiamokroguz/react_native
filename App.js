
import { View,Text, Button, StyleSheet, Pressable } from "react-native";
import BbcComponent from "./components/BbcComponent";

export default function App() {
  const styles = StyleSheet.create({
    main_view:{
      flex: 1, 
      padding:40,
      justifyContent:"center",
      gap:20
    }
  });
  return (
    <View style={styles.main_view}>
      <BbcComponent photoUri="https://cdn.pixabay.com/photo/2023/08/05/16/25/elephants-8171393_640.jpg" 
      title="Chikankari: A Lucknawi Tradition"
      date="January 31, 2025"
      category="USA" />
       <BbcComponent photoUri="https://www.fairobserver.com/wp-content/uploads/2025/01/The-Gaza-Ceasefire-Deal.jpg" 
      title="The Gaza Ceasefire Deal: A False White Flag or Path to Peace?"
      date="January 30, 2025"
      category="POLITICS" />
       <BbcComponent photoUri="https://www.fairobserver.com/wp-content/uploads/2025/01/Indias-Strategic-Accomplishments-in-2024Ceasefire-Deal.jpg" 
      title="A Year in Review: India’s Strategic Accomplishments in 2024"
      date="February 1, 2025"
      category="INDIA NEWS" />
      
    </View>
  );
}

