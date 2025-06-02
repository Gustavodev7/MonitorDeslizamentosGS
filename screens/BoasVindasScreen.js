
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function BoasVindasScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 26, marginBottom: 24, textAlign: 'center' }}>
        Bem-vindo ao App de Monitoramento de Riscos de Deslizamentos!
      </Text>
      <Button title="Inserir Dados Ambientais" onPress={() => navigation.navigate('InsercaoDados')} />
      <View style={{ height: 10 }} />
      <Button title="Visualizar Riscos" onPress={() => navigation.navigate('VisualizacaoRiscos')} />
      <View style={{ height: 10 }} />
      <Button title="Histórico de Monitoramento" onPress={() => navigation.navigate('Historico')} />
      <View style={{ height: 10 }} />
      <Button title="Ações de Mitigação" onPress={() => navigation.navigate('AcoesMitigacao')} />
    </View>
  );
}