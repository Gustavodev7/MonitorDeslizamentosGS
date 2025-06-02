import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, KeyboardAvoidingView, Platform } from 'react-native';
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
      <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Umidade do Solo (%)</Text>
        <TextInput
          keyboardType="numeric"
          value={umidade}
          onChangeText={setUmidade}
          placeholder="Ex: 65"
          style={{ borderWidth: 1, borderRadius: 5, marginBottom: 15, padding: 8 }}
        />
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Inclinação (graus)</Text>
        <TextInput
          keyboardType="numeric"
          value={inclinacao}
          onChangeText={setInclinacao}
          placeholder="Ex: 30"
          style={{ borderWidth: 1, borderRadius: 5, marginBottom: 15, padding: 8 }}
        />
        <Button title="Salvar Dados" onPress={salvarDados} />
      </View>
    </KeyboardAvoidingView>
  );
}
