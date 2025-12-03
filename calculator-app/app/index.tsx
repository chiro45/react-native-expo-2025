import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/theme";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

const buttons: {
  label: string;
  color: string;
  blackText?: boolean;
  doubleSize?: boolean;
}[][] = [
  [
    { label: "C", color: Colors.lightGray, blackText: true },
    { label: "+/-", color: Colors.lightGray, blackText: true },
    { label: "del", color: Colors.lightGray, blackText: true },
    { label: "÷", color: Colors.orange },
  ],
  [
    { label: "7", color: Colors.darkGray, blackText: false },
    { label: "8", color: Colors.darkGray, blackText: false },
    { label: "9", color: Colors.darkGray, blackText: false },
    { label: "x", color: Colors.orange },
  ],
  [
    { label: "4", color: Colors.darkGray },
    { label: "5", color: Colors.darkGray },
    { label: "6", color: Colors.darkGray },
    { label: "-", color: Colors.orange },
  ],
  [
    { label: "1", color: Colors.darkGray },
    { label: "2", color: Colors.darkGray },
    { label: "3", color: Colors.darkGray },
    { label: "+", color: Colors.orange },
  ],
  [
    { label: "0", color: Colors.darkGray, doubleSize: true },
    { label: ".", color: Colors.darkGray },
    { label: "=", color: Colors.orange },
  ],
];

const CalculatorApp = () => {
  // Definimos las filas de botones

  const {
    formula,
    prevNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  } = useCalculator();

  const handlePress = (element: string) => {
    switch (element) {
      case "C":
        clean();
        break;
      case "+/-":
        toggleSign();
        break;
      case "+":
        addOperation();
        break;
      case "-":
        subtractOperation();
        break;
      case "del":
        deleteLast();
        break;
      case "÷":
        divideOperation();
        break;
      case "x":
        multiplyOperation();
        break;
      case "=":
        calculateResult();
        break;

      default:
        buildNumber(element);
        break;
    }
  };

  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>
        {formula === prevNumber ? (
          <ThemeText variant="h2"> </ThemeText>
        ) : (
          <ThemeText variant="h2">{prevNumber}</ThemeText>
        )}
      </View>

      {/* Render dinámico de las filas */}
      {buttons.map((row, rowIndex) => (
        <View key={rowIndex} style={globalStyles.row}>
          {row.map((btn, index) => (
            <CalculatorButton
              key={index}
              label={btn.label}
              color={btn.color}
              blackText={btn.blackText}
              doubleSize={btn.doubleSize}
              onPress={() => handlePress(btn.label)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default CalculatorApp;
