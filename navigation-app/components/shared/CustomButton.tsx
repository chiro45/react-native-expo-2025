import { Pressable, Text, type PressableProps } from "react-native";

interface Props extends PressableProps {
  color?: "primary" | "secondary" | "tertiary";
  textButton?: string;
  variant?: "contained" | "text-only";
  className?: string;
}

const CustomButton = ({
  color = "primary",
  variant = "contained",
  textButton,
  onPress,
  onLongPress,
  className,
}: Props) => {
  const btnColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  }[color];

  const textColor = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
  }[color];

  if (variant === "text-only") {
    return (
      <Pressable
        className={`p-3 ${className}`}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <Text className={`text-center ${textColor} font-work-medium`}>
          {textButton}
        </Text>
      </Pressable>
    );
  }
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      className={`p-3 rounded-md ${btnColor} active:opacity-90`}
    >
      <Text className={"text-white text-center"}>{textButton}</Text>
    </Pressable>
  );
};

export default CustomButton;
