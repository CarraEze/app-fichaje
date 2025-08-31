import { StyleSheet, Text, View } from 'react-native';
import { NavigationPress } from '../components/NavigationPress';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../globalStyles';

export const FichadaNueva = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.view}>
      <NavigationPress text="Nueva Fichada" onPress={() => navigation.navigate('EnCurso')} />
    </View>
  );
};

const styles = StyleSheet.create({
  nueva: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});