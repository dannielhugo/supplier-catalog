import React from 'react';
import { getSuppliers } from '../services/api';
import { SafeAreaView, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Constants } from 'react-native-unimodules';
import Item from './Item';

export default function SupplierList({ route, navigation }) {
  const [suppliers, setSuppliers] = React.useState([]);

  React.useEffect(() => {
    try {
      async function request() {
        const response = await getSuppliers();
        setSuppliers(response);
      }

      request();
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={suppliers}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            fantasy={item.fantasy}
            cnpj={item.cnpj}
            companyName={item.companyName}
            address={item.address}
            city={item.city}
            navigation={navigation}
            route={route}
          />
        )}
        keyExtractor={item => `${item.id}`}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  marginTop: Constants.statusBarHeight,
	},
});