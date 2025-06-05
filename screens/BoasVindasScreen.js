import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function BoasVindasScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {}
      <View style={{ alignItems: 'center', marginBottom: 16 }}>
        <MaterialCommunityIcons name="weather-cloudy" size={48} color="#19A7CE" />
        <Text style={styles.title}>Bem-vindo, insira os dados abaixo:</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InsercaoDados')}>
        <Text style={styles.buttonText}>Inserir Dados Ambientais</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('VisualizacaoRiscos')}>
        <Text style={styles.buttonText}>Visualizar Riscos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Historico')}>
        <Text style={styles.buttonText}>Histórico de Monitoramento</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AcoesMitigacao')}>
        <Text style={styles.buttonText}>Ações de Mitigação</Text>
      </TouchableOpacity>
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
    color: '#146C94',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#19A7CE',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 18,
    width: '100%',
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
