import { StyleSheet, Pressable, Text, View } from 'react-native';

export const NavigationPress = ({ text, onPress }) => {
  return (
    <Pressable style={styles.titleContainer} onPress={onPress}>
      <Text style={styles.titleText}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginVertical: 12,
    backgroundColor: '#d81f1f',
    padding: 12,
    borderRadius: 8,
  },
  titleText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
