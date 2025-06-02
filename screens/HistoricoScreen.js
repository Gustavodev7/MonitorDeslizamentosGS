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

  // Função para verificar risco (ajuste os limiares conforme seu app)
  const isRisco = (umidade, inclinacao) => {
    return umidade > 70 && inclinacao > 25; // ajuste conforme seu critério!
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Monitoramento</Text>
      <FlatList
        data={dados}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => {
          const risco = isRisco(item.umidade, item.inclinacao);
          return (
            <View
              style={[
                styles.card,
                risco && {
                  borderLeftColor: '#d32f2f',
                  backgroundColor: '#fff0f0',
                },
              ]}
            >
              <Text style={[styles.data, risco && { color: '#b71c1c' }]}>
                Data: {item.data}
              </Text>
              <Text style={[styles.text, risco && { color: '#d32f2f' }]}>
                Umidade: <Text style={[styles.bold, risco && { color: '#b71c1c' }]}>{item.umidade}%</Text>
              </Text>
              <Text style={[styles.text, risco && { color: '#d32f2f' }]}>
                Inclinação: <Text style={[styles.bold, risco && { color: '#b71c1c' }]}>{item.inclinacao}°</Text>
              </Text>
              {risco && (
                <Text style={{ color: '#d32f2f', fontWeight: 'bold', marginTop: 8 }}>
                  RISCO DE DESLIZAMENTO!
                </Text>
              )}
            </View>
          );
        }}
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
