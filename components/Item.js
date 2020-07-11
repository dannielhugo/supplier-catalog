import React from 'react';
import {
  Button,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { deleteSupplier } from '../services/api';

export default function Item({ id, fantasy, cnpj, navigation }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{fantasy}</Text>
      <Text style={styles.title}>{cnpj}</Text>
      <Button
        title='Edit'
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Edit', {
            id: id,
            fantasy: fantasy,
            cnpj: cnpj,
          });
        }}
      />
      <Button
        title='Delete'
        onPress={async () => await deleteSupplier(id)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#F2F3F4',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});
