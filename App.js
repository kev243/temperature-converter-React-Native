import { useEffect, useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import { s } from "./App.style";
import coldBackground from "./assets/cold.png";
import hotBackground from "./assets/hot.png";
import { InputTemperature } from "./components/InputTemperature/InputTemperature";
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay";
import { DEFAULT_TEMPERATURE, DEFAULT_UNIT, UNITS } from "./constant";
import {
  getOppositUnit,
  convertTemperatureTo,
  isIceTemperature,
} from "./services/temperature-service";
import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const [currentBackgound, setCurrentBackground] = useState();
  const oppositeUnit = getOppositUnit(currentUnit);

  function getConvertedTemperature() {
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat)
      ? ""
      : convertTemperatureTo(oppositeUnit, valueAsFloat).toFixed(1);
  }

  useEffect(() => {
    const temperatureAsFloat = Number.parseFloat(inputValue);
    if (!isNaN(temperatureAsFloat)) {
      const isColdBackgound = isIceTemperature(inputValue, currentUnit);
      setCurrentBackground(isColdBackgound ? coldBackground : hotBackground);
    }
  }, [inputValue, currentUnit]);

  return (
    <ImageBackground source={currentBackgound} style={s.container}>
      <View style={s.workspace}>
        <TemperatureDisplay
          value={getConvertedTemperature()}
          unit={oppositeUnit}
        />
        <InputTemperature
          onChangeText={setInputValue}
          defaultValue={DEFAULT_TEMPERATURE}
          unit={currentUnit}
        />
        <ButtonConvert
          onPress={() => {
            setCurrentUnit(oppositeUnit);
          }}
          unit={currentUnit}
        />
      </View>
    </ImageBackground>
  );
}
