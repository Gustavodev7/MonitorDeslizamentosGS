import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function VisualizacaoRiscosScreen() {
  const [risco, setRisco] = useState('Carregando...');
  const [cor, setCor] = useState('#000');

  useEffect(() => {
    const verificarRisco = async () => {
      let historico = await AsyncStorage.getItem('historico');
      historico = historico ? JSON.parse(historico) : [];
      if (historico.length === 0) {
        setRisco('Nenhum dado inserido.');
        setCor('#000');
        return;
      }
      const ultimo = historico[historico.length - 1];
      // Lógica simples para alerta:
      if (ultimo.umidade > 70 && ultimo.inclinacao > 30) {
        setRisco('ALERTA VERMELHO: Risco ALTO de deslizamento!');
        setCor('red');
      } else if (ultimo.umidade > 50 && ultimo.inclinacao > 20) {
        setRisco('Atenção: Risco MODERADO de deslizamento.');
        setCor('orange');
      } else {
        setRisco('Situação normal: Risco BAIXO.');
        setCor('green');
      }
    };
    verificarRisco();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 26, marginBottom: 24 }}>Previsão de Riscos</Text>
      <Text style={{ fontSize: 22, color: cor, textAlign: 'center' }}>{risco}</Text>
    </View>
  );
}
