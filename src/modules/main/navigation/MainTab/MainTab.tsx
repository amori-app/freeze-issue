import React, { ReactElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeStack } from '../../modules/home';

const Tab = createBottomTabNavigator();

export function MainTab(): ReactElement {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      sceneContainerStyle={{ backgroundColor: '#000' }}
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
    </Tab.Navigator>
  );
}
