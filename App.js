import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { FichadaEnCurso } from './views/EnCursoView';
import { FichadaNueva } from './views/NuevaView'
import { FinalizarFichada } from './views/FinalizarView'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {

  const [vistaActual, setVistaActual] = useState("FichadaNueva");

  const vistas = {
    FichadaNueva: <FichadaNueva />,
    FichadaEnCurso: <FichadaEnCurso />,
    FinalizarFichada: <FinalizarFichada />
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
          {vistas[vistaActual]}
          <View style={styles.buttonContainer}>
            <Button title="Nueva" onPress={() => setVistaActual('FichadaNueva')} />
            <Button title="En Curso" onPress={() => setVistaActual('FichadaEnCurso')} />
            <Button title="Finalizar" onPress={() => setVistaActual('FinalizarFichada')} />
          </View> 
      </SafeAreaView>
    </SafeAreaProvider>
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
