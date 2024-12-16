import React, { ReactNode } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainStack } from '../../main';

import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStack(): ReactNode {
  return (
    <Stack.Navigator
      initialRouteName="MainStack"
      screenOptions={{
        headerShown: false,
        animation: 'fade',
        contentStyle: {
          backgroundColor: '#000',
        },
      }}>
      <Stack.Screen name="MainStack" component={MainStack} />
    </Stack.Navigator>
  );
}
