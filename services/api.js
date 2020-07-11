import axios from 'axios';

const baseURL = 'http://localhost:3001';

const instance = axios.create({
  baseURL,
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export async function getSuppliers() {
  const response = await instance.get('/suppliers');

  return response.data;
}

export async function addSupplier(supplier) {
  const response = await instance.post('/suppliers', supplier);

  return response.data;
}

export async function deleteSupplier(supplierId) {
  const response = await instance.delete(`/suppliers/${supplierId}`);

  return response.data;
}

export async function editSupplier(supplierId, supplier) {
  const response = await instance.put(`/suppliers/${supplierId}`, supplier);

  return response.data;
}