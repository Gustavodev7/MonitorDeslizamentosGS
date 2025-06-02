import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BoasVindasScreen from './screens/BoasVindasScreen';
import InsercaoDadosScreen from './screens/InsercaoDadosScreen';
import VisualizacaoRiscosScreen from './screens/VisualizacaoRiscosScreen';
import HistoricoScreen from './screens/HistoricoScreen';
import AcoesMitigacaoScreen from './screens/AcoesMitigacaoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BoasVindas">
        <Stack.Screen name="BoasVindas" component={BoasVindasScreen} options={{ title: 'Boas-vindas' }} />
        <Stack.Screen name="InsercaoDados" component={InsercaoDadosScreen} options={{ title: 'Inserir Dados' }} />
        <Stack.Screen name="VisualizacaoRiscos" component={VisualizacaoRiscosScreen} options={{ title: 'Visualização de Riscos' }} />
        <Stack.Screen name="Historico" component={HistoricoScreen} options={{ title: 'Histórico de Monitoramento' }} />
        <Stack.Screen name="AcoesMitigacao" component={AcoesMitigacaoScreen} options={{ title: 'Ações de Mitigação' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
