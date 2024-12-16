import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainTab } from '../MainTab/MainTab';

import { MainStackParamList } from './types';

const Stack = createNativeStackNavigator<MainStackParamList>();

export function MainStack(): ReactElement {
  return (
    <Stack.Navigator
      initialRouteName="MainTab"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#000',
        },
      }}>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{ animation: 'fade' }}
      />
    </Stack.Navigator>
  );
}
