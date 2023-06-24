import { Text, TextInput } from "react-native";
import { s } from "./InputTemperature.style";

export function InputTemperature({ defaultValue }) {
  return (
    <>
      <TextInput
        style={s.input}
        placeholder="Temperature"
        keyboardType="numeric"
        maxLength={4}
        defaultValue={defaultValue}
      />

      <Text style={s.unit}> C</Text>
    </>
  );
}
