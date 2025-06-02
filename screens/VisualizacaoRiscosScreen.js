import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function VisualizacaoRiscosScreen() {
  const [risco, setRisco] = useState('Carregando...');
  const [cor, setCor] = useState('#aaa');

  useEffect(() => {
    const verificarRisco = async () => {
      let historico = await AsyncStorage.getItem('historico');
      historico = historico ? JSON.parse(historico) : [];
      if (historico.length === 0) {
        setRisco('Nenhum dado inserido.');
        setCor('#aaa');
        return;
      }
      const ultimo = historico[historico.length - 1];
      if (ultimo.umidade > 70 && ultimo.inclinacao > 30) {
        setRisco('ALERTA VERMELHO: Risco ALTO de deslizamento!');
        setCor('#D8000C');
      } else if (ultimo.umidade > 50 && ultimo.inclinacao > 20) {
        setRisco('Atenção: Risco MODERADO de deslizamento.');
        setCor('#FFBF00');
      } else {
        setRisco('Situação normal: Risco BAIXO.');
        setCor('#388E3C');
      }
    };
    verificarRisco();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Previsão de Riscos</Text>
      <View style={[styles.card, { borderColor: cor }]}>
        <Text style={[styles.riskText, { color: cor }]}>{risco}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f7fa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 28,
    color: '#146C94',
    textAlign: 'center',
  },
  card: {
    padding: 32,
    borderRadius: 18,
    backgroundColor: '#fff',
    elevation: 2,
    borderWidth: 3,
    marginBottom: 8,
    alignItems: 'center',
  },
  riskText: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
});
