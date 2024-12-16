import React, { ReactElement } from 'react';
import LogRocket from '@logrocket/react-native';
import { NavigationContainer } from '@react-navigation/native';

import { RootStack } from './src/modules/root';

/**
 * In order to provide minimum example, we put the LogRocket
 * here. However, in the actual app, we put it in the proper
 * place. Regardless of this placement, the freezing bug
 * still happens.
 */
LogRocket.init('amori/amori');
LogRocket.identify('123456789', {
  name: 'John Doe',
  phone: '+1234234234',
});

export function App(): ReactElement {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
