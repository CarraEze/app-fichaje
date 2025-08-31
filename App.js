import { StyleSheet } from 'react-native';
import { FichadaEnCurso } from './views/EnCursoView';
import { FichadaNueva } from './views/NuevaView'
//import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator({
  initialRouteName: "Nueva",
  screens: {
    Nueva: FichadaNueva,
    EnCurso: FichadaEnCurso
  }
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {

  return (
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  }
});
