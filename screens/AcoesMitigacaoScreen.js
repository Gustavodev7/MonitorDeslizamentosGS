import React from 'react';
import { ScrollView, Text, View, Button, Alert } from 'react-native';

export default function AcoesMitigacaoScreen() {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 18 }}>
        Ações de Mitigação
      </Text>

      <View style={{ marginBottom: 14, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, marginRight: 8, marginLeft : -10 }}>🌱</Text>
        <Text style={{ fontSize: 16 }}>
          Plantio de vegetação em encostas para estabilização do solo.
        </Text>
      </View>

      <View style={{ marginBottom: 14, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, marginRight: 8, marginLeft: -10 }}>🛡️</Text>
        <Text style={{ fontSize: 16 }}>
          Construção de barreiras de contenção.
        </Text>
      </View>

      <View style={{ marginBottom: 14, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, marginRight: 8 , marginLeft : -10}}>📈</Text>
        <Text style={{ fontSize: 16 }}>
          Monitoramento contínuo dos indicadores ambientais.
        </Text>
      </View>

      <View style={{ marginBottom: 14, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, marginRight: 8, marginLeft : -10 }}>🚨</Text>
        <Text style={{ fontSize: 16 }}>
          Adoção de sistemas de alerta e evacuação em áreas vulneráveis.
        </Text>
      </View>

      <View style={{ marginBottom: 12, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 19, marginRight: 6, marginLeft: -10 }}>👨‍👩‍👧‍👦</Text>
        <Text style={{ fontSize: 16 }}>
          Educação da comunidade sobre procedimentos em caso de alerta.
        </Text>
      </View>

      <View style={{ marginTop: 22, marginBottom: 16 }}>
        <Button
          title="Acionar Defesa Civil"
          color="#d32f2f"
          onPress={() =>
            Alert.alert('Atenção', 'Defesa Civil acionada! Aguarde orientações oficiais.')
          }
        />
      </View>

      <View style={{ marginTop: 10 }}>
        <Text style={{ fontStyle: 'italic', color: '#888', fontSize: 15 }}>
          Em caso de alerta, siga as orientações das autoridades e mantenha a calma.
        </Text>
      </View>
    </ScrollView>
  );
}
