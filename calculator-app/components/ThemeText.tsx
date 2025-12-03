import { globalStyles } from "@/styles/global-styles";
import { Text, type TextProps } from "react-native";

interface Props extends TextProps {
  variant?: "h1" | "h2";
}

const ThemeText = ({ children, variant = "h1", ...restProps }: Props) => {
  return (
    <Text
      style={[
        { color: "white", fontFamily: "SpaceMono" },
        variant === "h1" ? globalStyles.mainResult : globalStyles.subResult,
      ]}
      adjustsFontSizeToFit
      numberOfLines={1}
      {...restProps}
    >
      {children}
    </Text>
  );
};

export default ThemeText;
