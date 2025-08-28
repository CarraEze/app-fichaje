import { StyleSheet, Pressable ,Text, View} from 'react-native';

export const RedPress = ({ children }) => {
  return (
    <Pressable style={styles.titleContainer}>
        <Text style={styles.titleText}>
        { children }
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
