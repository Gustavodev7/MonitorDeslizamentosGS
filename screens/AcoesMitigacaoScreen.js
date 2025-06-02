import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function AcoesMitigacaoScreen() {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 16 }}>Ações de Mitigação</Text>
      <View style={{ marginBottom: 12 }}>
        <Text>- Plantio de vegetação em encostas para estabilização do solo.</Text>
      </View>
      <View style={{ marginBottom: 12 }}>
        <Text>- Construção de barreiras de contenção.</Text>
      </View>
      <View style={{ marginBottom: 12 }}>
        <Text>- Monitoramento contínuo dos indicadores ambientais.</Text>
      </View>
      <View style={{ marginBottom: 12 }}>
        <Text>- Adoção de sistemas de alerta e evacuação em áreas vulneráveis.</Text>
      </View>
      <View style={{ marginBottom: 12 }}>
        <Text>- Educação da comunidade sobre procedimentos em caso de alerta.</Text>
      </View>
    </ScrollView>
  );
}
