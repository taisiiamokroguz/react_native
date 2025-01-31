
import { View, Button, StyleSheet } from "react-native";

export default function App() {
  const [currBack, newBack] = useState("lightblue");
  const styles = StyleSheet.create({
    main_view: {
      flex: 1, 
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
  });

  return (
    <View style={[styles.main_view, { backgroundColor: currBack }]}>
      <Button color="red" title="Red" onPress={() => newBack("red")} />
      <Button color="green" title="Green" onPress={() => newBack("green")} />
      <Button color="blue" title="Blue" onPress={() => newBack("blue")} />
    </View>
  );
}


