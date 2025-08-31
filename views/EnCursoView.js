import { useState } from 'react';
import { StyleSheet, View, Modal, Text } from 'react-native';
import { NavigationPress } from '../components/NavigationPress';
import { useNavigation } from '@react-navigation/native'
import { globalStyles } from '../globalStyles';

export const FichadaEnCurso = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleClose = () => {
    setModalVisible(false);
    navigation.navigate('Nueva');
  };

  return (
    <View style={globalStyles.view}>
      <NavigationPress text="Finalizar Fichada" onPress={() => setModalVisible(true)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Estas seguro?</Text>
            <NavigationPress text="Si" onPress={() => handleClose()} />
            <NavigationPress text="No" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});