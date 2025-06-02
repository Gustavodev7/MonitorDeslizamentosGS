import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Monitoramento</Text>
      <FlatList
        data={dados}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.data}>Data: {item.data}</Text>
            <Text style={styles.text}>Umidade: <Text style={styles.bold}>{item.umidade}%</Text></Text>
            <Text style={styles.text}>Inclinação: <Text style={styles.bold}>{item.inclinacao}°</Text></Text>
          </View>
        )}
        ListEmptyComponent={<Text style={{ color: '#888' }}>Nenhum dado registrado.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f7fa',
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#146C94',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
    marginBottom: 12,
    padding: 18,
    borderLeftWidth: 6,
    borderLeftColor: '#19A7CE',
  },
  data: {
    color: '#888',
    marginBottom: 6,
  },
  text: {
    fontSize: 17,
    marginBottom: 3,
    color: '#146C94',
  },
  bold: {
    fontWeight: '700',
    color: '#19A7CE',
  },
});
