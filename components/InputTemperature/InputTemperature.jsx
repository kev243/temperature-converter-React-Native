import { Text, TextInput, View } from "react-native";
import { s } from "./InputTemperature.style";

export function InputTemperature({ defaultValue }) {
  return (
    <View style={s.container}>
      <TextInput
        style={s.input}
        placeholder="Temperature"
        keyboardType="numeric"
        maxLength={4}
        defaultValue={defaultValue}
      />

      <Text style={s.unit}>C</Text>
    </View>
  );
}
