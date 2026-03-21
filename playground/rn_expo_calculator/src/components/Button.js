import { Pressable, StyleSheet, Text } from "react-native";

const COLORS = {
  NUMBER: ['#71717a', '#3f3f46'],
  OPERATOR: ['#f59e0b', '#b45309'],
}
const ButtonTypes = {
  NUMBER: 'NUMBER',
  OPERATOR: 'OPERATOR'
}

const Button = ({ title, onPress, buttonStyle, buttonTypes }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: COLORS[buttonTypes][0] },
        pressed && { backgroundColor: COLORS[buttonTypes][1] },
        buttonStyle
      ]}
      onPressOut={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 50,
  }
});

export { ButtonTypes };
export default Button;
