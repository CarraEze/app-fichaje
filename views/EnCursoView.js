import { StyleSheet, Text, View } from 'react-native';
import { RedPress } from '../components/fichadaPress';

export const FichadaEnCurso = () => {
    return (
      <View style={styles.enCurso}>
        <RedPress>Finalizar fichada</RedPress>
      </View>
    );
  };
  const styles = StyleSheet.create({
    enCurso: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      color: '#ffffff'
    }
  });