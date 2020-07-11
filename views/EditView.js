import React from 'react';
import {  View } from 'react-native';
import SupplierEditForm from '../components/SupplierEditForm';

export default function EditView({route, navigation}) {
  return (
    <View >
        <SupplierEditForm route={route} navigation={navigation}  />
    </View>
  );
}