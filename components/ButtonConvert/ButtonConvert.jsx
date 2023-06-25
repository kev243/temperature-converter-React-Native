import { Text, TouchableOpacity } from "react-native";
import { b } from "./ButtonConvert.stye";
export function ButtonConvert({ onPress, unit }) {
  return (
    <TouchableOpacity onPress={onPress} style={b.button}>
      <Text style={b.texte}>Convert to {unit}</Text>
    </TouchableOpacity>
  );
}
