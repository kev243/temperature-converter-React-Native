import { Text } from "react-native";
import { t } from "./TemperatureDisplay.style";
export function TemperatureDisplay({ value, unit }) {
  return (
    <Text style={t.text}>
      {value} {unit}
    </Text>
  );
}
