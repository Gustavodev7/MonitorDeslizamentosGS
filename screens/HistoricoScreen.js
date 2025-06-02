import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HistoricoScreen() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const carregarHistorico = async () => {
      let historico = await AsyncStorage.getItem('historico');
      historico = historico ? JSON.parse(historico) : [];
      setDados(historico.reverse());
    };
    carregarHistorico();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 16 }}>Histórico de Monitoramento</Text>
      <FlatList
        data={dados}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => (
          <View style={{ borderBottomWidth: 1, borderColor: '#ccc', marginBottom: 10, paddingBottom: 5 }}>
            <Text>Data: {item.data}</Text>
            <Text>Umidade: {item.umidade}%</Text>
            <Text>Inclinação: {item.inclinacao}°</Text>
          </View>
        )}
        ListEmptyComponent={<Text>Nenhum dado registrado.</Text>}
      />
    </View>
  );
}
