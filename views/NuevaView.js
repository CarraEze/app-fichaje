import { StyleSheet, Text, View } from 'react-native';
import { RedPress } from '../components/fichadaPress';

export const FichadaNueva = () => {
  return (
    <View style={styles.nueva}>
      <RedPress>Nueva Fichada</RedPress>
    </View>
  );
};

const styles = StyleSheet.create({
  nueva: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#ffffff'
  }
});