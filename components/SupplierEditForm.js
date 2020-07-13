import React from 'react';
import { editSupplier } from '../services/api';
import { StyleSheet, KeyboardAvoidingView, Platform, View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function SupplierEditForm({ route, navigation }) {
  const [fantasy, setFantasy] = React.useState(route.params.fantasy);
  const [cnpj, setCnpj] = React.useState(route.params.cnpj);
  const [companyName, setCompanyName] = React.useState(route.params.companyName);
  const [address, setAddress] = React.useState(route.params.address);
  const [city, setCity] = React.useState(route.params.city);
  const [id,] = React.useState(route.params.id);

  async function handleSubmit(event) {
    event && event.preventDefault();

    const data = { id, fantasy, cnpj, companyName, address, city };

    await editSupplier(id, data);

    navigation.navigate('Main');
  }

  return (
    <KeyboardAvoidingView
      enabled={Platform.OS == 'ios'}
      behavior="padding"
      sytle={style.container}
    >

      <View style={style.form}>
        <Text style={style.label}>Fantasy Name</Text>
        <TextInput
          style={style.input}
          placeholder="Fantasy Name"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          collapsable="false"
          value={fantasy}
          onChangeText={(text) => setFantasy(text)}
        />
      </View>

      <View style={style.form}>
        <Text style={style.label}>CNPJ</Text>
        <TextInput
          style={style.input}
          placeholder="CNPJ"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          collapsable="false"
          value={cnpj}
          onChangeText={(text) => setCnpj(text)}
        />
      </View>

      <View style={style.form}>
        <Text style={style.label}>Company Name</Text>
        <TextInput
          style={style.input}
          placeholder="Company Name"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          collapsable="false"
          value={companyName}
          onChangeText={(text) => setCompanyName(text)}
        />
      </View>

      <View style={style.form}>
        <Text style={style.label}>Address</Text>
        <TextInput
          style={style.input}
          placeholder="Address"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          collapsable="false"
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
      </View>

      <View style={style.form}>
        <Text style={style.label}>City</Text>
        <TextInput
          style={style.input}
          placeholder="City"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          collapsable="false"
          value={city}
          onChangeText={(text) => setCity(text)}
        />
      </View>

      <TouchableOpacity
        onPress={handleSubmit}
        style={style.buttom}
      >
        <Text style={style.buttonText}>Update Supplier</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    alignSelf: "stretch",
    paddingHorizontal: 30,
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    height: 44,
    marginBottom: 20,
    borderRadius: 2,
  },
  label: {
    fontWeight: "bold",
    color: "#444",
    marginBottom: 8,
  },
  buttom: {
    height: 42,
    backgroundColor: "#f05a5b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});