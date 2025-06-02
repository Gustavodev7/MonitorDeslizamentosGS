import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function InsercaoDadosScreen() {
  const [umidade, setUmidade] = useState('');
  const [inclinacao, setInclinacao] = useState('');

  const salvarDados = async () => {
    if (umidade === '' || inclinacao === '') {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }
    const data = {
      umidade: parseFloat(umidade),
      inclinacao: parseFloat(inclinacao),
      data: new Date().toLocaleString(),
    };
    try {
      let historico = await AsyncStorage.getItem('historico');
      historico = historico ? JSON.parse(historico) : [];
      historico.push(data);
      await AsyncStorage.setItem('historico', JSON.stringify(historico));
      Alert.alert('Sucesso', 'Dados salvos!');
      setUmidade('');
      setInclinacao('');
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível salvar os dados.');
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.label}>Umidade do Solo (%)</Text>
        <TextInput
          keyboardType="numeric"
          value={umidade}
          onChangeText={setUmidade}
          placeholder="Ex: 65"
          style={styles.input}
        />
        <Text style={styles.label}>Inclinação (graus)</Text>
        <TextInput
          keyboardType="numeric"
          value={inclinacao}
          onChangeText={setInclinacao}
          placeholder="Ex: 30"
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={salvarDados}>
          <Text style={styles.buttonText}>Salvar Dados</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 24,
  },
  label: {
    fontSize: 20,
    color: '#146C94',
    marginBottom: 6,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#19A7CE',
    borderRadius: 10,
    padding: 12,
    marginBottom: 18,
    fontSize: 18,
    backgroundColor: '#f2f7fa',
  },
  button: {
    backgroundColor: '#19A7CE',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
