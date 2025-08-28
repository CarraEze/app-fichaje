import { StyleSheet, Text, View } from 'react-native';
import { RedPress } from '../components/fichadaPress';

export const FinalizarFichada = () => {
  return (
    <View style={styles.finalizar}>
      <RedPress>Aca va un modal</RedPress>
    </View>
  );
};
const styles = StyleSheet.create({
  finalizar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#ffffff'
  }
});